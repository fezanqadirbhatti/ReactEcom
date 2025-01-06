import React from "react";
import Cookies from "js-cookie";

const Header = () => {
  return (
    <header className="header bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo h4 mb-0">ReactEcom</h1>
        <div className="buttonGroup">
          <button className="btn btn-light contact-btn">Contact Us</button>
          {Cookies.get("accessToken") ? (
            <button
              onClick={() => {
                Cookies.remove("accessToken");
                window.location.href = "/login";
              }}
              className="btn btn-outline-light logout-btn"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="btn btn-light login-btn"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
