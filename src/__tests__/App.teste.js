import React from "react"
import ReactDom from "react-dom"
import App from "../App.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("App Component", () => {
    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(<App></App>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<App></App>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});