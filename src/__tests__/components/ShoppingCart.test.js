import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../../components/ShoppingCart";

const setup = () => {
  const products = [{ id: 1, name: "Banana", price_per_kg: 10.0 }];
  const cartItems = [{ id: 1, name: "Banana", price_per_kg: 10.0, count: 2 }];

  render(
    <ShoppingCart
      products={products}
      cartItems={cartItems}
      couponsApplied={[]}
      newProductName=""
      newProductPrice=""
      productFeedback={{ type: "info", text: "" }}
      addToCart={() => {}}
      removeItem={() => {}}
      changeNewProductName={() => {}}
      changeNewProductPrice={() => {}}
      createProduct={() => {}}
      changeCoupon={() => {}}
      addCoupon={() => {}}
      removeCoupon={() => {}}
      couponFeedback={{ type: "info", text: "" }}
      removeProduct={() => {}}
    />
  );
};

describe("ShoppingCart Component", () => {
  it("Should render the ProductList of ShoppingCart", () => {
    setup();

    const img = screen.queryByRole("img", { name: "Banana" });
    const placeholder = screen.queryByLabelText("Banana");
    expect(img || placeholder).toBeTruthy();
  });

  it("Should render the CouponContainer of ShoppingCart", () => {
    setup();

    expect(screen.getByPlaceholderText("Coupon Code")).toBeInTheDocument();
  });

  it("Should render the SelectedProductsList of ShoppingCart", () => {
    setup();

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Should render the ShoppingCartSummary of ShoppingCart", () => {
    setup();

    expect(screen.getByRole("button", { name: "Purchase" })).toBeInTheDocument();
  });
});