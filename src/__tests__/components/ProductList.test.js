import React from 'react';
import { shallow } from 'enzyme';
import ProductList from "../../components/ProductList"

const setup = () => {
  const products = [{
    "id": 1,
    "name": "Banana",
    "price_per_kg": 10.0
  }];

  const enzymeWrapper = shallow(<ProductList products={products}/>);

  return {
    enzymeWrapper
  };
};

describe('ProductList Component', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();


    it('Should render the Product of ProductList', () => {
      const div = enzymeWrapper.find('Product');

      expect(div).toHaveLength(1);
    });
  });
});