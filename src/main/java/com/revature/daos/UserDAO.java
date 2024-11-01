package com.revature.daos;

import com.revature.models.Reimbursement;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{

    User findByUsername(String username);
}

