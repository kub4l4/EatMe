package com.eatme.springboot.dao.models;


import javax.persistence.*;


@Entity
@Table(name = "product")
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer productId;
    private String createdAt;
    private String expireDate;
    private String name;
    private Integer categoryId;
    private String quantity;
    private Integer userId;

    public Product() {
    }

    public Product(Integer productId, String createdAt, String expireDate, String name, Integer categoryId, String quantity, Integer userId) {
        this.productId = productId;
        this.createdAt = createdAt;
        this.expireDate = expireDate;
        this.name = name;
        this.categoryId = categoryId;
        this.quantity = quantity;
        this.userId = userId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productid) {
        this.productId = productid;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
//@ManyToOne
    //@MapsId("idUser")
    //@JoinColumn(name = "idUser")
}