import React from "react";
import { render, screen } from "@testing-library/react";
import SelectedProductsList from "../../components/SelectedProductsList";

const setup = () => {
  const products = [
    {
      id: 1,
      name: "Banana",
      price_per_kg: 10.0,
      count: 1
    }
  ];

  render(<SelectedProductsList products={products} removeProduct={() => {}} />);
};

describe("SelectedProductsList Component", () => {
  it("Should render the ul of SelectedProductsList", () => {
    setup();

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Should render the li of SelectedProductsList", () => {
    setup();

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("Should render the button remove product of SelectedProductsList", () => {
    setup();

    expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument();
  });
});