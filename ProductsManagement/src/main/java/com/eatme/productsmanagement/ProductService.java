package com.eatme.productsmanagement;

import com.eatme.productsmanagement.models.Products;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;

    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    public Products findProductById(Long id) {
        return productRepository.findProductById(id);
    }

    public List<Products> findProductsByProductName(String name) {
        return productRepository.findProductsByProductName(name);
    }

    public List<Products> findProductsByCode(Long Code) {
        return productRepository.findProductsByCode(Code);
    }

    public List<Products> findProductsByKeywords(String keywords) {
        return productRepository.findProductsByKeywords(keywords);
    }

    public List<Products> findProductsByProductNameContaining(String name){
        return productRepository.findProductsByProductNameContaining(name);
    }
}
