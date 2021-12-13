import numpy as np
import pandas as pd
import json



def get_data():
    try:
        pd.read_json('ProductsIn.json', lines=True)
    except ValueError as e:
        print("The specified file is not a properly formatted json file")
        exit(0)
    print("getData")
    df = pd.read_json('ProductsIn.json', lines=True)
    print(df.head(5))
    print(df.info())
    print("getData Done.")
    return df


def check_data(df):
    avaible_vars = list(df.columns)
    required_vars = ['_id',
                     '_keywords',
                     'allergens',
                     'categories',
                     'categories_hierarchy',
                     'code',
                     'ecoscore_tags',
                     'images',
                     'ingredients_hierarchy',
                     'ingredients_text_en',
                     'ingredients_text_with_allergens_en',
                     'known_ingredients_n',
                     'nova_groups',
                     'nova_groups_tags',
                     'nutrient_levels',
                     'nutriscore_data',
                     'nutrition_data_prepared_per',
                     'product_name_en',
                     'product_quantity',
                     'serving_size']

    check = all(item in avaible_vars for item in required_vars)

    if check is False:
        print("The input data is invalid.")
        exit(1)
    print("The input data is valid.")
    redundant_vars = [x for x in avaible_vars if x not in required_vars]

    for redundant_var in redundant_vars:
        print("Excess column was removed: ", redundant_var)
        del df[redundant_var]

    return df


def extracting_serving_size(df):
    print("extractingServingSize")
    conditions = [
        df['serving_size'].str.contains("^[0-9].*g$"),
        df['serving_size'].str.contains("^[0-9].*ml$")
    ]
    values = ['g', 'ml']
    df['product_size_type'] = np.select(conditions, values)
    df["serving_size"] = df["serving_size"].str.split("g", 1, True)[0]
    df["serving_size"] = df["serving_size"].str.split("ml", 1, True)[0]
    print("ExtractingServingSize Done.")
    return df


def data_clean(df):
    print("dataClean")

    conditions = [
        df['product_size_type'].str.contains("0"),
        df['serving_size'].str.contains("[^0-9]")
    ]
    values = [1, 1]
    df['ToDelete'] = np.select(conditions, values)
    df = df.drop(df[df.ToDelete == 1].index)

    df = df.drop(columns='ToDelete', axis=1)
    df = df.drop(columns='nova_groups_tags', axis=1)
    df = df.drop(columns='images', axis=1)
    print("DateClean Done.")
    return df


def data_conversion(df):
    print("dataConversion")
    df['serving_size'] = df['serving_size'].str.replace(',', '').astype(float)
    df['ingredients_text_with_allergens_en'] = df['ingredients_text_with_allergens_en'].astype(str)
    df['ingredients_text_en'] = df['ingredients_text_en'].astype(str)
    df['code'] = df['code'].astype(int)
    df['nutrition_data_prepared_per'] = df['nutrition_data_prepared_per'].astype(str)
    df['ecoscore_tags'] = df['ecoscore_tags'].astype(str)
    df['product_name_en'] = df['product_name_en'].astype(str)
    df['categories'] = df['categories'].astype(str)
    print("dataConversion Done.")
    return df


def name_replacement(df):
    print("nameReplacement")
    df = df.rename({
        'serving_size': 'servingSize',
        'known_ingredients_n': 'knownIngredientsN',
        'ingredients_hierarchy': 'ingredientsHierarchy',
        'ingredients_text_with_allergens_en': 'ingredientsTextWithAllergens',
        'nutrient_levels': 'nutrientLevels',
        'ingredients_text_en': 'ingredientsText',
        'nutrition_data_prepared_per': 'nutritionDataPreparedPer',
        '_keywords': 'keywords',
        'ecoscore_tags': 'ecoscoreTags',
        'product_quantity': 'productQuantity',
        'product_name_en': 'productName',
        'nova_groups': 'novaGroups',
        'categories_hierarchy': 'categoriesHierarchy',
        'nutriscore_data': 'nutriscoreData',
        'product_size_type': 'productSizeType'
    })
    print("nameReplacement Done.")
    return df


def export_result(df):
    print("exportResult")
    print(df.info())
    df.to_json(r'productsOut.json', "records", True)


if __name__ == '__main__':
    df = get_data()
    print("\n---------------------------------")
    df = check_data(df)
    print("\n---------------------------------")
    df = extracting_serving_size(df)
    print("\n---------------------------------")
    df = data_clean(df)
    print("\n---------------------------------")
    df = name_replacement(df)
    print("\n---------------------------------")
    export_result(df)
