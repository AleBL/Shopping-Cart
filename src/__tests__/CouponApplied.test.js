import React from "react"
import ReactDom from "react-dom"
import CouponApplied from "../components/CouponApplied.js"

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("CouponApplied Component", () => {
    const couponsApplied = [] ;
    it("render without crashing", () => {
      const div = document.createElement("div");
    
      ReactDom.render(<CouponApplied couponsApplied={ couponsApplied }/>, div);
    });

    it("matches snapshot", () => {
      const tree = renderer.create(<CouponApplied couponsApplied={ couponsApplied }/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});