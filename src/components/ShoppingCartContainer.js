import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart.js"
import * as cartFunctions from "../util/cartFunctions.js"
import util from "../util/util"

function resolveApiBasePath() {
  const envApi = process.env.REACT_APP_API_URL;
  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";

  // In production, ignore localhost env values to prevent broken requests on Vercel.
  if (envApi && !(envApi.includes("localhost") && !isLocalhost)) {
    return envApi.endsWith("/") ? envApi : `${envApi}/`;
  }

  return isLocalhost ? "http://localhost:8000/" : "/api/";
}

const baseApiPath = resolveApiBasePath();
const productsPath = "products";
const couponsPath = "coupons";

class ShoppingCartContainer extends Component {
  state = {
    products: [],
    cartItems: [],
    coupons: [],
    couponsApplied: [],
    newProductName: "",
    newProductPrice: "",
    productFeedback: {
      type: "info",
      text: ""
    },
    couponCode: "",
    couponFeedback: {
      type: "info",
      text: ""
    }
  }

  componentDidMount() {
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
    const [item] = cartItems.filter(item => item.id === product.id);
    
    if (item) {
      item.count += 1;
    } else {
      cartItems.push({...product, count: 1});
    }
    
    const newState = { ...this.state, cartItems: cartItems };
    this.setState(newState);
  }

  changeNewProductName = (value) => {
    this.setState({
      ...this.state,
      newProductName: value,
      productFeedback: {
        type: "info",
        text: ""
      }
    });
  }

  changeNewProductPrice = (value) => {
    this.setState({
      ...this.state,
      newProductPrice: value,
      productFeedback: {
        type: "info",
        text: ""
      }
    });
  }

  createProduct = async () => {
    const { newProductName, newProductPrice, products } = this.state;
    const parsedPrice = parseFloat(newProductPrice);

    if (!newProductName.trim()) {
      this.setState({
        ...this.state,
        productFeedback: {
          type: "error",
          text: "Product name is required."
        }
      });
      return;
    }

    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      this.setState({
        ...this.state,
        productFeedback: {
          type: "error",
          text: "Price per kg must be greater than zero."
        }
      });
      return;
    }

    try {
      const response = await fetch(baseApiPath + productsPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: newProductName.trim(),
          price_per_kg: parsedPrice
        })
      });

      if (!response.ok) {
        throw new Error("Could not create product");
      }

      const newProduct = await response.json();

      this.setState({
        ...this.state,
        products: [...products, newProduct],
        newProductName: "",
        newProductPrice: "",
        productFeedback: {
          type: "success",
          text: `Product ${newProduct.name} created successfully.`
        }
      });
    } catch (_error) {
      this.setState({
        ...this.state,
        productFeedback: {
          type: "error",
          text: "Could not create product. Check if API server is running."
        }
      });
    }
  }

  changeCoupon = (inputText) => {
    const couponCode = inputText;
    const newState = {
      ...this.state,
      couponCode,
      couponFeedback: {
        type: "info",
        text: ""
      }
    }

    this.setState(newState);
  }

  addCoupon = () => {
    const { coupons, couponCode, couponsApplied, cartItems } = this.state;
    const normalizedCode = couponCode.trim().toUpperCase();
    const [coupon] = coupons.filter((item) => item.code.toUpperCase() === normalizedCode);
    const [coupomApplied] = couponsApplied.filter((item) => item.code === normalizedCode);
    const totalCartValue = cartFunctions.totalValue(cartItems);

    if (!coupon) {
      this.setState({
        ...this.state,
        couponFeedback: {
          type: "error",
          text: "Coupon not found."
        }
      });
      return;
    }

    if (coupomApplied) {
      this.setState({
        ...this.state,
        couponFeedback: {
          type: "error",
          text: `Coupon ${coupon.code} has already been applied.`
        }
      });
      return;
    }

    if (coupon.activation_value > totalCartValue) {
      this.setState({
        ...this.state,
        couponFeedback: {
          type: "error",
          text: `Coupon ${coupon.code} was not applied. Minimum value: ${util.formatCurrencyBRL(coupon.activation_value)}.`
        }
      });
      return;
    }
    
    couponsApplied.push({ ...coupon });
    
    const newState = {
      ...this.state,
      couponsApplied,
      couponFeedback: {
        type: "success",
        text: `Coupon ${coupon.code} applied successfully.`
      }
    };
    
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
        newProductName={ this.state.newProductName }
        newProductPrice={ this.state.newProductPrice }
        productFeedback={ this.state.productFeedback }
        changeNewProductName={ this.changeNewProductName }
        changeNewProductPrice={ this.changeNewProductPrice }
        createProduct={ this.createProduct }
        changeCoupon={ this.changeCoupon } 
        addCoupon={ this.addCoupon } 
        removeCoupon={ this.removeCoupon } 
        couponsApplied={ this.state.couponsApplied } 
        couponFeedback={ this.state.couponFeedback }
        cartItems={ this.state.cartItems } 
        removeProduct={ this.removeProduct } />
    );
  }
}

export default ShoppingCartContainer;