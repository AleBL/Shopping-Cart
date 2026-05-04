import React  from "react"
import util from "../util/util"

const SelectedProductsList = (props) => {
  return (
    <ul className="selected-products-list">
      {
        props.products.map(product => (
          <li key={ product.id } className="selected-product-item">
            <div className="selected-product-head">
              <b>{ product.name }</b>
              <button className="btn-small btn-danger"
                  onClick={ (e) => props.removeProduct(product) }>X</button>
            </div>
            <p className="selected-product-meta">
              { product.count } X { util.formatCurrencyBRL(product.price_per_kg) }
            </p>
          </li>))
      }
    </ul>
  )
};

export default SelectedProductsList;
