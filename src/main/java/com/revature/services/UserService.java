package com.revature.services;
import com.revature.daos.UserDAO;
import com.revature.models.DTOs.OutgoingUserDTO;
import com.revature.models.Reimbursement;
import com.revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO){
        this.userDAO = userDAO;
    }

    public User register(User newUser){
        if(newUser.getUsername() == null || newUser.getUsername().isBlank()){
            throw new IllegalArgumentException("Username cannot be empty.");
        }

        if(userDAO.findById(newUser.getUserId()).isPresent()){
            throw new IllegalArgumentException("User already exists.");
        }

        return userDAO.save(newUser);
    }

    public List<OutgoingUserDTO> getAllUsers(){
        List<User> users = userDAO.findAll();
        List<OutgoingUserDTO> outUsers = new ArrayList<>();
        for(User user : users){
            outUsers.add(new OutgoingUserDTO(user.getUserId(), user.getFirstName(), user.getLastName(), user.getUsername(), user.getRole()));
        }
        return outUsers;
    }

    //custom DAO method
    public User getUserByUsername(String username){
        if(username == null || username.isBlank()){
            throw new IllegalArgumentException("Please search for a valid username");
        }

        if(userDAO.findById(userDAO.findByUsername(username).getUserId()).isEmpty()){
            throw new IllegalArgumentException("User doesn't exists.");
        }

        return userDAO.findByUsername(username);
    }

    public User deleteUser(int userId){
        User u = userDAO.findById(userId).orElseThrow(() -> new IllegalArgumentException("No user found with id: " + userId));
        userDAO.deleteById(userId);
        return u;
    }

}
