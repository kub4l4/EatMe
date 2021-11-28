package com.eatme.productsmanagement.models;

import lombok.Data;

@Data
public class NutriscoreData {

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
}