package com.revature.daos;

import com.revature.models.Reimbursement;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReimbursementDAO extends JpaRepository<Reimbursement, Integer>{

    List<Reimbursement> findByUserUserId(int userId);
    List<Reimbursement> findByUserUserIdAndStatus(int userId, String status);

}
