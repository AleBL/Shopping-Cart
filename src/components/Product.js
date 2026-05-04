import React, { useState } from "react"
import util from "../util/util"

const Product = (props) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="product-item" key={ props.product.id }>
      <a href={ `#${props.product.id}` } className="product-image-link">
        { imgError
          ? <div className="product-image-placeholder" aria-label={ props.product.name }>🛒</div>
          : <img
              src={`products/${props.product.name}.png`}
              alt={ props.product.name }
              className="product-image"
              onError={ () => setImgError(true) }
            />
        }
      </a>

      <div className="product-meta">
        <strong className="product-name">{ props.product.name }</strong>
        <b className="product-price">{util.formatCurrencyBRL(props.product.price_per_kg)}</b>
      </div>

      <div className="product-actions">
        <button className="btn btn-primary btn-compact" onClick={ (e)=> props.addToCart(props.product) }> + </button>
        <button className="btn btn-primary btn-compact" onClick={ (e)=> props.removeItem(props.product) }> - </button>
      </div>
    </article>
  )
}

export default Product;