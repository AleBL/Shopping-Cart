<div align="center">

# 🛒 Shopping Cart

**A modern React 18 shopping cart with a live `json-server` REST API.**

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Tests](https://img.shields.io/badge/tests-33%20passing-4caf50?style=flat-square)](#-tests)
[![License](https://img.shields.io/badge/license-private-lightgrey?style=flat-square)](#)

</div>

---

## ✨ Features

| | Feature |
|---|---|
| 🧺 | Browse products fetched from the API |
| ➕ ➖ | Add and remove individual units from the cart |
| 🏷️ | Apply discount coupons with real-time feedback |
| 📦 | Live order summary — subtotal, shipping, discount, total |

---

## ⚙️ Tech Stack

| Layer | Tool |
|---|---|
| UI | React 18 (class + functional components) |
| API | json-server |
| Tests | React Testing Library |
| Dev scripts | concurrently |

---

## 🚀 Getting Started

### 1 — Install dependencies

```bash
yarn install
```

### 2 — Start everything

```bash
yarn start
```

This starts **both** the React app and the API server in one command.

| Service | URL |
|---|---|
| App | http://localhost:3000 |
| API — products | http://localhost:8000/products |
| API — coupons | http://localhost:8000/coupons |

> Need them separately? Use `yarn start:web` or `yarn start:api`.

---

## 🧪 Tests

```bash
yarn test
```

**10 suites · 33 tests** — covers all components and cart utility functions.

---

## 📐 Business Rules

### Shipping

> All values are calculated over the **subtotal before discounts**.

| Condition | Cost |
|---|---|
| Subtotal ≥ R$ 400,00 | 🆓 Free |
| Weight ≤ 10 kg | R$ 30,00 |
| Each additional 5 kg above 10 kg | + R$ 7,00 |

### Coupons

| Type | Behaviour |
|---|---|
| `PERCENTUAL` | Percentage off the subtotal |
| `FIXED` | Fixed amount off the total |
| `FREE-SHIPPING` | Zeroes shipping; requires a minimum subtotal |

Coupon feedback is shown immediately — whether it was applied, already in use, the cart hasn't reached the minimum value, or the code doesn't exist.

---

## 🗄️ Seed Data (`public/db.json`)

**Products**

| Name | Price / kg |
|---|---|
| 🍌 Banana | R$ 10,00 |
| 🍎 Apple | R$ 20,00 |
| 🍊 Orange | R$ 30,00 |

**Coupons**

| Code | Type | Discount | Min. subtotal |
|---|---|---|---|
| `A` | Percentual | 30 % | — |
| `FOO` | Fixed | R$ 100,00 | — |
| `C` | Free Shipping | shipping → R$ 0 | R$ 300,50 |
