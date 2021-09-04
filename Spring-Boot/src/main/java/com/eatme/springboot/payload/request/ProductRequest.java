package com.eatme.springboot.payload.request;

import javax.validation.constraints.NotBlank;

public class ProductRequest {

    @NotBlank
    private String name;
    @NotBlank
    private Integer categoryId;
    @NotBlank
    private String quantity;
    @NotBlank
    private String expireDate;

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

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }
}
