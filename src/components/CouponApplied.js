import React, { Component } from "react"
import util from "../util"

export default class CouponApplied extends Component {
  render() {
    const appliedCoupons = this.props.couponsApplied.map(coupon => (
      <div key={ coupon.code } >
        <p> 
          { coupon.code } {" : "}
          { coupon.type === "PERCENTUAL" ? " - " + util.percentualCalc(coupon.value) + " %" : "" }
          { coupon.type === "FIXED" ? " - " + util.formatCurrencyBRL(coupon.value) : "" }
          { coupon.type === "FREE-SHIPPING" ? "FREE-SHIPPING" : "" }

          <button type="submit" className="btn-small btn-danger" 
            onClick={ (e) => this.props.removeCoupon(coupon) }>
            X
          </button>
        </p>
      </div>
    ));

    return (
      <div>
        <p>Coupons: </p>
        { appliedCoupons }
      </div>
    )
  }
}
