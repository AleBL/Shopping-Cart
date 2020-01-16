import React from 'react';
import { shallow } from 'enzyme';
import CouponList from "../../components/CouponList"

const setup = () => {
  const coupons = [{
    "code": "A",
    "type": "PERCENTUAL",
    "value": 0.3,
    "activation_value": 0
  },
  {
    "code": "FOO",
    "type": "FIXED",
    "value": 100,
    "activation_value": 0
  },
  {
    "code": "C",
    "type": "FREE-SHIPPING",
    "activation_value": 300.5
  }];

  const enzymeWrapper = shallow(<CouponList coupons={coupons}/>);

  return {
    enzymeWrapper
  };
};

describe('CouponList Element', () => {
  describe('render', () => {
    const { enzymeWrapper } = setup();

    it('Should render the p of CouponList', () => {
      const p = enzymeWrapper.find('p');

      expect(p).toHaveLength(4);
    });

    it('Should render the button remove coupon of CouponList', () => {
      const button = enzymeWrapper.find('button');

      expect(button).toHaveLength(3);
    });
  });
});