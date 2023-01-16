import React from "react";


const Navbar = () => {
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg fixed-top mt-1 nav-menu">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <span className="h2 fw-bold">PHOTO</span>
            <span className="h1 iconStyle">X</span>
          </a>
          <button
            className="navbar-toggler nav-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="bg-light line1"></div>
            <div className="bg-light line2"></div>
            <div className="bg-light line3"></div>
          </button>
        </div>

        <div
          className="collapse navbar-collapse text-uppercase fw-bold text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#abs"
              >
                MISSION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                COLLECTION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                CUSTOMERS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light m-2 menu-item"
                aria-current="page"
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
