import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../../components/Product";

const product = {
  id: 1,
  name: "Banana",
  price_per_kg: 10.0
};

describe("Product Component", () => {
  it("Should render the Product image", () => {
    render(
      <Product
        product={product}
        addToCart={() => {}}
        removeItem={() => {}}
      />
    );

    expect(screen.getByRole("img", { name: "Banana" })).toBeInTheDocument();
  });

  it("Should render the Product link", () => {
    render(
      <Product
        product={product}
        addToCart={() => {}}
        removeItem={() => {}}
      />
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("Should render add and remove buttons", () => {
    render(
      <Product
        product={product}
        addToCart={() => {}}
        removeItem={() => {}}
      />
    );

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});