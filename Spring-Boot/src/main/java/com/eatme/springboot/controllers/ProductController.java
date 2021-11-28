package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.models.Transaction;
import com.eatme.springboot.services.ProductService;
import com.eatme.springboot.services.TransactionService;
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
    private final TransactionService transactionService;

    @Autowired
    public ProductController(ProductService productService, TransactionService transactionService) {
        this.productService = productService;
        this.transactionService = transactionService;
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
        product.setAmountLeft(product.getProductQuantity());
        product.setArchived(0);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getId_user());
        transaction.setAmount_before(0.0);
        transaction.setAmount_after(product.getAmountLeft());
        transaction.setAmount_changed(product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("New");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<Product> editQuantity(HttpServletRequest request,
                                                @RequestBody Product newProduct) {

        Long idProduct = newProduct.getIdProduct();
        Long idUser = (long) request.getAttribute("userId");
        Product product = productService.findProductsByIdProducts(idProduct);
        //TODO information about problem
        if (product.getId_user() != idUser) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        Transaction transaction = new Transaction();
        transaction.setIdProduct(idProduct);
        transaction.setUserId(idUser);
        transaction.setAmount_before(product.getAmountLeft());
        transaction.setAmount_after(newProduct.getAmountLeft());
        transaction.setAmount_changed(newProduct.getAmountLeft() - product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("Update");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(newProduct);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/archive")
    public ResponseEntity<Product> archiveProduct(HttpServletRequest request,
                                                  @RequestBody Product newProduct) {

        Long idProduct = newProduct.getIdProduct();
        Long idUser = (long) request.getAttribute("userId");
        Product product = productService.findProductsByIdProducts(idProduct);
        //TODO information about problem
        if (product.getId_user() != idUser) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        product.setArchived(1);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getId_user());
        transaction.setAmount_before(product.getAmountLeft());
        transaction.setAmount_after(0.0);
        transaction.setAmount_changed(0 - product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("Archive");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}