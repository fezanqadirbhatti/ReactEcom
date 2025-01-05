import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product, handleAddToCart } = props
  return (
    <div className="card shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="text-success">${product.price.toFixed(2)}</h6>
        <p className="text-danger">Discount: {product.discountPercentage}%</p>
        <p className="text-muted">Total Reviews: {product.totalReviews}</p>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <Link
            className="btn btn-primary"
            to={`/product/${product.id}`}
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
