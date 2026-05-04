import React, { Component } from "react"
import Product from "./Product"

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        {
          this.props.products.map(product => (
            <Product
             key={ product.id }
             product={ product }
             removeItem={ this.props.removeItem }
             addToCart={ this.props.addToCart } />
          ))
        }
      </div>
    )
  }
}

export default ProductList;