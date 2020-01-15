import React  from "react"

const minimumWeight = 0;
const freeShippingvalue = 400;
const maximumWeight = 10;
const baseShippingValue = 30;
const extraWeightForShipping = 5;
const extraShippingFee = 7;
const minimumPurchaseValue = 0;

const ShoppingCartSummary = (props) => {
  const shippingValue = (totalValue, totalWeight) => {
    const freeShipping = totalWeight <= minimumWeight || totalValue >= freeShippingvalue;

    if (freeShipping) {
      return 0;
    }
    
    if (totalWeight > maximumWeight){
      const extraWeight = totalWeight - maximumWeight;
      const extraShippingValue = Math.floor(extraWeight/extraWeightForShipping) * extraShippingFee;
      
      return baseShippingValue + extraShippingValue;
    }
    
    return baseShippingValue;
  };

  const discountValue = (coupons, totalValue, shippingValue) => {
    let discount = 0;
    
    coupons.forEach(coupon => {
      if(coupon.activation_value <= totalValue) {
        switch(coupon.type) {
          case "PERCENTUAL":
            discount += (totalValue * coupon.value);
            break;
          case "FIXED":
            discount += coupon.value;
            break;
          case "FREE-SHIPPING":
            discount += shippingValue;
            break;
          default:
            break;
        }
      }
    });

    return discount;
  };

  const totalValue = (items) => {
    return items.reduce((acc, item) => ( acc + item.price_per_kg * item.count ), 0);
  }

  const totalWeight = (items) => {
    return items.reduce((acc, item) => ( acc + item.count), 0);
  }

  const totalValueProducts = totalValue(props.products);
  const totalWeightProducts = totalWeight(props.products);
  const shippingValuePurchase = shippingValue(totalValueProducts, totalWeightProducts);
  const totalDiscountValue = discountValue(props.coupons, totalValueProducts, totalWeightProducts);

  const total = totalValueProducts + shippingValuePurchase - totalDiscountValue;
  const purchaseValue = total > minimumPurchaseValue ? total : minimumPurchaseValue;
  
  return (
    <div>
      <div> <b>Shipping Value: { shippingValuePurchase }</b> </div>
      <div> <b>Discount:       { totalDiscountValue }</b> </div>
      <div> <b>Total:          { purchaseValue }</b> </div>
      <button className="btn btn-success" 
        onClick={ () => alert("Your Purchase was successfully sent") }>
        Purchase 
      </button>
    </div>
  );
}

export default ShoppingCartSummary;