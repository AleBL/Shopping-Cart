import React from "react";

const CouponForm = (props) => {
  return (
      <form className="coupon-form" onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="coupon-code-input" className="coupon-label">Coupon Code</label>
        <input
          id="coupon-code-input"
          className="coupon-input"
          placeholder="Coupon Code"
          onChange={ (e) => props.changeCoupon(e.target.value) } />

        <button className="btn btn-success" type="submit" onClick={ (e) => props.addCoupon() }>
          Apply
        </button>
      </form>
  );
}

export default CouponForm;