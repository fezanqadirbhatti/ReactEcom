import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-3">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#privacy" className="text-muted">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#terms" className="text-muted">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#contact" className="text-muted">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
