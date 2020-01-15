import React from "react"
import ReactDom from "react-dom"
import Product from "../components/Product.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Product Component", () => {
    const product = {
      "id": 0,
      "name": "Lemon",
      "price_per_kg": 98.0};

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
      <Product product={ product }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<Product product={ product }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});