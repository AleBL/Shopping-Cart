import React, { Component } from "./node_modules/react"
import util from "../util"
import "../css/App.css";
import CouponsApplied from "./CouponsApplied.js"

export default class Coupons extends Component {

  constructor(props) {
    super(props);
    this.state = {coupons: [], couponsApplied: [], couponCode: ""};
  }

  changeEvent = (e) => {
    this.state.couponCode = e.target.value;
  }

  addCoupon = (couponList) => {
    couponList.forEach(coupon => {
      if (coupon.code === this.state.couponCode) {
        this.state.couponsApplied.push({ ...coupon });
      }
    });

    this.forceUpdate();
  };

  render() {
    const ApplyCoupons = (
      <div>
        <input placeholder="Coupon Code"
        onChange={ (e) => this.changeEvent(e, this.state.couponCode) } />

        <button className="btn btn-success" type="submit" onClick={ (e) => this.addCoupon(this.props.coupons) }>
          Apply
        </button>
      </div>
    );

    return (
      <div>
        { ApplyCoupons }

        <div className="App-header">
          <CouponsApplied couponsApplied={ this.state.couponsApplied } />
        </div>
      </div>
    )
  }
}
