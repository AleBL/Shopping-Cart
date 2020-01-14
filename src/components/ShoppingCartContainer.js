import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], cartItems: [], coupons: [], couponsApplied: [], couponCode: "" };
  }

  UNSAFE_componentWillMount() {
    fetch("http://localhost:8000/products").then(res => res.json())
      .then(data => this.setState({
        products: data
      }));

    fetch("http://localhost:8000/coupons").then(res => res.json())
      .then(data => this.setState({
        coupons: data
      }));
  }

  removeFromCart = (e, product) => {
    this.setState(state => {
      let cartItems = state.cartItems;

      cartItems.forEach(item => {
        if (item.id === product.id) {
          item.count -= 1;

          if(item.count <= 0){
            cartItems = this.removeFromArrayById(product, state.cartItems);
          }
        }
      });

      return { cartItems: cartItems };
    });
  }

  removeAllFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = this.removeFromArrayById(product, state.cartItems);
      return { cartItems: cartItems };
    })
  }

  removeFromArrayById = (element, array) => {
    return array.filter(item => item.id !== element.id);
  }

  addToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;

      let found = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          item.count += 1;
          found = true;
        }
      });

      if(found){
        return { cartItems: cartItems };
      }
      cartItems.push({ ...product, count: 1 });

      return { cartItems: cartItems };
    });
  }

  changeEvent = (e) => {
    const couponCode = e.target.value;

    this.setState(state => {
      return { couponCode: couponCode };
    });
  }

  addCoupon = () => {
    this.setState(state => {
      const couponFound = state.coupons.filter(coupon => (coupon.code === state.couponCode));
      const couponAppliedFound = state.couponsApplied.filter(coupon => (coupon.code === state.couponCode));
      const couponsApplied = state.couponsApplied;

      if(couponFound.length > 0 && couponAppliedFound.length <= 0){
        couponsApplied.push({ ...couponFound[0] });
      }

      return { couponsApplied: couponsApplied };
    });
  };

  removeCoupon = (coupon) => {
    this.setState((state) => {
      const couponsApplied = state.couponsApplied.filter(couponApplied => (couponApplied.code !== coupon.code));

      return { couponsApplied: couponsApplied }
    });
  };

  render(){
    return (
      <ShoppingCart 
        products={ this.state.products }
        addToCart={ this.addToCart } 
        removeFromCart={ this.removeFromCart } 
        changeEvent={ this.changeEvent } 
        addCoupon={ this.addCoupon } 
        removeCoupon={ this.removeCoupon } 
        couponsApplied={ this.state.couponsApplied } 
        cartItems={ this.state.cartItems } 
        removeAllFromCart={ this.removeAllFromCart } />
    );
  }
}
