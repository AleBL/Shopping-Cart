import React  from "react"
import util from "../util/util"

const SelectedProductsList = (props) => {
  return (
    <ul>
      {
        props.products.map(product => (
          <li key={product.id}>
            <b>{product.name}</b>
            <button style={{ float: "right" }} className="btn-small btn-danger"
                onClick={ (e) => props.removeProduct(product) }>X</button>
            <br/>
            {product.count} X {util.formatCurrencyBRL(product.price_per_kg)}
          </li>))
      }
    </ul>
  )
};

export default SelectedProductsList;
