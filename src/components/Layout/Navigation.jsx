import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {Cookies.get("accessToken") ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  to="/"
                >
                  Dashboard
                </NavLink>
              </li>
            ) : ''}

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link nav-link" : "nav-link"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item shoppingCart">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link nav-link" : "nav-link"
                }
                to="/"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
