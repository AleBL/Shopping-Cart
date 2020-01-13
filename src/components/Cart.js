import React, { Component } from "react"
import util from "../util"

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info">
          {
            <div>
              <ul>
                {
                  cartItems.map(item => (
                    <li key={ item.name }>
                      <b>{ item.name }</b>
                      <button style={ { float: "right" } } className="btn btn-danger"
                          onClick={ (e) => this.props.removeAllFromCart(e, item) }>X</button>
                      <br />
                      { item.count } X { util.formatCurrency(item.price_per_kg) }
                    </li>))
                }
              </ul>

              <b>Total: { util.formatCurrency(cartItems.reduce((a, c) => (a + c.price_per_kg * c.count), 0)) }</b>
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
