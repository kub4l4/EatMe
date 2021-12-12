package com.eatme.springboot.dao.models;

import javax.persistence.*;

@Entity
@Table(name = "Product_NutriscoreData")
public class NutriscoreData {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int energy;
    private int energy_points;
    private int energy_value;
    private double fiber;
    private int fiber_points;
    private double fiber_value;
    private int fruits_vegetables_nuts_colza_walnut_olive_oils;
    private int fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    private int fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    private String grade;
    private int is_beverage;
    private int is_cheese;
    private int is_fat;
    private int is_water;
    private int negative_points;
    private int positive_points;
    private double proteins;
    private int proteins_points;
    private double proteins_value;
    private double saturated_fat;
    private double saturated_fat_points;
    private double saturated_fat_ratio;
    private double saturated_fat_ratio_points;
    private double saturated_fat_ratio_value;
    private double saturated_fat_value;
    private int score;
    private int sodium;
    private int sodium_points;
    private int sodium_value;
    private double sugars;
    private int sugars_points;
    private double sugars_value;

    public NutriscoreData() {
    }

    public NutriscoreData(long id, int energy, int energy_points, int energy_value, double fiber, int fiber_points, double fiber_value, int fruits_vegetables_nuts_colza_walnut_olive_oils, int fruits_vegetables_nuts_colza_walnut_olive_oils_points, int fruits_vegetables_nuts_colza_walnut_olive_oils_value, String grade, int is_beverage, int is_cheese, int is_fat, int is_water, int negative_points, int positive_points, double proteins, int proteins_points, double proteins_value, double saturated_fat, double saturated_fat_points, double saturated_fat_ratio, double saturated_fat_ratio_points, double saturated_fat_ratio_value, double saturated_fat_value, int score, int sodium, int sodium_points, int sodium_value, double sugars, int sugars_points, double sugars_value) {
        this.id = id;
        this.energy = energy;
        this.energy_points = energy_points;
        this.energy_value = energy_value;
        this.fiber = fiber;
        this.fiber_points = fiber_points;
        this.fiber_value = fiber_value;
        this.fruits_vegetables_nuts_colza_walnut_olive_oils = fruits_vegetables_nuts_colza_walnut_olive_oils;
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_points = fruits_vegetables_nuts_colza_walnut_olive_oils_points;
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_value = fruits_vegetables_nuts_colza_walnut_olive_oils_value;
        this.grade = grade;
        this.is_beverage = is_beverage;
        this.is_cheese = is_cheese;
        this.is_fat = is_fat;
        this.is_water = is_water;
        this.negative_points = negative_points;
        this.positive_points = positive_points;
        this.proteins = proteins;
        this.proteins_points = proteins_points;
        this.proteins_value = proteins_value;
        this.saturated_fat = saturated_fat;
        this.saturated_fat_points = saturated_fat_points;
        this.saturated_fat_ratio = saturated_fat_ratio;
        this.saturated_fat_ratio_points = saturated_fat_ratio_points;
        this.saturated_fat_ratio_value = saturated_fat_ratio_value;
        this.saturated_fat_value = saturated_fat_value;
        this.score = score;
        this.sodium = sodium;
        this.sodium_points = sodium_points;
        this.sodium_value = sodium_value;
        this.sugars = sugars;
        this.sugars_points = sugars_points;
        this.sugars_value = sugars_value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public int getEnergy_points() {
        return energy_points;
    }

    public void setEnergy_points(int energy_points) {
        this.energy_points = energy_points;
    }

    public int getEnergy_value() {
        return energy_value;
    }

    public void setEnergy_value(int energy_value) {
        this.energy_value = energy_value;
    }

    public double getFiber() {
        return fiber;
    }

    public void setFiber(double fiber) {
        this.fiber = fiber;
    }

    public int getFiber_points() {
        return fiber_points;
    }

    public void setFiber_points(int fiber_points) {
        this.fiber_points = fiber_points;
    }

    public double getFiber_value() {
        return fiber_value;
    }

    public void setFiber_value(double fiber_value) {
        this.fiber_value = fiber_value;
    }

    public int getFruits_vegetables_nuts_colza_walnut_olive_oils() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils(int fruits_vegetables_nuts_colza_walnut_olive_oils) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils = fruits_vegetables_nuts_colza_walnut_olive_oils;
    }

    public int getFruits_vegetables_nuts_colza_walnut_olive_oils_points() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils_points(int fruits_vegetables_nuts_colza_walnut_olive_oils_points) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_points = fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    }

    public int getFruits_vegetables_nuts_colza_walnut_olive_oils_value() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils_value(int fruits_vegetables_nuts_colza_walnut_olive_oils_value) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_value = fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public int getIs_beverage() {
        return is_beverage;
    }

    public void setIs_beverage(int is_beverage) {
        this.is_beverage = is_beverage;
    }

    public int getIs_cheese() {
        return is_cheese;
    }

    public void setIs_cheese(int is_cheese) {
        this.is_cheese = is_cheese;
    }

    public int getIs_fat() {
        return is_fat;
    }

    public void setIs_fat(int is_fat) {
        this.is_fat = is_fat;
    }

    public int getIs_water() {
        return is_water;
    }

    public void setIs_water(int is_water) {
        this.is_water = is_water;
    }

    public int getNegative_points() {
        return negative_points;
    }

    public void setNegative_points(int negative_points) {
        this.negative_points = negative_points;
    }

    public int getPositive_points() {
        return positive_points;
    }

    public void setPositive_points(int positive_points) {
        this.positive_points = positive_points;
    }

    public double getProteins() {
        return proteins;
    }

    public void setProteins(double proteins) {
        this.proteins = proteins;
    }

    public int getProteins_points() {
        return proteins_points;
    }

    public void setProteins_points(int proteins_points) {
        this.proteins_points = proteins_points;
    }

    public double getProteins_value() {
        return proteins_value;
    }

    public void setProteins_value(double proteins_value) {
        this.proteins_value = proteins_value;
    }

    public double getSaturated_fat() {
        return saturated_fat;
    }

    public void setSaturated_fat(double saturated_fat) {
        this.saturated_fat = saturated_fat;
    }

    public double getSaturated_fat_points() {
        return saturated_fat_points;
    }

    public void setSaturated_fat_points(double saturated_fat_points) {
        this.saturated_fat_points = saturated_fat_points;
    }

    public double getSaturated_fat_ratio() {
        return saturated_fat_ratio;
    }

    public void setSaturated_fat_ratio(double saturated_fat_ratio) {
        this.saturated_fat_ratio = saturated_fat_ratio;
    }

    public double getSaturated_fat_ratio_points() {
        return saturated_fat_ratio_points;
    }

    public void setSaturated_fat_ratio_points(double saturated_fat_ratio_points) {
        this.saturated_fat_ratio_points = saturated_fat_ratio_points;
    }

    public double getSaturated_fat_ratio_value() {
        return saturated_fat_ratio_value;
    }

    public void setSaturated_fat_ratio_value(double saturated_fat_ratio_value) {
        this.saturated_fat_ratio_value = saturated_fat_ratio_value;
    }

    public double getSaturated_fat_value() {
        return saturated_fat_value;
    }

    public void setSaturated_fat_value(double saturated_fat_value) {
        this.saturated_fat_value = saturated_fat_value;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getSodium() {
        return sodium;
    }

    public void setSodium(int sodium) {
        this.sodium = sodium;
    }

    public int getSodium_points() {
        return sodium_points;
    }

    public void setSodium_points(int sodium_points) {
        this.sodium_points = sodium_points;
    }

    public int getSodium_value() {
        return sodium_value;
    }

    public void setSodium_value(int sodium_value) {
        this.sodium_value = sodium_value;
    }

    public double getSugars() {
        return sugars;
    }

    public void setSugars(double sugars) {
        this.sugars = sugars;
    }

    public int getSugars_points() {
        return sugars_points;
    }

    public void setSugars_points(int sugars_points) {
        this.sugars_points = sugars_points;
    }

    public double getSugars_value() {
        return sugars_value;
    }

    public void setSugars_value(double sugars_value) {
        this.sugars_value = sugars_value;
    }
}