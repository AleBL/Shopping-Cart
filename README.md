# 🛒 Shopping Cart

## 🚚 Shipping Rules
- All shipping calculations are made over the subtotal **without** the shipping costs and **without** any discounts.
- For purchases above **R$400.00**, the shipping is **free**!
- For purchases up to **10kg**, the shipping cost is: **R$30**.
- Each **5kg above** 10kg will add **R$7** to the shipping price.

## 🎟 Supported Coupon Types
- **Percentage Coupon**: Coupons that reduce an amount in percentage of the cost on subtotal.
- **Fixed Coupon**: Coupons with fixed amounts that should reduce over the **total**.
- **Free Shipping**: Makes the shipping price become **0** when applied, and should have a minimum subtotal requirement.

## 🍎 Available Products
| Product | Price |
|---------|-------|
| Banana  | R$10 per kg |
| Apple   | R$20 per kg |
| Orange  | R$30 per kg |

## 💰 Enabled Coupons
- **A**: percentage coupon of 30%
- **FOO**: fixed coupon of R$100.00
- **C**: free shipping coupon with minimum value of R$300.50

# ⚙️ Setup

## 📦 Install Dependencies
```sh
yarn install
```

## 🧪 Run Tests
To run the test suite:
```sh
yarn test
```

## 🚀 Run the Application
```sh
yarn start
```

- Open [http://localhost:8000/products](http://localhost:8000/products) to view products in the browser.
- Open [http://localhost:8000/coupons](http://localhost:8000/coupons) to view coupons in the browser.

- Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

I hope this helps! If you need anything else, feel free to ask. 😉