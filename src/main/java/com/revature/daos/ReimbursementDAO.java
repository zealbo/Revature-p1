package com.revature.daos;

import com.revature.models.Reimbursement;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ReimbursementDAO extends JpaRepository<Reimbursement, Integer>{



}
