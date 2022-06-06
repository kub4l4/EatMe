import numpy as np
import pandas as pd
import json
from pymongo import MongoClient


def get_data_from_open_food_facts_jsonl():
    required_vars = ['_id',
                     '_keywords',
                     'allergens',
                     'categories',
                     'categories_hierarchy',
                     'code',
                     'ecoscore_tags',
                     'ingredients_hierarchy',
                     'ingredients_text_en',
                     'ingredients_text_with_allergens_en',
                     'known_ingredients_n',
                     'nova_groups',
                     'nutrient_levels',
                     'nutriscore_data',
                     'nutrition_data_prepared_per',
                     'product_name_en',
                     'product_quantity',
                     'serving_size']

    data = []
    file_name = 'OFF_Export.jsonl'

    with open(file_name, encoding='utf-8') as f:
        for line in f:
            doc = json.loads(line)
            try:
                lst = doc['_id'], doc['_keywords'], doc['allergens'], doc['categories'], doc['categories_hierarchy'], \
                      doc['code'], doc['ecoscore_tags'], doc['ingredients_hierarchy'], doc['ingredients_text_en'], \
                      doc['ingredients_text_with_allergens_en'], doc['known_ingredients_n'], doc['nova_groups'], \
                      doc['nutrient_levels'], doc['nutriscore_data'], doc['nutrition_data_prepared_per'], \
                      doc['product_name_en'], doc['product_quantity'], doc['serving_size']
            except:
                pass
            else:
                data.append(lst)

    df = pd.DataFrame(data=data, columns=required_vars)
    df.to_json(r'productsInOFF.json', "records", lines=True)
    print(df.info())

    print("getData From OFF Done")


def get_data():
    try:
        pd.read_json('ProductsIn.json', lines=True)
    except ValueError as e:
        print("The specified file is not a properly formatted json file", e)
        exit(0)
    print("getData")
    df_fun = pd.read_json('ProductsIn.json', lines=True)
    print(df_fun.head(5))
    print(df_fun.info())
    print("getData Done.")
    return df_fun


def check_data(df_fun):
    available_vars = list(df_fun.columns)
    required_vars = ['_id',
                     '_keywords',
                     'allergens',
                     'categories',
                     'categories_hierarchy',
                     'code',
                     'ecoscore_tags',
                     'ingredients_hierarchy',
                     'ingredients_text_en',
                     'ingredients_text_with_allergens_en',
                     'known_ingredients_n',
                     'nova_groups',
                     'nutrient_levels',
                     'nutriscore_data',
                     'nutrition_data_prepared_per',
                     'product_name_en',
                     'product_quantity',
                     'serving_size']

    check = all(item in available_vars for item in required_vars)

    if check is False:
        print("The input data is invalid.")
        exit(1)
    print("The input data is valid.")
    redundant_vars = [x for x in available_vars if x not in required_vars]

    for redundant_var in redundant_vars:
        print("Excess column was removed: ", redundant_var)
        del df_fun[redundant_var]

    return df_fun


def extracting_serving_size(df_fun):
    print("extractingServingSize")
    conditions = [
        df_fun['serving_size'].str.contains("^[0-9].*g$"),
        df_fun['serving_size'].str.contains("^[0-9].*ml$")
    ]
    values = ['g', 'ml']
    df_fun['product_size_type'] = np.select(conditions, values)
    df_fun["serving_size"] = df_fun["serving_size"].str.split("g", 1, True)[0]
    df_fun["serving_size"] = df_fun["serving_size"].str.split("ml", 1, True)[0]
    print("ExtractingServingSize Done.")
    return df_fun


def data_clean(df_fun):
    print("dataClean")

    conditions = [
        df_fun['product_size_type'].str.contains("0"),
        df_fun['serving_size'].str.contains("[^0-9]")
    ]
    values = [1, 1]
    df_fun['ToDelete'] = np.select(conditions, values)
    df_fun = df_fun.drop(df_fun[df_fun.ToDelete == 1].index)

    df_fun = df_fun.drop(columns='ToDelete', axis=1)
    print("DateClean Done.")
    return df_fun


def data_conversion(df_fun):
    print("dataConversion")
    df_fun['_id'] = df_fun['_id'].astype(int)
    df_fun['serving_size'] = df_fun['serving_size'].str.replace(',', '').astype(float)
    df_fun['ingredients_text_with_allergens_en'] = df_fun['ingredients_text_with_allergens_en'].astype(str)
    df_fun['ingredients_text_en'] = df_fun['ingredients_text_en'].astype(str)
    df_fun['code'] = df_fun['code'].astype(int)
    df_fun['nutrition_data_prepared_per'] = df_fun['nutrition_data_prepared_per'].astype(str)
    df_fun['ecoscore_tags'] = df_fun['ecoscore_tags'].astype(str)
    df_fun['product_name_en'] = df_fun['product_name_en'].astype(str)
    df_fun['categories'] = df_fun['categories'].astype(str)
    print("dataConversion Done.")
    print(df_fun.info())

    return df_fun


def name_replacement(df_fun):
    print("nameReplacement")
    df_fun.rename(columns={
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
    }, inplace=True)
    print("nameReplacement Done.")
    return df_fun


def export_result(df_fun):
    print("exportResult")
    print(df_fun.info())
    df_fun.to_json(r'productsOut.json', "records", lines=True)


def export_to_mongodb(df_fun):
    del df_fun['_id']
    df_fun['_id'] = range(1, len(df) + 1)
    # df_fun.drop_duplicates(subset="_id", keep='last', inplace=True)
    print("Exporting products to MongoDB")
    client = MongoClient('mongodb://rootuser:rootpass@localhost:27017/')
    db = client['EatMe']
    collection = db['products']
    data = df_fun.to_dict(orient='records')
    collection.insert_many(data)


if __name__ == '__main__':
    # get_data_from_open_food_facts_jsonl() - use with exported file from Open Food Facts

    df = get_data()
    print("\n---------------------------------")
    df = check_data(df)
    print("\n---------------------------------")
    df = extracting_serving_size(df)
    print("\n---------------------------------")
    df = data_clean(df)
    print("\n---------------------------------")
    df = data_conversion(df)
    print("\n---------------------------------")
    df = name_replacement(df)
    print("\n---------------------------------")
    export_result(df)
    print("\n---------------------------------")
    #export_to_mongodb(df)
