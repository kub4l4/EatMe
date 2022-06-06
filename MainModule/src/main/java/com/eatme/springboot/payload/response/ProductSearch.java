package com.eatme.springboot.payload.response;

import java.util.List;

public class ProductSearch {
    private long id;
    private double servingSize;
    private long code;
    private String ecoscoreTags;
    private double productQuantity;
    private String productName;
    private long novaGroups;
    private String ingredientsText;
    private String productSizeType;

    public ProductSearch() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getServingSize() {
        return servingSize;
    }

    public void setServingSize(double servingSize) {
        this.servingSize = servingSize;
    }

    public long getCode() {
        return code;
    }

    public void setCode(long code) {
        this.code = code;
    }

    public String getEcoscoreTags() {
        return ecoscoreTags;
    }

    public void setEcoscoreTags(String ecoscoreTags) {
        this.ecoscoreTags = ecoscoreTags;
    }

    public double getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(double productQuantity) {
        this.productQuantity = productQuantity;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public long getNovaGroups() {
        return novaGroups;
    }

    public void setNovaGroups(long novaGroups) {
        this.novaGroups = novaGroups;
    }

    public String getIngredientsText() {
        return ingredientsText;
    }

    public void setIngredientsText(String ingredientsText) {
        this.ingredientsText = ingredientsText;
    }

    public String getProductSizeType() {
        return productSizeType;
    }

    public void setProductSizeType(String productSizeType) {
        this.productSizeType = productSizeType;
    }
}
