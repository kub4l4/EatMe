package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.User;
import com.eatme.springboot.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//TODO add req from port 4200
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository user) {
        this.userRepository = user;
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }


}
