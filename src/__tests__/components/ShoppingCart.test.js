import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from "../../components/ShoppingCart"

const setup = () => {
  const enzymeWrapper = shallow(<ShoppingCart />);

  return {
    enzymeWrapper
  };
};

describe('ShoppingCart Component', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();

    it('Should render the ProductList of ShoppingCart', () => {
      const productList = enzymeWrapper.find('ProductList');

      expect(productList).toHaveLength(1);
    });

    it('Should render the CouponContainer of ShoppingCart', () => {
      const couponContainer = enzymeWrapper.find('CouponContainer');

      expect(couponContainer).toHaveLength(1);
    });

    it('Should render the SelectedProductsList of ShoppingCart', () => {
      const selectedProductsList = enzymeWrapper.find('SelectedProductsList');

      expect(selectedProductsList).toHaveLength(1);
    });

    it('Should render the ShoppingCartSummary of ShoppingCart', () => {
      const shoppingCartSummary = enzymeWrapper.find('ShoppingCartSummary');

      expect(shoppingCartSummary).toHaveLength(1);
    });
  });
});