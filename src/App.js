import React, { Component } from "react";
import "./css/App.css";
import ShoppingCartContainer from "./components/ShoppingCartContainer.js";

class App extends Component {
  render(){
    return (
      <div className="App total-size">
        <h1>Shopping Cart</h1>
        <hr />

        <ShoppingCartContainer />
      </div>
    );
  }
}

export default App;
