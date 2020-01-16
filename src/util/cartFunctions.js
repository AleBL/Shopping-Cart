import {
  minimumWeight,
  freeShippingvalue,
  maximumWeight,
  baseShippingValue,
  extraWeightForShipping,
  extraShippingFee,
  minimumPurchaseValue
} from "./constants.js"

export const shippingValue = (totalValue, totalWeight) => {
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

export const discountValue = (coupons, totalValue, shippingValue) => {
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

export const totalValue = (items) => {
  return items.reduce((acc, item) => ( acc + item.price_per_kg * item.count ), 0);
}

export const totalWeight = (items) => {
  return items.reduce((acc, item) => ( acc + item.count), 0);
}

export const totalPurchase = (totalValue, shippingValue, discountValue) => {
  const total = totalValue + shippingValue - discountValue;
  return total > minimumPurchaseValue ? total : minimumPurchaseValue;
}