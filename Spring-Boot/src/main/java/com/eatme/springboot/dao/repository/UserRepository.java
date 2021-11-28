package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    User findByUserId(Long id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    void deleteByEmail(String email);

}
