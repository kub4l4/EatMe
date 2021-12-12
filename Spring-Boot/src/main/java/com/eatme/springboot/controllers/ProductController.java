package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.models.ProductSearch;
import com.eatme.springboot.dao.models.ProductWrapper;
import com.eatme.springboot.dao.models.Transaction;
import com.eatme.springboot.services.ProductService;
import com.eatme.springboot.services.TransactionService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.HashMap;
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

    @GetMapping("/PM/{idProduct}")
    public ResponseEntity<Product> getProductFromPMById(@PathVariable("idProduct") Long idProduct) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + idProduct,
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

    @GetMapping("/PM/search/{SearchPhrase}")
    public ResponseEntity<ProductSearch[]> getProductFromPMById(@PathVariable("SearchPhrase") String searchPhrase) {

        RestTemplate restTemplate = new RestTemplate();
        List<ProductSearch> foundProducts = null;
        ResponseEntity<ProductSearch[]> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/search/" + searchPhrase,
                HttpMethod.GET,
                HttpEntity.EMPTY,
                ProductSearch[].class
        );
        ProductSearch[] productSearch = exchange.getBody();

        return new ResponseEntity<>(productSearch, HttpStatus.OK);
    }


    @GetMapping("/userProducts")
    public ResponseEntity<List<Product>> getUserProducts(HttpServletRequest request){

        List<Product> ProductList = productService.findProductByIdUserAndArchived((long) request.getAttribute("userId"), 0);
        return new ResponseEntity<>(ProductList, HttpStatus.OK);
    }

    @GetMapping("/userProduct/{idProduct}")
    public ResponseEntity<Product> getUserProduct(HttpServletRequest request,
                                                  @PathVariable("idProduct") Long idProduct){

        Product product = productService.findProductsByIdProducts(idProduct);
        if (product.getIdUser() != (long) request.getAttribute("userId")){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<Product> addNewProduct(HttpServletRequest request,
                                              @RequestBody Product product) {
        product.setCreatedAt(System.currentTimeMillis());
        product.setIdUser((long) request.getAttribute("userId"));
        product.setArchived(0);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getIdUser());
        transaction.setAmount_before(0.0);
        transaction.setAmount_after(product.getAmountLeft());
        transaction.setAmount_changed(product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("New");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }


    @PostMapping("/setProduct1")
    public ResponseEntity<Product> addProductFromPM(HttpServletRequest request,
                                               @RequestBody Product requestProduct)  {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + requestProduct.getIdProduct(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Product.class);
        Product product = exchange.getBody();

        product.setExpireDate(requestProduct.getExpireDate());
        product.setCreatedAt(System.currentTimeMillis());
        product.setIdUser((long) request.getAttribute("userId"));
        product.setAmountLeft(product.getProductQuantity());
        product.setArchived(0);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getIdUser());
        transaction.setAmount_before(0.0);
        transaction.setAmount_after(product.getAmountLeft());
        transaction.setAmount_changed(product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("New, imported");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/setProduct2")
    public ResponseEntity<Product> addAndEditProductFromPM(HttpServletRequest request,
                                                    @RequestBody Product requestProduct)  {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + requestProduct.getIdProduct(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Product.class);
        Product product = exchange.getBody();

        product.setProductQuantity(requestProduct.getProductQuantity());
        product.setProductSizeType(requestProduct.getProductSizeType());
        product.setExpireDate(requestProduct.getExpireDate());
        product.setCreatedAt(System.currentTimeMillis());
        product.setIdUser((long) request.getAttribute("userId"));
        product.setAmountLeft(product.getProductQuantity());
        product.setArchived(0);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getIdUser());
        transaction.setAmount_before(0.0);
        transaction.setAmount_after(product.getAmountLeft());
        transaction.setAmount_changed(product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("New, imported");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/editProduct")
    public ResponseEntity<Product> editProduct(HttpServletRequest request,
                                                @RequestBody Product newProduct) {
        System.out.println(newProduct.getExpireDate());
        Long idProduct = newProduct.getIdProduct();
        Long idUser = (long) request.getAttribute("userId");
        Product product = productService.findProductsByIdProducts(idProduct);
        //TODO information about problem
        if (product.getIdUser() != idUser) {
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
        product.setProductName(newProduct.getProductName());
        product.setAmountLeft(newProduct.getAmountLeft());
        product.setExpireDate(newProduct.getExpireDate());
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/editQuantity")
    public ResponseEntity<Product> editQuantity(HttpServletRequest request,
                                               @RequestBody Product newProduct) {
        System.out.println(newProduct.getExpireDate());
        Long idProduct = newProduct.getIdProduct();
        Long idUser = (long) request.getAttribute("userId");
        Product product = productService.findProductsByIdProducts(idProduct);
        //TODO information about problem
        if (product.getIdUser() != idUser) {
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
        product.setAmountLeft(newProduct.getAmountLeft());
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/archive/{idProduct}")
    public ResponseEntity<Long> archiveProduct(HttpServletRequest request,
                                                  @PathVariable("idProduct") Long idProduct) {

        Product product = productService.findProductsByIdProducts(idProduct);
        //TODO information about problem
        if (product.getIdUser() != (long) request.getAttribute("userId")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        product.setArchived(1);
        product.setAmountLeft(0.0);
        Transaction transaction = new Transaction();
        transaction.setIdProduct(product.getIdProduct());
        transaction.setUserId(product.getIdUser());
        transaction.setAmount_before(product.getAmountLeft());
        transaction.setAmount_after(0.0);
        transaction.setAmount_changed(0 - product.getAmountLeft());
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType("Archive");
        transactionService.saveAndFlush(transaction);
        productService.saveAndFlush(product);
        return new ResponseEntity<>(product.getIdProduct(), HttpStatus.OK);
    }
}