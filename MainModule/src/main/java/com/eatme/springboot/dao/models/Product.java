package com.eatme.springboot.dao.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column(name = "id_product", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idProduct;
    private long id;
    private double servingSize;
    private long knownIngredientsN;
    @ElementCollection
    private List<String> ingredientsHierarchy;
    @Column(columnDefinition="TEXT")
    private String ingredientsTextWithAllergens;
    @OneToOne(cascade = CascadeType.ALL)
    private NutrientLevels nutrientLevels;
    @Column(columnDefinition="TEXT")
    private String ingredientsText;
    private long code;
    private String nutritionDataPreparedPer;
    @ElementCollection
    private List<String> keywords;
    private String ecoscoreTags;
    @ElementCollection
    private List<String> allergens;
    private double productQuantity;
    private String productName;
    private long novaGroups;
    @ElementCollection
    private List<String> categoriesHierarchy;
    @ElementCollection
    private List<String> categories;
    @OneToOne(cascade = CascadeType.ALL)
    private NutriscoreData nutriscoreData;
    private String productSizeType;
    private double amountLeft;

    @Column(name = "id_user")
    private long idUser;
    private long createdAt;
    private long expireDate;
    private int archived;


    public Product() {
    }

    public Product(long idProduct, long id, double servingSize, long knownIngredientsN, List<String> ingredientsHierarchy, String ingredientsTextWithAllergens, NutrientLevels nutrientLevels, String ingredientsText, long code, String nutritionDataPreparedPer, List<String> keywords, String ecoscoreTags, List<String> allergens, double productQuantity, String productName, long novaGroups, List<String> categoriesHierarchy, List<String> categories, NutriscoreData nutriscoreData, String productSizeType, double amountLeft, long idUser, long createdAt, long expireDate, int archived) {
        this.idProduct = idProduct;
        this.id = id;
        this.servingSize = servingSize;
        this.knownIngredientsN = knownIngredientsN;
        this.ingredientsHierarchy = ingredientsHierarchy;
        this.ingredientsTextWithAllergens = ingredientsTextWithAllergens;
        this.nutrientLevels = nutrientLevels;
        this.ingredientsText = ingredientsText;
        this.code = code;
        this.nutritionDataPreparedPer = nutritionDataPreparedPer;
        this.keywords = keywords;
        this.ecoscoreTags = ecoscoreTags;
        this.allergens = allergens;
        this.productQuantity = productQuantity;
        this.productName = productName;
        this.novaGroups = novaGroups;
        this.categoriesHierarchy = categoriesHierarchy;
        this.categories = categories;
        this.nutriscoreData = nutriscoreData;
        this.productSizeType = productSizeType;
        this.amountLeft = amountLeft;
        this.idUser = idUser;
        this.createdAt = createdAt;
        this.expireDate = expireDate;
        this.archived = archived;
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

    public long getKnownIngredientsN() {
        return knownIngredientsN;
    }

    public void setKnownIngredientsN(long knownIngredientsN) {
        this.knownIngredientsN = knownIngredientsN;
    }

    public List<String> getIngredientsHierarchy() {
        return ingredientsHierarchy;
    }

    public void setIngredientsHierarchy(List<String> ingredientsHierarchy) {
        this.ingredientsHierarchy = ingredientsHierarchy;
    }

    public String getIngredientsTextWithAllergens() {
        return ingredientsTextWithAllergens;
    }

    public void setIngredientsTextWithAllergens(String ingredientsTextWithAllergens) {
        this.ingredientsTextWithAllergens = ingredientsTextWithAllergens;
    }

    public NutrientLevels getNutrientLevels() {
        return nutrientLevels;
    }

    public void setNutrientLevels(NutrientLevels nutrientLevels) {
        this.nutrientLevels = nutrientLevels;
    }

    public String getIngredientsText() {
        return ingredientsText;
    }

    public void setIngredientsText(String ingredientsText) {
        this.ingredientsText = ingredientsText;
    }

    public long getCode() {
        return code;
    }

    public void setCode(long code) {
        this.code = code;
    }

    public String getNutritionDataPreparedPer() {
        return nutritionDataPreparedPer;
    }

    public void setNutritionDataPreparedPer(String nutritionDataPreparedPer) {
        this.nutritionDataPreparedPer = nutritionDataPreparedPer;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    public String getEcoscoreTags() {
        return ecoscoreTags;
    }

    public void setEcoscoreTags(String ecoscoreTags) {
        this.ecoscoreTags = ecoscoreTags;
    }

    public List<String> getAllergens() {
        return allergens;
    }

    public void setAllergens(List<String> allergens) {
        this.allergens = allergens;
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

    public List<String> getCategoriesHierarchy() {
        return categoriesHierarchy;
    }

    public void setCategoriesHierarchy(List<String> categoriesHierarchy) {
        this.categoriesHierarchy = categoriesHierarchy;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public NutriscoreData getNutriscoreData() {
        return nutriscoreData;
    }

    public void setNutriscoreData(NutriscoreData nutriscoreData) {
        this.nutriscoreData = nutriscoreData;
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

    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
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

    public int getArchived() {
        return archived;
    }

    public void setArchived(int archived) {
        this.archived = archived;
    }
}


