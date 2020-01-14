import React, { Component } from "react"
import util from "../util"

export default class Cart extends Component {
  calculatorShipping = (totalValue, totalKg) => {
    let x = 0;

    if(totalKg <= 0 || totalValue >= 400){
      return 0;
    }

    if(totalKg > 10){
      return 30 + (Math.floor((totalKg - 10) / 5) * 7) ;
    }

    return 30;
  };

  calculatorDiscount = (totalValue, shippingValue) => {
    let priceDiscount = 0;
    this.props.couponsApplied.forEach(coupon => {
      if(coupon.activationValue <= totalValue){
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
    let totalValue = 0;
    let totalKg = 0;

    try {
      totalValue = this.props.cartItems.reduce((a, c) => (a + c.price_per_kg * c.count), 0);
      totalKg = this.props.cartItems.reduce((a, c) => (a + c.count), 0);
    } catch (e) {

    }

    const shippingValue = this.calculatorShipping(totalValue, totalKg);
    const discountValue = this.calculatorDiscount(totalValue, shippingValue);

    let totalValuePurchase = (totalValue + (shippingValue - discountValue));

    if(totalValuePurchase < 0){
      totalValuePurchase = 0;
    }

    let data = [shippingValue, 
                discountValue, 
                totalValuePurchase]
    return data;
  };

  render() {
    const data = this.calculatorCartValue();
    return (
      <div>
          {
            <div>
              <ul>
                {
                  this.props.cartItems.map(item => (
                    <li key={ item.name }>
                      <b>{ item.name }</b>
                      <button style={ { float: "right" } } className="btn-small btn-danger"
                          onClick={ (e) => this.props.removeAllFromCart(e, item) }>X</button>
                      <br />
                      { item.count } X { util.formatCurrency(item.price_per_kg) }
                    </li>))
                }
              </ul>

              <div> <b>Shipping Value: { util.formatCurrency(data[0]) }</b> </div>
              <div> <b>Discount:       { util.formatCurrency(data[1]) }</b> </div>
              <div> <b>Total:          { util.formatCurrency(data[2]) }</b> </div>
              <button className="btn btn-success" 
                onClick={ () => alert("Your Purchase was successfully sent") }>
                Purchase 
              </button>
            </div>
          }
      </div>
    )
  }
}
