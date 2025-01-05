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
    <div className="container mt-5">
      <div className="card mb-4 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.thumbnail}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text text-muted">
                {product.category.toUpperCase()}
              </p>
              <p className="card-text">{product.description}</p>
              <h6 className="text-success">${product.price.toFixed(2)}</h6>
              <p className="text-danger">
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
              <div className="d-flex">
                <p className="me-3">
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
                  >
                    <img src={product.meta.qrCode} alt="QR Code" width="100" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4>Customer Reviews</h4>
        {product.reviews?.length > 0 ? (
          <ul className="list-group">
            {product.reviews.map((review, index) => (
              <li className="list-group-item" key={index}>
                <strong>{review.reviewerName}</strong> ({review.reviewerEmail})
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
                <small>{new Date(review.date).toLocaleDateString()}</small>
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
