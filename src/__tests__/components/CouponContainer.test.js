import React from 'react';
import { shallow } from 'enzyme';
import CouponContainer from "../../components/CouponContainer"

const setup = () => {
  const enzymeWrapper = shallow(<CouponContainer />);

  return {
    enzymeWrapper
  };
};

describe('CouponContainer Component', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();

    it('Should render the CouponForm of CouponContainer', () => {
      const couponForm = enzymeWrapper.find('CouponForm');

      expect(couponForm).toHaveLength(1);
    });

    it('Should render the CouponList of CouponContainer', () => {
      const couponList = enzymeWrapper.find('CouponList');

      expect(couponList).toHaveLength(1);
    });
  });
});