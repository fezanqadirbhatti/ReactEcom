import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Product from "./Product";




const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useLocation()
  const searchQuery = new URLSearchParams(search).get("search");
  const categoryQuery = new URLSearchParams(search).get("category");

  console.log(searchQuery)


  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSearchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      const data = await response.json();
      if (response && response.ok) {
        console.log(data)
        setProducts(data.products)
      }
      else {
        console.error("Error searching Products : ", data.message)
      }
    }
    catch (error) {
      console.error("Error Searching Products : ", error)
    } finally {
      setLoading(false);
    }
  }

  const getCategoryProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${categoryQuery}`)
      const data = await response.json();
      if (response && response.ok) {
        console.log(data)
        setProducts(data.products)
      }
      else {
        console.error("Error getting Products category : ", data.message)
      }
    }
    catch (error) {
      console.error("Error getting Products category : ", error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchQuery) getSearchProduct();
    else if(categoryQuery) getCategoryProduct();
    else getProducts();
  }, [search]);

  const handleAddToCart = (product) => {
    console.log("Adding to Cart:", product);
  };

  if (loading) {
    return <p style={{ margin: "0 auto", textAlign: "center" }}>Loading...</p>;
  }

  return (
    products.length > 0 ? (
      <div className="product-listing container mt-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        No Products Found relevant to "{searchQuery}"
      </h1>
    )
  )

}
  ;

export default Products;
