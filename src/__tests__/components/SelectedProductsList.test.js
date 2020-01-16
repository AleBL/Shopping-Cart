import React from "react";
import { shallow } from "enzyme";
import SelectedProductsList from "../../components/SelectedProductsList"

const setup = () => {
  const products = [{
    "id": 1,
    "name": "Banana",
    "price_per_kg": 10.0
  }];

  const enzymeWrapper = shallow(<SelectedProductsList products={products}/>);

  return {
    enzymeWrapper
  };
};

describe("SelectedProductsList Component", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the ul of SelectedProductsList", () => {
      const ul = enzymeWrapper.find("ul");

      expect(ul).toHaveLength(1);
    });
    
    it("Should render the li of SelectedProductsList", () => {
      const li = enzymeWrapper.find("li");

      expect(li).toHaveLength(1);
    });

    it("Should render the button remove product of SelectedProductsList", () => {
      const button = enzymeWrapper.find("button");

      expect(button).toHaveLength(1);
    });
  });
});