import React  from "react"
import util from "../util"

export default (props) => {
  return (
    <ul>
      {
        props.cartItems.map(item => (
          <li key={ item.name }>
            <b>{ item.name }</b>
            <button style={ { float: "right" } } className="btn-small btn-danger"
                onClick={ (e) => props.removeAllFromCart(e, item) }>X</button>
            <br />
            { item.count } X { util.formatCurrencyBRL(item.price_per_kg) }
          </li>))
      }
    </ul>
  );
};
