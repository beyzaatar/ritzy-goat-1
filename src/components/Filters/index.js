import React from "react";
import Color from "../Color";
import Gender from "../Gender";
import Size from "../Size";
import { Select } from "@chakra-ui/react";

function Filters() {
  return (
    <div>
      <div className="row justify-content-md-center mt-3 ">
        <div className="col-20 col-md-20 col-lg-20 bg-light  me-4 p-3 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <Size />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <Color />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link ">
                      <Gender />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link ">
                      <button type="button" className="btn btn-outline-dark">
                        Filter Products
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <Select
                        placeholder="Sort By"
                        variant="filled"
                        focusBorderColor="black"
                      >
                        <option value="option1">New Products</option>
                        <option value="option2">Price: Low - High</option>
                        <option value="option3">Price: High - Low</option>
                        <option value="option3">Discounted Products</option>
                      </Select>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Filters;
