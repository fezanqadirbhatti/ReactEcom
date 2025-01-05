import React from "react";
import Cookies from "js-cookie";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-justify">
        <h1 className="h4 mb-0">Team Project</h1>
        <div className="buttonGroup">
        <button className="btn btn-primary">Contact Us</button>&nbsp;&nbsp;
          <button
            onClick={() => {
              Cookies.remove("accessToken"); 
              window.location.href = "/login";
              console.log("Logout");
            }}
            className="btn btn-outline-light"
          >
            Logout
          </button> 
        </div>
      </div>
    </header>
  );
};

export default Header;
