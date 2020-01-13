# SHOPPING CART

## Shipping rules
All shipping calculations are made over the subtotal WITHOUT the shipping costs and WITHOUT any discounts.
For purchases above R$400,00 the shipping is free!
For purchases bellow or equal 10kg the shipping price is: R$30.
Each 5kg above 10kg will add R$7 to the shipping price.

## The system should support these kinds of coupons
Percentual coupon: are coupons that reduce an amount in percentage of the cost on subtotal. \
Fixed coupon: are coupons with fixed amounts that should reduce over the TOTAL. \
Free Shipping: make the shipping price become 0 when applied, and should have a minimum subtotal requirement.

## Available Products
Banana, price: R$10 per kg \
Apple, R$20 per kg \
Orange, R$30 per kg

## Enabled Coupons
A: percentual coupon of 30% \
FOO: fixed coupon of R$100,00 \
C: free shipping coupon with minimum value of R$300,50

# Setup

### Install Dependencies
npm install -g json-server
yarn install

### `yarn test`
To run the test suite

# Run the server
### 'json-server public/db.json --port 8000'
Start the fake API-REST
Open [http://localhost:8000/products](http://localhost:8000/products) to view products it in the browser.
Open [http://localhost:8000/coupons](http://localhost:8000/coupons) to view coupons it in the browser.

### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
To create a production build.

# Documentation
