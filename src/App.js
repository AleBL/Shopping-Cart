import React, { Component } from "react";
import "./css/App.css";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render(){
    return (
      <div>
        <h1>Shopping Cart</h1>
        <hr />

        <ShoppingCart />
      </div>
    );
  }
}

export default App;
