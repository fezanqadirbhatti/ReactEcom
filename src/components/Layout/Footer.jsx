import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
            <h5>ReactEcom</h5>
            <p className="small">
              © {new Date().getFullYear()} ReactEcom. All Rights Reserved.
            </p>
            <p className="small">
              Open-source project licensed under the{" "}
              <a
                href="https://raw.githubusercontent.com/fezanqadirbhatti/ReactEcom/refs/heads/main/LICENSE"
                className="text-white text-decoration-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
              .
            </p>
          </div>
          <div className="col-md-6 text-md-end text-center">
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <a href="#privacy" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#terms" className="text-white text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
