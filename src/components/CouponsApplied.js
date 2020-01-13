import React, { Component } from "./node_modules/react"
import util from "../util"

export default class CouponsApplied extends Component {

  render() {

    const AppliedCoupons = this.props.couponsApplied.map(coupon => (
      <div>
        <p> { coupon.code } { coupon.value } </p>
      </div>
    ));

    return (
      <div>
        { AppliedCoupons }
      </div>
    )
  }
}
