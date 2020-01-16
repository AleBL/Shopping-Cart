import React from "react"
import util from "../util/util"

const Product = (props) => {
  return (
    <div key={props.product.id}>
      <a href={`#${props.product.id}`}>
        <img src={`products/${props.product.name}.png`} alt={props.product.name} className="Products-size" />
      </a>

      <b>{util.formatCurrencyBRL(props.product.price_per_kg)}</b>
      <button className="btn-small btn-primary" onClick={ (e)=> props.addToCart(props.product) }> + </button>
      <button className="btn-small btn-primary" onClick={ (e)=> props.removeItem(props.product) }> - </button>
    </div>
  )
}

export default Product;