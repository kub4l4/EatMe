package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.dao.models.Transaction;
import com.eatme.springboot.payload.response.ProductSearch;
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


    @GetMapping("/userProduct")
    public ResponseEntity<List<ProductSearch>> getUserProducts(HttpServletRequest request){

        List<Product> ProductList = productService.findProductByIdUserAndArchived((long) request.getAttribute("userId"), 0);
        List<ProductSearch> productSearchList = (List<ProductSearch>)(List<?>) ProductList;
        return new ResponseEntity<>(productSearchList, HttpStatus.OK);
    }

    @GetMapping("/userProduct/{idProduct}")
    public ResponseEntity<Product> getUserProduct(HttpServletRequest request,
                                                  @PathVariable("idProduct") long idProduct){

        Product product = productService.findProductsByIdProducts(idProduct);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (product.getIdUser() != (long) request.getAttribute("userId")){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/userProduct/new")
    public ResponseEntity<HashMap<String, String>> addProductNew(HttpServletRequest request,
                                                 @RequestBody Product product) {
        if (product.getProductQuantity() == null || product.getProductName() == null ||
        product.getProductSizeType() == null || product.getExpireDate() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        product.setAmountLeft(product.getProductQuantity());
        product.setCreatedAt(System.currentTimeMillis());
        product.setIdUser((long) request.getAttribute("userId"));
        product.setArchived(0);
        saveTransaction(product.getIdProduct(), product.getIdUser(), 0, product.getAmountLeft(), "New");
        productService.saveAndFlush(product);
        HashMap<String, String> response = new HashMap<String, String>();
        response.put("productName", product.getProductName());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/userProduct/PM")
    public ResponseEntity<HashMap<String, String>> addProductFromPM(HttpServletRequest request,
                                                    @RequestBody Product requestProduct)  {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + requestProduct.getIdProduct(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Product.class);
        Product product = exchange.getBody();

        if (product == null && requestProduct.getExpireDate() == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (requestProduct.getProductName() != null) {
            product.setProductName(requestProduct.getProductName());
        }
        if (requestProduct.getProductQuantity() != null) {
            product.setProductQuantity(requestProduct.getProductQuantity());
        }
        if (requestProduct.getProductSizeType() != null) {
            product.setProductSizeType(requestProduct.getProductSizeType());
        }
        product.setExpireDate(requestProduct.getExpireDate());
        product.setCreatedAt(System.currentTimeMillis());
        product.setIdUser((long) request.getAttribute("userId"));
        product.setAmountLeft(product.getProductQuantity());
        product.setArchived(0);
        saveTransaction(product.getIdProduct(), product.getIdUser(), 0, product.getAmountLeft(), "New, imported");
        productService.saveAndFlush(product);
        HashMap<String, String> response = new HashMap<String, String>();
        response.put("productName", product.getProductName());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/userProduct")
    public ResponseEntity<HashMap<String, String>> editProduct(HttpServletRequest request,
                                               @RequestBody Product requestProduct) {

        long idProduct = requestProduct.getIdProduct();
        long idUser = (long) request.getAttribute("userId");
        Product product = productService.findProductsByIdProducts(idProduct);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (product.getIdUser() != idUser) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        if (requestProduct.getProductName() != null) {
            product.setProductName(requestProduct.getProductName());
        }
        if (requestProduct.getAmountLeft() != null) {
            product.setAmountLeft(requestProduct.getAmountLeft());
        }
        if (requestProduct.getExpireDate() != null) {
            product.setExpireDate(requestProduct.getExpireDate());
        }
        saveTransaction(idProduct, idUser, product.getAmountLeft(), requestProduct.getAmountLeft(), "Update");
        productService.saveAndFlush(product);
        HashMap<String, String> response = new HashMap<String, String>();
        response.put("productName", product.getProductName());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/userProduct/{idProduct}")
    public ResponseEntity<HashMap<String, String>> archiveProduct(HttpServletRequest request,
                                                  @PathVariable("idProduct") long idProduct) {
        Product product = productService.findProductsByIdProducts(idProduct);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (product.getIdUser() != (long) request.getAttribute("userId")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        product.setArchived(1);
        product.setAmountLeft(0.0);
        saveTransaction(product.getIdProduct(), product.getIdUser(), product.getAmountLeft(), 0, "Archive");
        productService.saveAndFlush(product);
        HashMap<String, String> response = new HashMap<String, String>();
        response.put("productName", product.getProductName());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/PM/{idProduct}")
    public ResponseEntity<Product> getProductFromPMById(@PathVariable("idProduct") long idProduct) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Product> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/" + idProduct,
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Product.class);
        Product SavedProduct = exchange.getBody();
        return new ResponseEntity<>(SavedProduct, HttpStatus.OK);
    }

    @GetMapping("/PM/search/{SearchPhrase}")
    public ResponseEntity<ProductSearch[]> getProductFromPMById(@PathVariable("SearchPhrase") String searchPhrase) {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<ProductSearch[]> exchange = restTemplate.exchange(
                "http://localhost:9090/api/v1/products/search/" + searchPhrase,
                HttpMethod.GET,
                HttpEntity.EMPTY,
                ProductSearch[].class
        );
        ProductSearch[] productSearch = exchange.getBody();

        return new ResponseEntity<>(productSearch, HttpStatus.OK);
    }

    public void saveTransaction(long IdProduct, long IdUser, double Amount_before, double Amount_after, String operationType){
        Transaction transaction = new Transaction();
        transaction.setIdProduct(IdProduct);
        transaction.setUserId(IdUser);
        transaction.setAmount_before(Amount_before);
        transaction.setAmount_after(Amount_after);
        transaction.setAmount_changed(Amount_before - Amount_after);
        transaction.setCreatedAt(System.currentTimeMillis());
        transaction.setTransactionType(operationType);
        transactionService.save(transaction);
    }
}