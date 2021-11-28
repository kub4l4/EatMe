package com.eatme.springboot.services;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public <S extends Product> S save(S s) {
        return productRepository.save(s);
    }

    public <S extends Product> S saveAndFlush(S s) {
        return productRepository.saveAndFlush(s);
    }

    public Product findProductsByIdProducts(Long id) {
        return productRepository.findProductsByIdProduct(id);
    }

}
