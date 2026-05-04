import React, { Fragment } from "react"
import CouponList from "./CouponList"
import CouponForm from "./CouponForm"

const CouponContainer = (props) => {
  return (
    <div className="coupon-container">
      <CouponForm
        changeCoupon={ props.changeCoupon }
        addCoupon={ props.addCoupon }
      />
      <CouponList
        coupons={ props.couponsApplied }
        removeCoupon={ props.removeCoupon }
      />
    </div>
  )
}

export default CouponContainer;