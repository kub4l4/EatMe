package com.eatme.springboot.dao.models;

import java.util.List;

public class ProductSearch {
    private long id;
    private Double servingSize;
    private long code;
    private String ecoscoreTags;
    private Double productQuantity;
    private String productName;
    private long novaGroups;
    private List<String> categories;
    private String productSizeType;

    public ProductSearch() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Double getServingSize() {
        return servingSize;
    }

    public void setServingSize(Double servingSize) {
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

    public Double getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Double productQuantity) {
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

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public String getProductSizeType() {
        return productSizeType;
    }

    public void setProductSizeType(String productSizeType) {
        this.productSizeType = productSizeType;
    }
}
