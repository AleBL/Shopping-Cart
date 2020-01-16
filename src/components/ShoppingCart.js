import React, { Fragment } from "react"
import ProductList from "./ProductList"
import CouponContainer from "./CouponContainer"
import SelectedProductsList from "./SelectedProductsList"
import ShoppingCartSummary from "./ShoppingCartSummary"

const ShoppingCart = (props) => {
  return (
    <Fragment>
      <ProductList
        addToCart={ props.addToCart }
        products={ props.products }
        removeItem={ props.removeItem }
      />
      <CouponContainer
        changeCoupon={ props.changeCoupon }
        addCoupon={ props.addCoupon }
        removeCoupon={ props.removeCoupon }
        couponsApplied={ props.couponsApplied }
      />
      <SelectedProductsList
        products={ props.cartItems }
        removeProduct={ props.removeProduct }
      />
      <ShoppingCartSummary
        products={ props.cartItems }
        coupons={ props.couponsApplied }
      />
    </Fragment>
  );
}
  
export default ShoppingCart;
