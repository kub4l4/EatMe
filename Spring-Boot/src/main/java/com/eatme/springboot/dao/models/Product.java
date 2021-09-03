package com.eatme.springboot.dao.models;


import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "PRODUCTS")
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer productId;
    private long createdAt;
    private String expireDate;
    private String name;

    @ManyToOne
    private Category category;

    private Integer categoryId;

    private String quantity;
    private Integer userId;

    @ManyToOne
    private User user;

    public Product() {
    }

    public Product(long createdAt, String expireDate, String name, Integer categoryId, String quantity, Integer userId) {
        this.createdAt = createdAt;
        this.expireDate = expireDate;
        this.name = name;
        this.categoryId = categoryId;
        this.quantity = quantity;
        this.userId = userId;
    }

    public Product(Integer productId, long createdAt, String expireDate, String name, Integer categoryId, String quantity, Integer userId) {
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

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}