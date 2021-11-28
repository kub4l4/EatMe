package com.eatme.springboot.dao.models;

import javax.persistence.*;

@Entity
@Table(name = "Product_NutriscoreData")
public class NutriscoreData {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer energy;
    private Integer energy_points;
    private Integer energy_value;
    private Double fiber;
    private Integer fiber_points;
    private Double fiber_value;
    private Integer fruits_vegetables_nuts_colza_walnut_olive_oils;
    private Integer fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    private Integer fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    private String grade;
    private Integer is_beverage;
    private Integer is_cheese;
    private Integer is_fat;
    private Integer is_water;
    private Integer negative_points;
    private Integer positive_points;
    private Double proteins;
    private Integer proteins_points;
    private Double proteins_value;
    private Double saturated_fat;
    private Integer saturated_fat_points;
    private Double saturated_fat_ratio;
    private Integer saturated_fat_ratio_points;
    private Double saturated_fat_ratio_value;
    private Double saturated_fat_value;
    private Integer score;
    private Integer sodium;
    private Integer sodium_points;
    private Integer sodium_value;
    private Double sugars;
    private Integer sugars_points;
    private Double sugars_value;

    public NutriscoreData() {
    }

    public NutriscoreData(Long id, Integer energy, Integer energy_points, Integer energy_value, Double fiber, Integer fiber_points, Double fiber_value, Integer fruits_vegetables_nuts_colza_walnut_olive_oils, Integer fruits_vegetables_nuts_colza_walnut_olive_oils_points, Integer fruits_vegetables_nuts_colza_walnut_olive_oils_value, String grade, Integer is_beverage, Integer is_cheese, Integer is_fat, Integer is_water, Integer negative_points, Integer positive_points, Double proteins, Integer proteins_points, Double proteins_value, Double saturated_fat, Integer saturated_fat_points, Double saturated_fat_ratio, Integer saturated_fat_ratio_points, Double saturated_fat_ratio_value, Double saturated_fat_value, Integer score, Integer sodium, Integer sodium_points, Integer sodium_value, Double sugars, Integer sugars_points, Double sugars_value) {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getEnergy() {
        return energy;
    }

    public void setEnergy(Integer energy) {
        this.energy = energy;
    }

    public Integer getEnergy_points() {
        return energy_points;
    }

    public void setEnergy_points(Integer energy_points) {
        this.energy_points = energy_points;
    }

    public Integer getEnergy_value() {
        return energy_value;
    }

    public void setEnergy_value(Integer energy_value) {
        this.energy_value = energy_value;
    }

    public Double getFiber() {
        return fiber;
    }

    public void setFiber(Double fiber) {
        this.fiber = fiber;
    }

    public Integer getFiber_points() {
        return fiber_points;
    }

    public void setFiber_points(Integer fiber_points) {
        this.fiber_points = fiber_points;
    }

    public Double getFiber_value() {
        return fiber_value;
    }

    public void setFiber_value(Double fiber_value) {
        this.fiber_value = fiber_value;
    }

    public Integer getFruits_vegetables_nuts_colza_walnut_olive_oils() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils(Integer fruits_vegetables_nuts_colza_walnut_olive_oils) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils = fruits_vegetables_nuts_colza_walnut_olive_oils;
    }

    public Integer getFruits_vegetables_nuts_colza_walnut_olive_oils_points() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils_points(Integer fruits_vegetables_nuts_colza_walnut_olive_oils_points) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_points = fruits_vegetables_nuts_colza_walnut_olive_oils_points;
    }

    public Integer getFruits_vegetables_nuts_colza_walnut_olive_oils_value() {
        return fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    }

    public void setFruits_vegetables_nuts_colza_walnut_olive_oils_value(Integer fruits_vegetables_nuts_colza_walnut_olive_oils_value) {
        this.fruits_vegetables_nuts_colza_walnut_olive_oils_value = fruits_vegetables_nuts_colza_walnut_olive_oils_value;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Integer getIs_beverage() {
        return is_beverage;
    }

    public void setIs_beverage(Integer is_beverage) {
        this.is_beverage = is_beverage;
    }

    public Integer getIs_cheese() {
        return is_cheese;
    }

    public void setIs_cheese(Integer is_cheese) {
        this.is_cheese = is_cheese;
    }

    public Integer getIs_fat() {
        return is_fat;
    }

    public void setIs_fat(Integer is_fat) {
        this.is_fat = is_fat;
    }

    public Integer getIs_water() {
        return is_water;
    }

    public void setIs_water(Integer is_water) {
        this.is_water = is_water;
    }

    public Integer getNegative_points() {
        return negative_points;
    }

    public void setNegative_points(Integer negative_points) {
        this.negative_points = negative_points;
    }

    public Integer getPositive_points() {
        return positive_points;
    }

    public void setPositive_points(Integer positive_points) {
        this.positive_points = positive_points;
    }

    public Double getProteins() {
        return proteins;
    }

    public void setProteins(Double proteins) {
        this.proteins = proteins;
    }

    public Integer getProteins_points() {
        return proteins_points;
    }

    public void setProteins_points(Integer proteins_points) {
        this.proteins_points = proteins_points;
    }

    public Double getProteins_value() {
        return proteins_value;
    }

    public void setProteins_value(Double proteins_value) {
        this.proteins_value = proteins_value;
    }

    public Double getSaturated_fat() {
        return saturated_fat;
    }

    public void setSaturated_fat(Double saturated_fat) {
        this.saturated_fat = saturated_fat;
    }

    public Integer getSaturated_fat_points() {
        return saturated_fat_points;
    }

    public void setSaturated_fat_points(Integer saturated_fat_points) {
        this.saturated_fat_points = saturated_fat_points;
    }

    public Double getSaturated_fat_ratio() {
        return saturated_fat_ratio;
    }

    public void setSaturated_fat_ratio(Double saturated_fat_ratio) {
        this.saturated_fat_ratio = saturated_fat_ratio;
    }

    public Integer getSaturated_fat_ratio_points() {
        return saturated_fat_ratio_points;
    }

    public void setSaturated_fat_ratio_points(Integer saturated_fat_ratio_points) {
        this.saturated_fat_ratio_points = saturated_fat_ratio_points;
    }

    public Double getSaturated_fat_ratio_value() {
        return saturated_fat_ratio_value;
    }

    public void setSaturated_fat_ratio_value(Double saturated_fat_ratio_value) {
        this.saturated_fat_ratio_value = saturated_fat_ratio_value;
    }

    public Double getSaturated_fat_value() {
        return saturated_fat_value;
    }

    public void setSaturated_fat_value(Double saturated_fat_value) {
        this.saturated_fat_value = saturated_fat_value;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getSodium() {
        return sodium;
    }

    public void setSodium(Integer sodium) {
        this.sodium = sodium;
    }

    public Integer getSodium_points() {
        return sodium_points;
    }

    public void setSodium_points(Integer sodium_points) {
        this.sodium_points = sodium_points;
    }

    public Integer getSodium_value() {
        return sodium_value;
    }

    public void setSodium_value(Integer sodium_value) {
        this.sodium_value = sodium_value;
    }

    public Double getSugars() {
        return sugars;
    }

    public void setSugars(Double sugars) {
        this.sugars = sugars;
    }

    public Integer getSugars_points() {
        return sugars_points;
    }

    public void setSugars_points(Integer sugars_points) {
        this.sugars_points = sugars_points;
    }

    public Double getSugars_value() {
        return sugars_value;
    }

    public void setSugars_value(Double sugars_value) {
        this.sugars_value = sugars_value;
    }
}