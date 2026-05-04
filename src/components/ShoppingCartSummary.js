import React, { useState, useEffect } from "react"
import * as cartFunctions from "../util/cartFunctions.js"

const CONFETTI_COUNT = 32;

const randomBetween = (a, b) => a + Math.random() * (b - a);

const Confetti = () => (
  <div className="purchase-confetti" aria-hidden="true">
    { Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
      <span
        key={ i }
        className="confetti-piece"
        style={{
          left: `${ randomBetween(2, 98) }%`,
          animationDelay: `${ randomBetween(0, 0.5) }s`,
          backgroundColor: [
            "#e38b29", "#1f9f95", "#d73a49",
            "#f5c842", "#6c5ce7", "#00b894"
          ][ i % 6 ],
          width:  `${ randomBetween(6, 12) }px`,
          height: `${ randomBetween(6, 12) }px`,
          borderRadius: i % 3 === 0 ? "50%" : "2px",
        }}
      />
    )) }
  </div>
);

const ShoppingCartSummary = (props) => {
  const [purchased, setPurchased] = useState(false);

  const totalValueProducts = cartFunctions.totalValue(props.products);
  const totalWeightProducts = cartFunctions.totalWeight(props.products);
  const shippingValuePurchase = cartFunctions.shippingValue(totalValueProducts, totalWeightProducts);
  const totalDiscountValue = cartFunctions.discountValue(props.coupons, totalValueProducts, shippingValuePurchase);
  const purchaseValue = cartFunctions.totalPurchase(totalValueProducts, shippingValuePurchase, totalDiscountValue);

  useEffect(() => {
    if (!purchased) return;
    const timer = setTimeout(() => setPurchased(false), 3500);
    return () => clearTimeout(timer);
  }, [purchased]);

  return (
    <div className="summary-panel">
      { purchased && (
        <div className="purchase-overlay" role="status" aria-live="polite">
          <Confetti />
          <div className="purchase-success-content">
            <div className="purchase-checkmark">✓</div>
            <p className="purchase-success-title">Order placed!</p>
            <p className="purchase-success-sub">Your purchase was successfully sent.</p>
          </div>
        </div>
      ) }

      <div className="summary-row"> <b>Shipping Value: { shippingValuePurchase }</b> </div>
      <div className="summary-row"> <b>Discount:       { totalDiscountValue }</b> </div>
      <div className="summary-row summary-total"> <b>Total:          { purchaseValue }</b> </div>
      <button
        className={ `btn btn-success${ purchased ? " btn-purchased" : "" }` }
        onClick={ () => setPurchased(true) }
        disabled={ purchased }
      >
        { purchased ? "✓ Placed!" : "Purchase" }
      </button>
    </div>
  );
}

export default ShoppingCartSummary;