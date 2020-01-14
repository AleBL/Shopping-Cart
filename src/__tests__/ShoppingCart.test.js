import React from "react"
import ReactDom from "react-dom"
import ShoppingCart from "../components/ShoppingCart.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("ShoppingCart Component", () => {
    const products = [];
    const couponsApplied = [];
    const cartItems = [];

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
        <ShoppingCart products={ products }
          couponsApplied={ couponsApplied } 
          cartItems={ cartItems } />, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(
        <ShoppingCart products={ products }
          couponsApplied={ couponsApplied } 
          cartItems={ cartItems } />).toJSON();
          
      expect(tree).toMatchSnapshot();
    });
});