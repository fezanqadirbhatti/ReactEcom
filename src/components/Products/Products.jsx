import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to Cart:", product);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 mb-4" key={product.id}>
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
