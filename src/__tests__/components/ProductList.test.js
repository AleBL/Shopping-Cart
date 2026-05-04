import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../../components/ProductList";

const setup = () => {
  const products = [
    {
      id: 1,
      name: "Banana",
      price_per_kg: 10.0
    }
  ];

  render(
    <ProductList
      products={products}
      addToCart={() => {}}
      removeItem={() => {}}
    />
  );

  return {
    products
  };
};

describe("ProductList Component", () => {
  it("Should render the Product of ProductList", () => {
    const { products } = setup();

    const img = screen.queryByRole("img", { name: products[0].name });
    const placeholder = screen.queryByLabelText(products[0].name);
    expect(img || placeholder).toBeTruthy();
  });
});