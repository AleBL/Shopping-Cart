import React from "react"
import ReactDom from "react-dom"
import Product from "../components/Product.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Product Component", () => {
    const products = [];

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
      <Product products={ products }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<Product products={ products }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});