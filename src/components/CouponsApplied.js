import React, { Component } from "react"
import util from "../util"

export default class CouponsApplied extends Component {
  render() {
    const AppliedCoupons = this.props.couponsApplied.map(coupon => (
      <div key={ coupon.code } >
        <p> 
          { coupon.code } {" -> "}
          { coupon.type == "PERCENTUAL" ? " - " + (coupon.value * 100) + " %" : "" }
          { coupon.type == "FIXED" ? " - " + util.formatCurrency(coupon.value) : "" }
          { coupon.type == "FREE-SHIPPING" ? "FREE-SHIPPING" : "" }
        </p>
      </div>
    ));

    return (
      <div>
        <p>Coupons: </p>
        { AppliedCoupons }
      </div>
    )
  }
}
