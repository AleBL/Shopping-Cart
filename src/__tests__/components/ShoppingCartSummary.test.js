import React from "react";
import { shallow } from "enzyme";
import ShoppingCartSummary from "../../components/ShoppingCartSummary"

describe("ShoppingCartSummary Component", () => {
  describe("render", () => {

    const products = [
      { id: 20, name: "Fruit 20", price_per_kg: 50, count: 60 },
      { id: 30, name: "Fruit 30", price_per_kg: 30, count: 90 }];

    const coupons = [{ code: "TEST", type: "FIXED", value: 50, activation_value: 0 }];
  
    const enzymeWrapper = shallow(<ShoppingCartSummary 
                                    products={ products }
                                    coupons={ coupons }/>);

    it("Should render the div of ShoppingCartSummary", () => {
      const div = enzymeWrapper.find("div");

      expect(div).toHaveLength(4);
    });

    it("Should render the button purchase of ShoppingCartSummary", () => {
      const button = enzymeWrapper.find("button");

      expect(button).toHaveLength(1);
    });
  });
});