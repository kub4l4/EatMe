
package com.eatme.productsmanagement.models;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;


@Document
@Data
public class Products {

    @Id
    private long id;
    private Double servingSize;
    private long knownIngredientsN;
    private List<String> ingredientsHierarchy;
    private String ingredientsTextWithAllergens;
    private NutrientLevels nutrientLevels;
    private String ingredientsText;
    private long code;
    private String nutritionDataPreparedPer;
    private List<String> keywords;
    private String ecoscoreTags;
    private List<String> allergens;
    private Double productQuantity;
    private String productName;
    private long novaGroups;
    private List<String> categoriesHierarchy;
    private List<String> categories;
    private NutriscoreData nutriscoreData;
    private String productSizeType;
    }


