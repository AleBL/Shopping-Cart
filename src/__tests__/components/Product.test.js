import React from 'react';
import { shallow } from 'enzyme';
import Product from "../../components/Product"

const setup = () => {
  const product = {
    "id": 1,
    "name": "Banana",
    "price_per_kg": 10.0
  };

  const enzymeWrapper = shallow(<Product product={product}/>);

  return {
    enzymeWrapper
  };
};

describe('Product Component', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();

    it('Should render the div of Product', () => {
      const div = enzymeWrapper.find('div');

      expect(div).toHaveLength(1);
    });

    it('Should render the a of Product', () => {
      const a = enzymeWrapper.find('a');

      expect(a).toHaveLength(1);
    });

    it('Should render the img of Product', () => {
      const img = enzymeWrapper.find('img');

      expect(img).toHaveLength(1);
    });

    it('Should render the buttons add cart and remove item of Product', () => {
      const button = enzymeWrapper.find('button');

      expect(button).toHaveLength(2);
    });
  });
});