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
                    <li key={ item.id }>
                      <b>{ item.name }</b>
                      <button style={ { float: "right" } } className="btn btn-danger"
                          onClick={ (e) => this.props.removeFromCart(e, item) }>X</button>
                      <br />
                      { item.count } X { util.formatCurrency(item.price_per_kg) }
                    </li>))
                }
              </ul>

              <b>Total: { util.formatCurrency(cartItems.reduce((a, c) => (a + c.price_per_kg * c.count), 0)) }</b>
              <button onClick={ () => alert('Todo: Implement checkout page.') } className="btn btn-primary"> Purchase </button>
            </div>
          }
      </div>
    )
  }
}
