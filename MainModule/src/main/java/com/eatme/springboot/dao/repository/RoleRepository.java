package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.ERole;
import com.eatme.springboot.dao.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
