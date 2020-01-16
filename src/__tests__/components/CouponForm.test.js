import React from 'react';
import { shallow } from 'enzyme';
import CouponForm from "../../components/CouponForm"

const setup = () => {
  const enzymeWrapper = shallow(<CouponForm />);

  return {
    enzymeWrapper
  };
};

describe('CouponForm Component', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();

    it('Should render the div of CouponForm', () => {
      const div = enzymeWrapper.find('div');

      expect(div).toHaveLength(1);
    });

    it('Should render the input coupon code of CouponForm', () => {
      const input = enzymeWrapper.find('input');

      expect(input).toHaveLength(1);
    });

    it('Should render the button add coupon of CouponForm', () => {
      const button = enzymeWrapper.find('button');

      expect(button).toHaveLength(1);
    });
  });
});