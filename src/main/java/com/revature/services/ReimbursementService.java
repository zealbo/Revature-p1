package com.revature.services;
import com.revature.daos.ReimbursementDAO;
import com.revature.daos.UserDAO;
import com.revature.models.DTOs.ReimbursementDTO;
import com.revature.models.Reimbursement;
import com.revature.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReimbursementService {

    private ReimbursementDAO rDAO;
    private UserDAO uDAO;
    @Autowired
    public ReimbursementService(ReimbursementDAO rDAO, UserDAO uDAO){
        this.rDAO = rDAO;
        this.uDAO = uDAO;
    }

    public Reimbursement addReimbursement(ReimbursementDTO reimbursementDTO){
        Reimbursement newReimbursement = new Reimbursement(0, reimbursementDTO.getAmount(), reimbursementDTO.getDescription(), reimbursementDTO.getStatus(), null);
        Optional<User> u = uDAO.findById(reimbursementDTO.getUserId());

        if(u.isEmpty()){
            throw new IllegalArgumentException("No user found with id " + reimbursementDTO.getUserId());
        } else {
            newReimbursement.setUser(u.get());
            return rDAO.save(newReimbursement);
        }
    }

    public List<Reimbursement> getAllReimbursements(){
        return rDAO.findAll();
    }
}
