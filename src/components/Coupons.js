import React, { Component } from "react"
import util from "../util"
import "../css/App.css";
import CouponsApplied from "./CouponsApplied.js"

export default class Coupons extends Component {

  constructor(props) {
    super(props);
    this.state = { couponsApplied: [] };
  }

  render() {
    const ApplyCoupons = (
      <div>
        <input placeholder="Coupon Code"
        onChange={ (e) => this.props.changeEvent(e, this.state.couponCode) } />

        <button className="btn btn-success" type="submit" onClick={ (e) => this.props.addCoupon() }>
          Apply
        </button>
      </div>
    );

    return (
      <div>
        { ApplyCoupons }

        <div className="App-header">
          <CouponsApplied couponsApplied={ this.props.couponsApplied } 
            removeCoupon={ this.props.removeCoupon }/>
        </div>
      </div>
    )
  }
}
