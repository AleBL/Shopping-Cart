import React, { Component, Fragment } from "react"
import Product from "./Product"

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.products.map(product => (
            <Product
             product={ product }
             removeItem={this.props.removeItem}
             addToCart={this.props.addToCart} />
          ))
        }
      </Fragment>
    )
  }
}

export default ProductList;