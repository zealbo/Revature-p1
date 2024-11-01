package com.revature.controllers;
import com.revature.models.DTOs.ReimbursementDTO;
import com.revature.models.Reimbursement;
import com.revature.services.ReimbursementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reimbursements")
public class ReimbursementController {

    private ReimbursementService reimbursementService;

    @Autowired
    public ReimbursementController(ReimbursementService reimbursementService){
        this.reimbursementService = reimbursementService;
    }

    @PostMapping
    public ResponseEntity<Reimbursement> insertReimbursement(@RequestBody ReimbursementDTO reimbursementDTO){
        Reimbursement r = reimbursementService.addReimbursement(reimbursementDTO);
        return ResponseEntity.status(201).body(r);
    }

    @GetMapping
    public ResponseEntity<List<Reimbursement>> getAllReimbursements(){
        return ResponseEntity.ok(reimbursementService.getAllReimbursements());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Reimbursement>> findByUserUserId(@PathVariable int userId){
        return ResponseEntity.ok(reimbursementService.findByUserUserId(userId));
    }

    @GetMapping("/{userId}/{status}")
    public ResponseEntity<List<Reimbursement>> findByUserUserIdAndStatus(@PathVariable int userId, @PathVariable String status){
        return ResponseEntity.ok(reimbursementService.findByUserUserIdAndStatus(userId, status));
    }

    @GetMapping("/{status}/status")
    public ResponseEntity<List<Reimbursement>> findByStatus(@PathVariable String status){
        return ResponseEntity.ok(reimbursementService.findByStatus(status));
    }

    @PatchMapping("/{userId}/description")
    public ResponseEntity<Reimbursement> updateReimbursementDescription(@PathVariable int userId, @RequestBody String newDescription){
        return ResponseEntity.status(202).body(reimbursementService.updateReimbursementDescription(userId, newDescription));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException e){
        return ResponseEntity.status(400).body(e.getMessage());
    }

}
