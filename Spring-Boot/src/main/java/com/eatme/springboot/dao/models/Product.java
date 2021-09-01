package com.eatme.springboot.dao.models;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "product")
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long idProduct;

    private String title;
    private String type;
    private java.sql.Date createdAt;
    private java.sql.Date updatedAt;
    private String Capacity;

    public Product() {
    }

    public Product(String title, String type, Date createdAt, Date updatedAt, String Capacity) {
        this.title = title;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.Capacity = Capacity;
    }

    public long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(long idProduct) {
        this.idProduct = idProduct;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getType() {
        return type;
    }

    public void setType(long idType) {
        this.type = type;
    }


    public java.sql.Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(java.sql.Date createdAt) {
        this.createdAt = createdAt;
    }


    public java.sql.Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(java.sql.Date updatedAt) {
        this.updatedAt = updatedAt;
    }


    public String getCapacity() {
        return Capacity;
    }

    public void setCapacity(String Capacity) {
        this.Capacity = Capacity;
    }

}
