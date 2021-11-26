package com.eatme.productsmanagement;

import com.eatme.productsmanagement.models.Products;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Products, Long> {

    Products findProductById(Long Id);
    List<Products> findProductsByCode(Long code);
    List<Products> findProductsById(Long Id);
    List<Products> findProductsByProductName(String name);
    List<Products> findProductsByKeywords(String keywords);



}
