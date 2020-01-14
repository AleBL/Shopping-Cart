import React, { Component } from "react"
import CouponApplied from "./CouponApplied.js"

export default class Coupon extends Component {

  constructor(props) {
    super(props);
    this.state = { couponsApplied: [] };
  }

  render() {
    const applyCoupons = (
      <div>
        <input placeholder="Coupon Code"
          onChange={ (e) => this.props.changeEvent(e) } />

        <button className="btn btn-success" type="submit" onClick={ (e) => this.props.addCoupon() }>
          Apply
        </button>
      </div>
    );

    return (
      <div>
        { applyCoupons }

        <div className="App-header">
          <CouponApplied couponsApplied={ this.props.couponsApplied } 
            removeCoupon={ this.props.removeCoupon }/>
        </div>
      </div>
    )
  }
}
