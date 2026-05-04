import React from "react";
import { render, screen } from "@testing-library/react";
import CouponContainer from "../../components/CouponContainer";

describe("CouponContainer Component", () => {
  it("Should render the CouponForm of CouponContainer", () => {
    render(
      <CouponContainer
        changeCoupon={() => {}}
        addCoupon={() => {}}
        removeCoupon={() => {}}
        couponsApplied={[]}
        couponFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByPlaceholderText("Coupon Code")).toBeInTheDocument();
  });

  it("Should render the CouponList of CouponContainer", () => {
    render(
      <CouponContainer
        changeCoupon={() => {}}
        addCoupon={() => {}}
        removeCoupon={() => {}}
        couponsApplied={[]}
        couponFeedback={{ type: "info", text: "" }}
      />
    );

    expect(screen.getByText("Coupons:")).toBeInTheDocument();
  });
});