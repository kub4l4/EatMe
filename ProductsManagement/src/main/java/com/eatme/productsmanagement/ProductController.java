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

    @GetMapping("/search/{searchPhrase}")
    public ResponseEntity<List<Products>> searchForProduct(@PathVariable("searchPhrase") String searchPhrase) {
        List<Products> productsList = productService.findProductsByProductName(searchPhrase);
        if (!productsList.isEmpty()) {
            System.out.println("BYLEM");
            return new ResponseEntity<>(productsList, HttpStatus.OK);
        }
        try {
            int foo = Integer.parseInt(searchPhrase);
            productsList = productService.findProductsByCode((long) foo);
            if (!productsList.isEmpty()) {
                System.out.println("BYLEM2");
                return new ResponseEntity<>(productsList, HttpStatus.OK);
            }
        } catch (Exception ignored) {
        }

        productsList.addAll(productService.findProductsByProductNameContaining(searchPhrase));
        productsList.addAll(productService.findProductsByKeywords(searchPhrase));
        if (!productsList.isEmpty()) {
            System.out.println("BYLEM3");
            return new ResponseEntity<>(productsList, HttpStatus.OK);
        }
        System.out.println("NIE BYLEM");
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
