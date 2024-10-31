package com.revature.services;
import com.revature.daos.UserDAO;
import com.revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO){
        this.userDAO = userDAO;
    }

    public User register(User newUser){
        //TODO: check that the username is unique

        if(newUser.getUsername() == null || newUser.getUsername().isBlank()){
            throw new IllegalArgumentException("Username cannot be empty!");
        }

        return userDAO.save(newUser);
    }

    public List<User> getAllUsers(){
        return userDAO.findAll();
    }

    //custom DAO method
    public User getUserByUsername(String username){
        if(username == null || username.isBlank()){
            throw new IllegalArgumentException("Please search for a valid username");
        }

        return userDAO.findByUsername(username);
    }

}
