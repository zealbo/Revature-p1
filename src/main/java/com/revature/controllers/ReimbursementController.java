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

    @GetMapping("/pending/{userId}")
    public ResponseEntity<List<Reimbursement>> findByUserUserIdAndStatusContainingPending(@PathVariable int userId){
        return ResponseEntity.ok(reimbursementService.findByUserUserIdAndStatusContainingPending(userId));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException e){
        return ResponseEntity.status(400).body(e.getMessage());
    }

}
