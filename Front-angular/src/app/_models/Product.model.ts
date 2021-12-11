export interface IProduct {
    idProduct: number;
    id: number;
    servingSize: number;
    knownIngredientsN: number;
    ingredientsHierarchy: string[];
    ingredientsTextWithAllergens: string;
    nutrientLevels: NutrientLevels;
    ingredientsText: string;
    code: number;
    nutritionDataPreparedPer: string;
    keywords: string[];
    ecoscoreTags: string;
    allergens: any[];
    productQuantity: number;
    productName: string;
    novaGroups: number;
    categoriesHierarchy: string[];
    categories: string[];
    nutriscoreData: NutriscoreData;
    productSizeType: string;
    amountLeft: number;
    id_user: number;
    createdAt: number;
    expireDate: number;
    categoryId: number;//TODO TEMP
}

export interface NutrientLevels {
    id: number;
    fat: string;
    saturated_fat: string;
    salt: string;
    sugars: string;
}

export interface NutriscoreData {
    id: number;
    energy: number;
    energy_points: number;
    energy_value: number;
    fiber: number;
    fiber_points: number;
    fiber_value: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
    grade: string;
    is_beverage: number;
    is_cheese: number;
    is_fat: number;
    is_water: number;
    negative_points: number;
    positive_points: number;
    proteins: number;
    proteins_points: number;
    proteins_value: number;
    saturated_fat: number;
    saturated_fat_points: number;
    saturated_fat_ratio: number;
    saturated_fat_ratio_points: number;
    saturated_fat_ratio_value: number;
    saturated_fat_value: number;
    score: number;
    sodium: number;
    sodium_points: number;
    sodium_value: number;
    sugars: number;
    sugars_points: number;
    sugars_value: number;
}


