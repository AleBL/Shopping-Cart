import React, { Component } from "react"
import util from "../util"

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div key={ product.id }>
        <div>
          <a href={ `#${ product.id }` } onClick={ (e)=>this.props.handleAddToCard }>
            <img src={ `products/${ product.name }.png` } alt={ product.name } className="Products-size" />
          </a>

          <b>{ util.formatCurrency(product.price_per_kg) }</b>
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
