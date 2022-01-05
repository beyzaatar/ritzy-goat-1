import React from "react";
import { Input } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function index() {
  return (
    <div className="container">
      <div className="row justify-content-md-center mt-3">
        <div className="col-12 col-md-12 col-lg-5 bg-light mt-5 me-4 p-5 border">
          <p className="h6 row justify-content-md-center mt-3">
            LET’S GET STARTED
          </p>
          <p className=" h1 row justify-content-md-center mt-3">
            Sell with us. It's easy.
          </p>

          <div className="row justify-content-md-center mt-3">
            Let’s start with a little info about you.
          </div>

          <form>
            <div className="mb-3  mt-4">
              <div className="row mt-3">
                <div className="col">
                  <Input
                    focusBorderColor="black"
                    type="text"
                    aria-label="First name"
                    className="form-control "
                    placeholder="FIRST NAME"
                  />
                </div>
                <div className="col">
                  <Input
                    focusBorderColor="black"
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    placeholder="LAST NAME"
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <Input focusBorderColor="black" placeholder="Email" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <Input
                    focusBorderColor="black"
                    type="number"
                    className="form-control"
                    aria-label="Sizing example input"
                    placeholder="PHONE"
                  />
                </div>
                <div className="col">
                  <Input
                    focusBorderColor="black"
                    type="number"
                    className="form-control"
                    aria-label="Sizing example input"
                    placeholder="ZIP CODE"
                  />
                </div>
              </div>
            </div>
            <Link to="/sellWithUs/method">
              <button type="submit" class="btn btn-dark w-100">
                CONTINUE
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
