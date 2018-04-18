import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer light-blue accent-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 id="contact" className="white-text">
              Contact us @
            </h5>
            <p className="grey-text text-lighten-4">contact@sevafund.org</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 id="follow-us" className="white-text">
              Follow us!
            </h5>
            <ul className="social-med">
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.instagram.com/sevafund"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.facebook.com/sevafund/"
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://twitter.com/sevafund"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/company/sevafund/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          All rights reserved © 2018 SevaFund
        </div>
      </div>
    </footer>
  );
};

export default Footer;
