import React, { Component } from 'react'
import "../css/App.css";
import Products from "./Products.js"
import Coupons from "./Coupons.js"
import Cart from "./Cart.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], cartItems: [], coupons: [], couponsApplied: [], couponCode: "" };
  }

  componentWillMount() {
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
            cartItems = cartItems.filter(item => item.id !== product.id)
          }
        }
      });

      return { cartItems: cartItems };
    });
  }

  removeAllFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(item => item.id !== product.id);
      return { cartItems: cartItems };
    })
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
    this.state.couponCode = e.target.value;
  }

  addCoupon = () => {
    let couponFound = this.state.coupons.filter(coupon => (coupon.code == this.state.couponCode));
    if(couponFound.length > 0){
      this.state.couponsApplied.push({ ...couponFound[0] });
    }

    this.forceUpdate();
  };

  render(){
    return (
      <div>
        <div className="App add-product">
          <Products products={ this.state.products } 
            addToCart={ this.addToCart }
            removeFromCart={ this.removeFromCart } />
          </div>

          <div className="App coupon">
            <Coupons changeEvent={ this.changeEvent }
              addCoupon={ this.addCoupon } 
              couponsApplied={ this.state.couponsApplied }/>
          </div>

          <div className="App total">
            <Cart cartItems={ this.state.cartItems } 
              couponsApplied={ this.state.couponsApplied }
              removeAllFromCart={ this.removeAllFromCart } />
            </div>
      </div>
    );
  }
}
