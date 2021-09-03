package com.eatme.springboot.services;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.exceptions.EtBadRequestException;
import com.eatme.springboot.exceptions.EtResourceNotFoundException;


import java.util.List;

public interface ProductService {

    List<Product> fetchAllProducts(Integer userId);

    Product fetchProductById(Integer userId, Integer productId) throws EtResourceNotFoundException;

    Product addProduct(String name, long createdAt, String expireDate, String quantity, Integer categoryId, Integer userId) throws EtBadRequestException;

    void updateProduct(Integer productId, Integer categoryId,  String name, long createdAt, String expireDate, String quantity, Integer userId, Product product) throws EtBadRequestException;

    void removeProduct(Integer userId, Integer productId) throws EtResourceNotFoundException;

}
