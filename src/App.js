import React, { Component } from 'react';
import './css/App.css';
import Products from './components/Products.js'
import Cart from './components/Cart.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], cartItems:[] };
  }

  removeFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      return { cartItems: cartItems };
    })
  }

  addToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;

      let found = false;
      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          found = true;
        }
      });

      if(found){
        return { cartItems: cartItems };
      }
      cartItems.push({ ...product, count: 1 });
      
      console.log(cartItems)

      return { cartItems: cartItems };
    });
  }

  render(){
    return (
      <div>
        <h1>Shopping Cart + {this.state.cartItems.length} + { this.state.products.length }</h1>
        <hr />
        <div>
          <div className="App-header">
            <Products products={this.state.products} 
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}/>
          </div>

          <div className="App-header">
            <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

