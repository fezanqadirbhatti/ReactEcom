import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import Cookies from "js-cookie";
import { Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Nav from "./components/Layout/Navigation";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";

export default function App() {
  const accessToken = Cookies.get("accessToken");

  return (
    <>
      {accessToken ? (
        <>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/home" element={<AdminDashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}
