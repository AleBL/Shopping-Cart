import React from "react"
import ReactDom from "react-dom"
import DisplayProduct from "../components/DisplayProduct.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("DisplayProduct Component", () => {
    const cartItems = [];

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
      <DisplayProduct cartItems={ cartItems }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<DisplayProduct cartItems={ cartItems }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});