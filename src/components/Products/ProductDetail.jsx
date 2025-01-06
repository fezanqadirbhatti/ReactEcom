import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Fetching route parameter
  const [product, setProduct] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data); // Setting fetched product data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };
    getProduct();
  }, [id]); // Dependency array ensures this runs when `id` changes

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>;
  }

  if (!product) {
    return <div className="container mt-5">No product found!</div>;
  }

  return (
    <div className="product-detail container mt-5">
      <div className="card product-card shadow-lg">
        <div className="row g-0">
          <div className="col-md-5 image-section">
            <img
              src={product.thumbnail}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-7 details-section">
            <div className="card-body">
              <h1 className="product-title">{product.title}</h1>
              <p className="category-label">{product.category.toUpperCase()}</p>
              <p className="description">{product.description}</p>
              <h2 className="price text-success">
                ${product.price.toFixed(2)}
              </h2>
              <p className="discount text-danger">
                Discount: {product.discountPercentage}%
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                {product.availabilityStatus || "N/A"}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
              {product.dimensions && (
                <p>
                  <strong>Dimensions:</strong>{" "}
                  {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}
                </p>
              )}
              <p>
                <strong>Weight:</strong> {product.weight || "N/A"} kg
              </p>
              <div className="d-flex align-items-center mt-3">
                <p className="rating me-4">
                  <strong>Rating:</strong> {product.rating}
                </p>
                <p>
                  <strong>Stock:</strong> {product.stock}
                </p>
              </div>
              {product.meta?.qrCode && (
                <div className="mt-3">
                  <a
                    href={product.meta.qrCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-link"
                  >
                    <img src={product.meta.qrCode} alt="QR Code" width="120" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="reviews mt-5">
        <h2>Customer Reviews</h2>
        {product.reviews?.length > 0 ? (
          <ul className="list-group">
            {product.reviews.map((review, index) => (
              <li className="list-group-item review-item" key={index}>
                <strong>{review.reviewerName}</strong> ({review.reviewerEmail})
                <p className="rating">Rating: {review.rating}</p>
                <p className="comment">{review.comment}</p>
                <small className="date">
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
