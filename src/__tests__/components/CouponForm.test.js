import React from "react";
import { render, screen } from "@testing-library/react";
import CouponForm from "../../components/CouponForm";

describe("CouponForm Component", () => {
  it("Should render the input coupon code of CouponForm", () => {
    render(
      <CouponForm
        changeCoupon={() => {}}
        addCoupon={() => {}}
        couponFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByPlaceholderText("Coupon Code")).toBeInTheDocument();
  });

  it("Should render the button add coupon of CouponForm", () => {
    render(
      <CouponForm
        changeCoupon={() => {}}
        addCoupon={() => {}}
        couponFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
  });

  it("Should render the feedback status of CouponForm", () => {
    render(
      <CouponForm
        changeCoupon={() => {}}
        addCoupon={() => {}}
        couponFeedback={{ type: "error", text: "Coupon FOO was not applied." }}
      />
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Coupon FOO was not applied.")).toBeInTheDocument();
  });
});