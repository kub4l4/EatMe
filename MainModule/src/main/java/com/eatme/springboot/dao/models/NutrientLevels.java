package com.eatme.springboot.dao.models;

import javax.persistence.*;

@Entity
@Table(name = "Product_NutrientLevels")
public class NutrientLevels {


    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String fat;
    private String saturated_fat;
    private String salt;
    private String sugars;

    public NutrientLevels() {
    }

    public NutrientLevels(long id, String fat, String saturated_fat, String salt, String sugars) {
        this.id = id;
        this.fat = fat;
        this.saturated_fat = saturated_fat;
        this.salt = salt;
        this.sugars = sugars;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFat() {
        return fat;
    }

    public void setFat(String fat) {
        this.fat = fat;
    }

    public String getSaturated_fat() {
        return saturated_fat;
    }

    public void setSaturated_fat(String saturated_fat) {
        this.saturated_fat = saturated_fat;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getSugars() {
        return sugars;
    }

    public void setSugars(String sugars) {
        this.sugars = sugars;
    }
}