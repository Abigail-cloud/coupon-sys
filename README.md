# coupon-sys
# A Feature of an Eccomerce System : Shopping Cart API Documentation
## Table of Contents:
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Examples](#examples)
- [Coupon Codes](#coupon-codes)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before using this API, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Sequelize(Object-Relational Mapping software (ORM))
- PostgreSQL (or another database system, as per your configuration)
### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   a. Install the required npm packages:npm install
   b. Configure your database connection in the config.json file.
   c. Run the application in development Phase:npm run dev
   Now, the API should be running locally on port 4000.

 ### Usage
 ### Endpoints
 The API provides the following endpoints:

1. POST /api/v1/cart/purchase: Add an item to the cart.
2. GET /api/v1/cart: View the cart and calculate the total price.
3. POST /api/v1//coupon/apply/:couponCode: Apply a coupon code to the cart for discounts with validity rules.

### Examples
1. Adding an Item to the Cart and checking if the item is available
Endpoint: /api/v1/cart/purchase

- Request Body:
```javascript
{
  "name": "Product Name",
  "price": 25
}
```


- Response (Success):
```javascript
{
  "name": "Product Name",
  "price": 25
}
```


- Response (Error):
```javascript
{
  "error": "Item not available"
}
```


2. Viewing the Cart
Endpoint: GET /api/v1/cart

Response:
```javascript
{
  "userCart": [
    {
      "name": "Product 1",
      "price": 25
    },
    {
      "name": "Product 2",
      "price": 30
    }
  ],
  "totalPrice": 55
}
```
3. Applying a Coupon
Endpoint: POST /api/v1//coupon/apply/:couponCode

Request Body:
```javascript
{
  "couponCode": "FIXED10"
}
```
Response (Success):
```javascript
{
  "couponCode": "FIXED10",
  "cartItems": [
    {
      "name": "Product 1",
      "price": 25
    },
    {
      "name": "Product 2",
      "price": 30
    }
  ],
  "totalPrice": 55,
  "discountedTotalPrice": 45
}
```

Response (Error):
```javascript
{
  "error": "Coupon not found"
}
```
### Coupon Codes
The API supports the following coupon codes:

a. FIXED10: Provides a $10 fixed discount for a minimum cart total of $50.
b. PERCENT10: Provides a 10% discount for a minimum cart total of $100 and at least 2 items in the cart.
c. MIXED10: Provides a $10 fixed discount or a 10% discount (whichever is higher) for a minimum cart total of $200 and at least 3 items in the cart.
d. REJECTED10: Applies a rejected discount of $10 plus a 10% discount on the total cart value for a minimum cart total of $1000.


### Contributing
@Abigail-cloud: Feel free to contribute to this project by opening issues or pull requests. We welcome any improvements or bug fixes. Though a work in progress!!
