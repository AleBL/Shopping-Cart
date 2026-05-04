import React from "react";
import { render, screen } from "@testing-library/react";
import CouponList from "../../components/CouponList";

const setup = () => {
  const coupons = [
    {
      code: "A",
      type: "PERCENTUAL",
      value: 0.3,
      activation_value: 0
    },
    {
      code: "FOO",
      type: "FIXED",
      value: 100,
      activation_value: 0
    },
    {
      code: "C",
      type: "FREE-SHIPPING",
      activation_value: 300.5
    }
  ];

  render(<CouponList coupons={coupons} removeCoupon={() => {}} />);

  return {
    coupons
  };
};

describe("CouponList Element", () => {
  it("Should render the title and all coupons", () => {
    const { coupons } = setup();

    expect(screen.getByText("Coupons:")).toBeInTheDocument();
    coupons.forEach((coupon) => {
      expect(screen.getByText(new RegExp(`^${coupon.code} :`))).toBeInTheDocument();
    });
  });

  it("Should render the button remove coupon of CouponList", () => {
    setup();

    expect(screen.getAllByRole("button", { name: "X" })).toHaveLength(3);
  });
});