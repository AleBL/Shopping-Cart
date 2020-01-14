import React from "react"
import ReactDom from "react-dom"
import Coupon from "../components/Coupon.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Coupon Component", () => {
    const couponsApplied = [];

    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(
      <Coupon couponsApplied={ couponsApplied }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<Coupon couponsApplied={ couponsApplied }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});