import React, { Component } from "react"
import DisplayTotal from "./DisplayTotal.js"
import util from "../util.js"
import consts from "../constants.js"

export default class CartContainer extends Component {
  calculatorShipping = (totalValue, totalKg) => {
    if(totalKg <= consts.minimumKg || totalValue >= consts.freeShippingValue){
      return 0;
    }

    if(totalKg > consts.maximumKgBaseShipping){
      const extraKg = totalKg - consts.maximumKgBaseShipping;

      return consts.baseShippingValue + (Math.floor(
        (extraKg / consts.extraKgForShipping)) * consts.extraShippingValue) ;
    }

    return consts.baseShippingValue;
  };

  calculatorDiscount = (totalValue, shippingValue) => {
    let priceDiscount = 0;
    this.props.couponsApplied.forEach(coupon => {
      if(coupon.activation_value <= totalValue) {
        switch(coupon.type) {
          case "PERCENTUAL":
            priceDiscount += (totalValue * coupon.value);
            break;
          case "FIXED":
            priceDiscount += coupon.value;
            break;
          case "FREE-SHIPPING":
            priceDiscount += shippingValue;
            break;
        }
      }
    });
    
    return priceDiscount;
  };

  calculatorCartValue = () => {
    let totalValue;
    let totalKg;

    try {
      totalValue = this.props.cartItems.reduce((a, c) => (a + c.price_per_kg * c.count), 0);
      totalKg = this.props.cartItems.reduce((a, c) => (a + c.count), 0);
    } catch (e) {
      totalValue = 0;
      totalKg = 0;
    }

    const shippingValue = this.calculatorShipping(totalValue, totalKg);
    const discountValue = this.calculatorDiscount(totalValue, shippingValue);

    let totalValuePurchase = (totalValue + (shippingValue - discountValue));

    if(totalValuePurchase < consts.purchaseMinimumValue){
      totalValuePurchase = consts.purchaseMinimumValue;
    }

    let data = [util.formatCurrencyBRL(shippingValue), 
                util.formatCurrencyBRL(discountValue), 
                util.formatCurrencyBRL(totalValuePurchase)];
    return data;
  };

  render() {
    const data = this.calculatorCartValue();

    return (
      <DisplayTotal data={ data } />
    );
  }
}
