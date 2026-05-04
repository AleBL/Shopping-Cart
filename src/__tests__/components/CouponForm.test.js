import React from "react";
import { render, screen } from "@testing-library/react";
import CouponForm from "../../components/CouponForm";

describe("CouponForm Component", () => {
  it("Should render the input coupon code of CouponForm", () => {
    render(<CouponForm changeCoupon={() => {}} addCoupon={() => {}} />);

    expect(screen.getByPlaceholderText("Coupon Code")).toBeInTheDocument();
  });

  it("Should render the button add coupon of CouponForm", () => {
    render(<CouponForm changeCoupon={() => {}} addCoupon={() => {}} />);

    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
  });
});