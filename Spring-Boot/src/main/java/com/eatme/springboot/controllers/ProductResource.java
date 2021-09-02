package com.eatme.springboot.controllers;

import com.eatme.springboot.dao.models.Product;
import com.eatme.springboot.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

//TODO add req from port 4200
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/products")
public class ProductResource {

    @Autowired
    ProductService productService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getAllProduct(HttpServletRequest request){
        int userId = (Integer) request.getAttribute("userId");
        List<Product> products = productService.fetchAllProducts(userId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(HttpServletRequest request,
                                                          @PathVariable("productId") Integer productId) {
        int userId = (Integer) request.getAttribute("userId");
        Product product = productService.fetchProductById(userId, productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Product> addProduct(HttpServletRequest request,
                                                      @RequestBody Map<String, Object> productMap ) {
        LocalDateTime localDateTime = LocalDateTime.now();


        String name = (String) productMap.get("name");
        String createdAt = localDateTime.format(DateTimeFormatter.ofPattern("yyyy-mm-dd hh:mm:ss"));
        String expireDate = (String) productMap.get("expireDate");
        String quantity = (String) productMap.get("quantity");
        int categoryId = Integer.decode((String)productMap.get("categoryId"));
        int userId = (Integer) request.getAttribute("userId");
        Product product = productService.addProduct(name, createdAt, expireDate, quantity, categoryId, userId);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping("/{productId}")
    public ResponseEntity<Map<String, Boolean>> updateProduct(HttpServletRequest request,
                                                                  @PathVariable("productId") Integer productId,
                                                                  @RequestBody Product product) {
        int userId = (Integer) request.getAttribute("userId");
        productService.updateProduct(productId, product.getCategoryId(), product.getName(), product.getCreatedAt(), product.getExpireDate(), product.getQuantity(), userId, product);
        Map<String, Boolean> map = new HashMap<>();
        map.put("success", true);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(HttpServletRequest request,
                                                                  @PathVariable("productId") Integer productId) {
        int userId = (Integer) request.getAttribute("userId");
        productService.removeProduct(userId, productId);
        Map<String, Boolean> map = new HashMap<>();
        map.put("success", true);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
