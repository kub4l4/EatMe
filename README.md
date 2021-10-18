# EatMe
*Under Construction*


Statistically, each of us throws out 235 kg of food. It is estimated that between 33 - 50% of the food produced is thrown away. Less food throws away not only saves us all, but also reduces our carbon footprint.
 
The process of wasting food begins with its purchases. The Eat me application, in which the user stores food at home, comes in handy. In it, he can create shopping lists or import shopping lists of specific recipes available in the application. The algorithm will check if the user has the products needed to prepare a meal and will add the missing products to the shopping list. In the recipe search engine, there is an option to show recipes from the products you currently have. Adding products is done by entering the product name or barcode. For each product, it is possible to enter an expiry date, and the application will remind you to use the product before the expiry date.

TODO:
- [ ] Creation of a database and data processing
- [ ] Adding products from the list
- [ ] Adding products by barcode
- [ ] Add recipes
- [ ] Searching for recipes by products
- [ ] Showing recipes based on available products
- [ ] Create end-of-expiry notifications


## API:
### POST Register
http://localhost:8080/api/auth/signup
```json
{
    "username": "admin1",
    "email": "admin1@admin1.pl",
    "password":"admin1",
    "role": ["admin"]
}
```

### POST Login
http://localhost:8080/api/auth/signin
```json
{
    "username": "admin1",
    "password": "admin1"
}
```

### GET getProducts
http://localhost:8080/api/products/2

### POST addProduct
http://localhost:8080/api/products
```json
{
    
    "name": "Apple",
    "categoryId": "5",
    "quantity": "1",
    "expireDate":"2020-12-21"
}
```

### GET getProductById
http://localhost:8080/api/products/2

### PUT updateProductById
http://localhost:8080/api/products/2
```json
{
    "expireDate": "2021-10-13",
    "name": "arbuzik",
    "categoryId": 5,
    "quantity": "2"
}
```

### DEL deleteProductById
http://localhost:8080/api/products/2


## Screenshots:

#### Login Page
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/Login.png)
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/loginMobile.png)

#### My Products
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/My%20Products.png)

#### Admin Panel
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/AdminPanel.png)

#### Add Product
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/AddProduct.png)


#### Register Page
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/register.png)
![Login Page](https://raw.githubusercontent.com/kub4l4/EatMe/main/Screenshot/registerMobile.png)
