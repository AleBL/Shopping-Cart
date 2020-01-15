import React from "react";

const CouponForm = (props) => {
  return (
      <div>
        <input placeholder="Coupon Code"
          onChange={ (e) => props.changeCoupon(e.target.value) } />

        <button className="btn btn-success" type="submit" onClick={ (e) => props.addCoupon() }>
          Apply
        </button>
      </div>
  );
}

export default CouponForm;