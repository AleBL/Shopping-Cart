import React, { Fragment } from "react"
import ProductList from "./ProductList"
import CouponContainer from "./CouponContainer"
import SelectedProductsList from "./SelectedProductsList"
import ShoppingCartSummary from "./ShoppingCartSummary"

const ShoppingCart = (props) => {
  return (
    <Fragment>
      <section className="cart-grid">
        <article className="card card-products">
          <div className="card-header">
            <h2>Products</h2>
          </div>
          <ProductList
            addToCart={ props.addToCart }
            products={ props.products }
            removeItem={ props.removeItem }
          />
        </article>

        <article className="card card-coupons">
          <div className="card-header">
            <h2>Coupons</h2>
          </div>
          <CouponContainer
            changeCoupon={ props.changeCoupon }
            addCoupon={ props.addCoupon }
            removeCoupon={ props.removeCoupon }
            couponsApplied={ props.couponsApplied }
          />
        </article>

        <article className="card card-selection">
          <div className="card-header">
            <h2>Selected Products</h2>
          </div>
          <SelectedProductsList
            products={ props.cartItems }
            removeProduct={ props.removeProduct }
          />
        </article>

        <article className="card card-summary">
          <div className="card-header">
            <h2>Summary</h2>
          </div>
          <ShoppingCartSummary
            products={ props.cartItems }
            coupons={ props.couponsApplied }
          />
        </article>
      </section>
    </Fragment>
  );
}
  
export default ShoppingCart;
