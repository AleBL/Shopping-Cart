import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCartSummary from "../../components/ShoppingCartSummary";

describe("ShoppingCartSummary Component", () => {
  const products = [
    { id: 20, name: "Fruit 20", price_per_kg: 50, count: 60 },
    { id: 30, name: "Fruit 30", price_per_kg: 30, count: 90 }
  ];

  const coupons = [{ code: "TEST", type: "FIXED", value: 50, activation_value: 0 }];

  it("Should render summary values", () => {
    render(<ShoppingCartSummary products={products} coupons={coupons} />);

    expect(screen.getByText(/Shipping Value:/)).toBeInTheDocument();
    expect(screen.getByText(/Discount:/)).toBeInTheDocument();
    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });

  it("Should render the button purchase of ShoppingCartSummary", () => {
    render(<ShoppingCartSummary products={products} coupons={coupons} />);

    expect(screen.getByRole("button", { name: "Purchase" })).toBeInTheDocument();
  });

  it("Should show success overlay after clicking Purchase", () => {
    render(<ShoppingCartSummary products={products} coupons={coupons} />);

    fireEvent.click(screen.getByRole("button", { name: "Purchase" }));

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Order placed!")).toBeInTheDocument();
  });

  it("Should disable Purchase button while overlay is visible", () => {
    render(<ShoppingCartSummary products={products} coupons={coupons} />);

    fireEvent.click(screen.getByRole("button", { name: "Purchase" }));

    expect(screen.getByRole("button", { name: /Placed!/ })).toBeDisabled();
  });
});