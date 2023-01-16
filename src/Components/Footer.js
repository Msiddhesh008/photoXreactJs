import React from "react";

const Footer = () => {
  return (
    <section className="px-5 text-start mass-primary">
      <div className="container-fluid">
        <div className="row text-light py-4">
          <div className="col-lg-4 col-sm-6">
            <h5 className="pb-3">About Us</h5>
            <p className="small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </p>
          </div>

          <div className="col-lg-2 col-sm-6">
            <h5 className="pb-3">Visit Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link menu-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Customer
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-6">
            <h5 className="pb-3">Need Help?</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link text-uppercase menu-item">
                  customer service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-uppercase menu-item">
                  online chat
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-uppercase menu-item">
                  support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link menu-item">
                  photox@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-sm-6">
            <h5 className="pb-3">Stay connected</h5>
            <p className="small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </p>
            <form className="mb-3">
              <div className="input-group">
                <input className="form-control input rounded-0 border-0" placeholder="Email Adress" />
                <div className="input-group-append">
                  <button className="btn rounded-0 tw-bold text-white" style={{background:"#F40009"}}>Sign Up</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
