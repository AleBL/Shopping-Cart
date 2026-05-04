import React from "react"
import * as cartFunctions from "../util/cartFunctions.js"

const ShoppingCartSummary = (props) => {
  const totalValueProducts = cartFunctions.totalValue(props.products);
  const totalWeightProducts = cartFunctions.totalWeight(props.products);
  const shippingValuePurchase = cartFunctions.shippingValue(totalValueProducts, totalWeightProducts);
  const totalDiscountValue = cartFunctions.discountValue(props.coupons, totalValueProducts, shippingValuePurchase);

  const purchaseValue = cartFunctions.totalPurchase(totalValueProducts, shippingValuePurchase, totalDiscountValue);
  
  return (
    <div className="summary-panel">
      <div className="summary-row"> <b>Shipping Value: { shippingValuePurchase }</b> </div>
      <div className="summary-row"> <b>Discount:       { totalDiscountValue }</b> </div>
      <div className="summary-row summary-total"> <b>Total:          { purchaseValue }</b> </div>
      <button className="btn btn-success" 
        onClick={ () => alert("Your Purchase was successfully sent") }>
        Purchase 
      </button>
    </div>
  );
}

export default ShoppingCartSummary;