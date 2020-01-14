import React, { Component } from "react"
import util from "../util"

export default class Product extends Component {
  render() {
    
    const productItems = this.props.products.map(product => (
      <div key={ product.id }>
        <div>
          <a href={ `#${ product.id }` }>
            <img src={ `products/${ product.name }.png` } alt={ product.name } className="Products-size" />
          </a>

          <b>{ util.formatCurrencyBRL(product.price_per_kg) }</b>
          <button className="btn-small btn-primary" onClick={ (e)=>this.props.addToCart(e, product) }> + </button>
          <button className="btn-small btn-primary" onClick={ (e)=>this.props.removeFromCart(e, product) }> - </button>
        </div>
      </div>
    ));

    return (
      <div>
        { productItems }
      </div>
    )
  }
}
