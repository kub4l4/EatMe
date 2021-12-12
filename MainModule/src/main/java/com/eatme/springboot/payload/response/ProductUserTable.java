package com.eatme.springboot.payload.response;



public class ProductUserTable {
    private long idProduct;
    private long id;
    private double servingSize;
    private double productQuantity;
    private String productName;
    private long novaGroups;
    private String productSizeType;
    private double amountLeft;
    private long createdAt;
    private long expireDate;

    public ProductUserTable() {
    }

    public ProductUserTable(long idProduct, long id, double servingSize, double productQuantity, String productName, long novaGroups, String productSizeType, double amountLeft, long createdAt, long expireDate) {
        this.idProduct = idProduct;
        this.id = id;
        this.servingSize = servingSize;
        this.productQuantity = productQuantity;
        this.productName = productName;
        this.novaGroups = novaGroups;
        this.productSizeType = productSizeType;
        this.amountLeft = amountLeft;
        this.createdAt = createdAt;
        this.expireDate = expireDate;
    }

    public long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(long idProduct) {
        this.idProduct = idProduct;
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

    public String getProductSizeType() {
        return productSizeType;
    }

    public void setProductSizeType(String productSizeType) {
        this.productSizeType = productSizeType;
    }

    public double getAmountLeft() {
        return amountLeft;
    }

    public void setAmountLeft(double amountLeft) {
        this.amountLeft = amountLeft;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }

    public long getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(long expireDate) {
        this.expireDate = expireDate;
    }
}
