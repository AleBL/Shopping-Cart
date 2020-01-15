import React from "react"
import util from "../util"

const couponsDefaults = {
  "PERCENTUAL": {
    "signal": " %",
    "transformFunction": util.percentualCalc,
  },
  "FIXED": {
    "signal": "",
    "transformFunction": util.formatCurrencyBRL,
  },
  "FREE-SHIPPING": {
    "signal": "",
    "transformFunction": (_param) => ("FREE-SHIPPING")
  }
};

const couponValue = (coupon) => {
  const transformFuntion = couponsDefaults[coupon.type].transformFunction;

  return transformFuntion(coupon.value);
};

const couponSignal = (coupon) => {
  return couponsDefaults[coupon.type].signal;
};

const CouponList = (props) => {
  return (
    <div>
        <p>Coupons: </p>
        {
           props.coupons.map(coupon => (
            <div key={ coupon.code } >
              <p> 
                { `${coupon.code} : ${couponValue(coupon)} ${couponSignal(coupon)}` } 

                <button type="submit" className="btn-small btn-danger"
                  onClick={ (e) => props.removeCoupon(coupon) }>
                  X
                </button>
              </p>
            </div>
          ))
        }
      </div>
  );
}

export default CouponList;
