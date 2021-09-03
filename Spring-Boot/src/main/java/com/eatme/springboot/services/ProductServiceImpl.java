package com.eatme.springboot.services;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.repository.ProductRepository;
import com.eatme.springboot.exceptions.EtBadRequestException;
import com.eatme.springboot.exceptions.EtResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> fetchAllProducts(Integer userId){
        return productRepository.findAll(userId);
    }

    @Override
    public Product fetchProductById(Integer userId, Integer productId) throws EtResourceNotFoundException{
        return productRepository.findById(userId, productId);
    }

    @Override
    public Product addProduct(String name, long createdAt, String expireDate, String quantity, Integer categoryId, Integer userId) throws EtBadRequestException
    {
        int productId = productRepository.create(name, createdAt, expireDate, quantity, categoryId, userId);
        return productRepository.findById(userId, productId);
    }
    @Override
    public void updateProduct(Integer productId, Integer categoryId, String name, long createdAt, String expireDate, String quantity, Integer userId, Product product) throws EtBadRequestException
    {
        productRepository.update(productId, categoryId, name, createdAt, expireDate, quantity, userId, product);
    }
    @Override
    public void removeProduct(Integer userId, Integer productId) throws EtResourceNotFoundException{
        productRepository.removeById(userId, productId);
    }

}
