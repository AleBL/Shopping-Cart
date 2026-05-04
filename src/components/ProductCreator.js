import React from "react";

const ProductCreator = (props) => {
  const hasFeedback = props.productFeedback && props.productFeedback.text;

  return (
    <form className="product-creator" onSubmit={(e) => e.preventDefault()}>
      <h3 className="product-creator-title">Add Product</h3>

      <div className="product-creator-grid">
        <input
          className="product-input"
          placeholder="Product Name"
          value={props.newProductName}
          onChange={(e) => props.changeNewProductName(e.target.value)}
        />
        <input
          className="product-input"
          type="number"
          min="0"
          step="0.01"
          placeholder="Price per kg"
          value={props.newProductPrice}
          onChange={(e) => props.changeNewProductPrice(e.target.value)}
        />
        <button className="btn btn-success" type="submit" onClick={props.createProduct}>
          Create Product
        </button>
      </div>

      {
        hasFeedback &&
        <p className={`product-feedback product-feedback-${props.productFeedback.type}`} role="status">
          {props.productFeedback.text}
        </p>
      }
    </form>
  );
};

export default ProductCreator;
