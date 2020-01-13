import React, { Component } from "react"
import util from "../util"

export default class Cart extends Component {

  
  calculatorShipping = (total_value, total_kg) => {
    if(total_kg <=0 || total_value >= 400){
      return 0;
    }

    if(total_kg > 10){
      return 30 + (Math.floor((total_kg - 10) / 5) * 7) ;
    }

    return 30;
  };

  calculatorDiscount = (total_value, shipping_value) => {
    let price_discount = 0;
    this.props.couponsApplied.forEach(coupon => {
      if(coupon.activation_value <= total_value){
        switch(coupon.type) {
          case "PERCENTUAL":
            price_discount += (total_value * coupon.value);
            break;
          case "FIXED":
            price_discount += coupon.value;
            break;
          case "FREE-SHIPPING":
            price_discount += shipping_value;
            break;
        }
      }

    });
    
    return price_discount;
  };

  calculatorCartValue = () => {
    let total_value = 0;
    let total_kg = 0;

    try {
      total_value = this.props.cartItems.reduce((a, c) => (a + c.price_per_kg * c.count), 0);
      total_kg = this.props.cartItems.reduce((a, c) => (a + c.count), 0);
    } catch (e) {

    }

    const shipping_value = this.calculatorShipping(total_value, total_kg);
    const discount_value = this.calculatorDiscount(total_value, shipping_value);

    let total_value_purchase = (total_value + (shipping_value - discount_value));

    if(total_value_purchase < 0){
      total_value_purchase = 0;
    }

    let data = [shipping_value, 
                discount_value, 
                total_value_purchase]
    return data;
  };

  render() {
    const data = this.calculatorCartValue();
    return (
      <div className="alert alert-info">
          {
            <div>
              <ul>
                {
                  this.props.cartItems.map(item => (
                    <li key={ item.name }>
                      <b>{ item.name }</b>
                      <button style={ { float: "right" } } className="btn btn-danger"
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
