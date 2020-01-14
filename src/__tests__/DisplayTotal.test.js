import React from "react"
import ReactDom from "react-dom"
import DisplayTotal from "../components/DisplayTotal.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("DisplayTotal Component", () => {
    const data = [30.0, 100, 300.0];

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
      <DisplayTotal data={ data }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<DisplayTotal data={ data }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});