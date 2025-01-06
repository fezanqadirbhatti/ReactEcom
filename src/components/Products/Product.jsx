import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0; // Handle no reviews case
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1); // Round to 1 decimal
};

const calculateTotalReviews = (reviews) => {
  if (reviews.length === 0) return 0;
  return reviews.length;
};

const Product = (props) => {
  const { product, handleAddToCart } = props;
  return (
    <div className="card product-card shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top product-image"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title product-title">{product.title}</h5>
        <h6 className="text-success product-price">
          ${product.price.toFixed(2)}
        </h6>
        <p className="text-danger product-discount">
          Discount: {product.discountPercentage}%
        </p>
        <p className="text-muted product-reviews">
          Average Rating: {calculateAverageRating(product.reviews)} <br />
          Total Reviews: {calculateTotalReviews(product.reviews)} <br />
        </p>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-primary add-to-cart-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <Link
            className="btn btn-outline-primary details-btn"
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
