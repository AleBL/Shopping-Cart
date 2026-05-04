import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCreator from "../../components/ProductCreator";

describe("ProductCreator Component", () => {
  it("Should render product creation inputs", () => {
    render(
      <ProductCreator
        newProductName=""
        newProductPrice=""
        changeNewProductName={() => {}}
        changeNewProductPrice={() => {}}
        createProduct={() => {}}
        productFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByPlaceholderText("Product Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Price per kg")).toBeInTheDocument();
  });

  it("Should render create product button", () => {
    render(
      <ProductCreator
        newProductName=""
        newProductPrice=""
        changeNewProductName={() => {}}
        changeNewProductPrice={() => {}}
        createProduct={() => {}}
        productFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByRole("button", { name: "Create Product" })).toBeInTheDocument();
  });

  it("Should render product feedback status", () => {
    render(
      <ProductCreator
        newProductName=""
        newProductPrice=""
        changeNewProductName={() => {}}
        changeNewProductPrice={() => {}}
        createProduct={() => {}}
        productFeedback={{ type: "success", text: "Product Banana created successfully." }}
      />
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Product Banana created successfully.")).toBeInTheDocument();
  });
});
