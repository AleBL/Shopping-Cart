import React from "react"
import Product from "./Product.js"
import Coupon from "./Coupon.js"
import DisplayProduct from "./DisplayProduct.js"
import DisplayTotalContainer from "./DisplayTotalContainer.js"

export default (props) => {
  return (
    <div>
      <div className="App add-product-size">
        <Product products={ props.products } 
          addToCart={ props.addToCart }
          removeFromCart={ props.removeFromCart } />
        </div>

        <div className="App coupon-size">
          <Coupon changeEvent={ props.changeEvent }
            addCoupon={ props.addCoupon } 
            removeCoupon={ props.removeCoupon }
            couponsApplied={ props.couponsApplied }/>
        </div>

        <div className="App total-size">
          <DisplayProduct cartItems={ props.cartItems } 
            removeAllFromCart={ props.removeAllFromCart } />
        </div>

        <div className="App total-size">
          <DisplayTotalContainer cartItems={ props.cartItems } 
            couponsApplied={ props.couponsApplied } />
        </div>
    </div>
  );
};
