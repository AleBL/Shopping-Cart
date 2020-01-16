import * as functions from "../../util/cartFunctions.js"

describe('Cart Functions', () => {
  describe('shippingValue', () => {
    it('Should return 0 when price is above 400', () => {
      const totalValue = Math.floor(Math.random() * 100) + 400;
      const totalWeight = Math.floor(Math.random() * 100);

      const result = functions.shippingValue(totalValue, totalWeight);
      expect(result).toEqual(0);
    });

    it('Should return 30 when kg is between 0-10', () => {
      const totalValue = Math.floor(Math.random() * 10);
      const totalWeight = Math.floor(Math.random() * 10);

      const result = functions.shippingValue(totalValue, totalWeight);
      expect(result).toEqual(30);
    });

    it('Should add $7 to the shippring price for each 5kg above 10kg', () => {
      const totalValue = Math.floor(Math.random() * 10);
      const totalWeight = 25;

      const result = functions.shippingValue(totalValue, totalWeight);
      expect(result).toEqual(51);
    });
  });

  describe('discountValue', () => {
    it('Should return a discount based on value products', () => {
      const coupons = [{
        "code": "A",
        "type": "PERCENTUAL",
        "value": 0.5,
        "activation_value": 0
      }];

      const valueProducts = 100;

      const result = functions.discountValue(coupons, valueProducts, 0);
      expect(result).toEqual(50);
    });

    it('Should return a fixed discount', () => {
      const coupons = [{
        "code": "Eighty",
        "type": "FIXED",
        "value": 80,
        "activation_value": 0
      }];

      const valueProducts = 100;

      const result = functions.discountValue(coupons, valueProducts, 0);
      expect(result).toEqual(80);
    });

    it('Should return the shipping discount', () => {
      const coupons = [{
        "code": "ITSFREE",
        "type": "FREE-SHIPPING",
        "activation_value": 300
      }];

      const valueProducts = 500;
      const valueShipping = 200;

      const result = functions.discountValue(coupons, valueProducts, valueShipping);
      expect(result).toEqual(200);
    });
  });

  describe('totalValue', () => {
    it('Should return the total value of products', () => {
      const products = [
        {
          "id": 1,
          "name": "Fruit 3",
          "price_per_kg": 10.0,
          "count": 2
        },
        {
          "id": 2,
          "name": "Fruit 2",
          "price_per_kg": 15.0,
          "count": 10
        },
        {
          "id": 3,
          "name": "Fruit 3",
          "price_per_kg": 20.0,
          "count": 1
        },
        {
          "id": 4,
          "name": "Fruit 4",
          "price_per_kg": 40.0,
          "count": 5
        }
      ];

      const result = functions.totalValue(products);
      expect(result).toEqual(390);
    });
  });

  describe('totalWeight', () => {
    it('Should return the total weight of products', () => {
      const products = [
        {
          "id": 5,
          "name": "Fruit 6",
          "price_per_kg": 13.0,
          "count": 2
        },
        {
          "id": 10,
          "name": "Fruit 29",
          "price_per_kg": 1.0,
          "count": 10
        },
        {
          "id": 32,
          "name": "Fruit 67",
          "price_per_kg": 24.0,
          "count": 1
        },
        {
          "id": 18,
          "name": "Fruit 48",
          "price_per_kg": 35.0,
          "count": 5
        }
      ];

      const result = functions.totalWeight(products);
      expect(result).toEqual(18);
    });
  });

  describe('totalPurchase', () => {
    const valueTotal = 100;
    const valueShipping = 50;

    it('Should return 0 when purchase price is less than minimum', () => {
      const valueDiscount =  200;

      const result = functions.totalPurchase(valueTotal, valueShipping, valueDiscount);
      expect(result).toEqual(0);
    });

    it('Should return the total purchase', () => {
      const valueDiscount =  20;

      const result = functions.totalPurchase(valueTotal, valueShipping, valueDiscount);
      expect(result).toEqual(130);
    });
  });
});
