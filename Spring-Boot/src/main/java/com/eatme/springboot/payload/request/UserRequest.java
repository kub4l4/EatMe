package com.eatme.springboot.payload.request;

import com.eatme.springboot.dao.models.User;
import com.eatme.springboot.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserRequest {

    private UserRepository userRepository;

    @Autowired
    public UserRequest( UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Iterable<User> findAll() { return userRepository.findAll();}

}
