package com.revature.controllers;
import com.revature.aspects.AdminOnly;
import com.revature.models.DTOs.OutgoingUserDTO;
import com.revature.models.Reimbursement;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody User newUser){
        User u = userService.register(newUser);
        return ResponseEntity.ok(u);
    }

    @AdminOnly
    @GetMapping
    public ResponseEntity<List<OutgoingUserDTO>> getAllUsers(){
        List<OutgoingUserDTO> allUsers = userService.getAllUsers();
        return ResponseEntity.ok(allUsers);
    }

    @AdminOnly
    @GetMapping("/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username){
        if(userService.getUserByUsername(username) == null){
            return ResponseEntity.status(404).body("No user found with username: " + username);
        }
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    @AdminOnly
    @DeleteMapping("/{userId}")
    public ResponseEntity<User> deleteUser(@PathVariable int userId){
        return ResponseEntity.ok(userService.deleteUser(userId));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException e){
        return ResponseEntity.status(400).body(e.getMessage());
    }

}
