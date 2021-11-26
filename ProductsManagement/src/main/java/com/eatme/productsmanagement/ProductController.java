package com.eatme.productsmanagement;

import com.eatme.productsmanagement.models.Products;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("")
    public List<Products> fetchAllProducts() {
        return productService.getAllProducts();
    }


    @GetMapping("/{productId}")
    public ResponseEntity<Products> getProductById(@PathVariable("productId") Long productId) {
        Products product = productService.findProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/search/{product}")
    public List<Products> searchForProduct(@PathVariable("product") String product) {
        List<Products> productsList = productService.findProductsByProductName(product);
        if (!productsList.isEmpty()) {
            System.out.println("findProductsByProductNameEn " + productsList);
            return productsList;
        }
        try{
            int foo = Integer.parseInt(product);
            productsList = productService.findProductsByCode((long) foo);
            if (!productsList.isEmpty()) {
                System.out.println("findAllProductByCode " + productsList);
                return productsList;
            }
        }catch (Exception ex){};
        //TODO Find better solution


        productsList = productService.findProductsByKeywords(product);
        if (!productsList.isEmpty()) {
            System.out.println("findProductsByKeywords " + productsList);
            return productsList;
        }
        return productsList;
    }


}
