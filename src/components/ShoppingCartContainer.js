import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart.js"

const baseApiPath = "http://localhost:8000/";
const productsPath = "products";
const couponsPath = "coupons";

class ShoppingCartContainer extends Component {
  state = {
    products: [],
    cartItems: [],
    coupons: [],
    couponsApplied: [],
    couponCode: ""
  }

  componentWillMount() {
    Promise.all([
      fetch(baseApiPath + productsPath),
      fetch(baseApiPath + couponsPath)
    ]).then((data) => {
      let productsPromisse = data[0].json();
      let couponsPromisse  = data[1].json();

      productsPromisse.then((data) => {
        this.setState({ products: data });
      });

      couponsPromisse.then((data) => {
        this.setState({ coupons: data });
      });
    });
  }

  removeItem = (product) => {
    const { cartItems } = Object.assign(this.state);
    
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        if (item.count > 1) {
          return item.count -= 1;
        } else {
          const itemIndex = cartItems.indexOf(item);
          cartItems.splice(itemIndex, 1);
        }
      }
    });
      
    const newState = { ...this.state, cartItems: cartItems };
      
    this.setState(newState);
  }

  removeProduct = (product) => {
      const { cartItems } = Object.assign(this.state);
      const newCartItems = cartItems.filter(item => item.id !== product.id);
      const newState = { ...this.state, cartItems: newCartItems };

      this.setState(newState);
  }

  addToCart = (product) => {
    const { cartItems } = Object.assign(this.state);
    const [item, ...rest] = cartItems.filter(item => item.id === product.id);
    
    if (item) {
      item.count += 1;
    } else {
      cartItems.push({...product, count: 1});
    }
    
    const newState = { ...this.state, cartItems: cartItems };
    this.setState(newState);
  }

  changeCoupon = (inputText) => {
    const couponCode = inputText;
    const newState = {...this.state, couponCode }

    this.setState(newState);
  }

  addCoupon = () => {
    const { coupons, couponCode, couponsApplied } = this.state;
    const [coupon, ...rest] = coupons.filter(coupon => coupon.code === couponCode);
    const [coupomApplied] = couponsApplied.filter(coupon => coupon.code === couponCode);
    
    if (coupon && !coupomApplied){
      couponsApplied.push({ ...coupon });
    }
    
    const newState = { ...this.state, couponsApplied };
    
    this.setState(newState);
  };

  removeCoupon = (coupon) => {
    const { couponsApplied } = this.state;
    const newState = {
      ...this.state,
      couponsApplied: couponsApplied.filter(coupomApplied => coupomApplied.code !== coupon.code)
    };
    this.setState(newState);
  };

  render(){
    return (
      <ShoppingCart 
        products={ this.state.products }
        addToCart={ this.addToCart } 
        removeItem={ this.removeItem } 
        changeCoupon={ this.changeCoupon } 
        addCoupon={ this.addCoupon } 
        removeCoupon={ this.removeCoupon } 
        couponsApplied={ this.state.couponsApplied } 
        cartItems={ this.state.cartItems } 
        removeProduct={ this.removeProduct } />
    );
  }
}

export default ShoppingCartContainer;