package com.eatme.springboot.dao.models;

public class ProductWrapper {

    private Product product;

    public ProductWrapper() {
    }

    public ProductWrapper(Product product) {
        this.product = product;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}

