import React from "react";
import logo from "../Header/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div>
          <img className="footer-img" src={logo} alt="" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">About Online Food</a>
            </li>
            <li>
              <a href="#home">Read Our Blog</a>
            </li>
            <li>
              <a href="#home">Sign up to deliver</a>
            </li>
            <li>
              <a href="#home">Add your Restaurant</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">Get Help</a>
            </li>
            <li>
              <a href="#home">Read FAQs</a>
            </li>
            <li>
              <a href="#home">View all cities</a>
            </li>
            <li>
              <a href="#home">Restaurants near me </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-2">
        <div>
          <p className="copyright">Copyright © 2021 Onion Food</p>
          <p className="copyright">Developped by <span>Hasibul Islam </span></p>
        </div>
        <div className="final-footer">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Use</a>
          <a href="#home">Pricing</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
