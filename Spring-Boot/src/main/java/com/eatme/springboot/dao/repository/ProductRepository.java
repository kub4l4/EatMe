package com.eatme.springboot.dao.repository;

import com.eatme.springboot.dao.models.Product;

import com.eatme.springboot.exceptions.EtBadRequestException;
import com.eatme.springboot.exceptions.EtResourceNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;


//@Repository
public interface ProductRepository {

    List<Product> findAll(Integer userId);

    Product findById(Integer userId, Integer productId) throws EtResourceNotFoundException;

    Integer create(String name, String createdAt, String expireDate, String quantity, Integer categoryId, Integer userId) throws EtBadRequestException;

    void update(Integer productId, Integer categoryId, String name, String createdAt, String expireDate, String quantity, Integer userId, Product product) throws EtBadRequestException;

    void removeById(Integer userId, Integer productId) throws EtResourceNotFoundException;

}
