import React, { Component } from "react";
import "./css/App.css";
import ShoppingCartContainer from "./components/ShoppingCartContainer.js";

class App extends Component {
  render(){
    return (
      <div className="app-shell">
        <div className="app-background-glow app-background-glow-left" />
        <div className="app-background-glow app-background-glow-right" />

        <main className="app-layout">
          <header className="app-hero">
            <p className="app-kicker">Fresh Market</p>
            <h1 className="app-title">Shopping Cart</h1>
            <p className="app-subtitle">Build your basket, apply coupons, and checkout with live totals.</p>
          </header>

          <ShoppingCartContainer />
        </main>
      </div>
    );
  }
}

export default App;
