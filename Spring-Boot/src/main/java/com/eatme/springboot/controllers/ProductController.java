package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

//TODO add req from port 4200
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v2/products")
public class ProductController {


    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public ResponseEntity<List<Product>> findAll() {
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductFromPMById(@PathVariable("productId") Long productId) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + productId,
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Product.class);
        Product SavedProduct = exchange.getBody();

        /*ResponseEntity<Products> response =
                restTemplate.getForEntity(
                        "http://localhost:9090/api/v1/products/"+productId,
                        Products.class);
        Products SavedProduct1 = response.getBody();
        productsService.save(SavedProduct1);*/

        return new ResponseEntity<>(SavedProduct, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(HttpServletRequest request,
                                              @RequestBody Product product) {

        product.setCreatedAt(System.currentTimeMillis());
        product.setId_user((long) request.getAttribute("userId"));
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}