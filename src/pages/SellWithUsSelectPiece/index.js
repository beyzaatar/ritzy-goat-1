import React from "react";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SellWithUsSelectPiece() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center mt-3 border">
          <div className="col">
            <p className="row justify-content-md-center mt-5">
              LAST THING, PROMISE
            </p>
            <p className="h1 row justify-content-md-center mt-3">
              Already know what you want to sell?
            </p>
            <p className="h5 row justify-content-md-center ">
              How many pieces are you planning on selling?
            </p>
            <div className="row justify-content-md-center m-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  1-11 pieces
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  11-19 pieces
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" for="flexRadioDefault3">
                  20+ pieces
                </label>
              </div>

              <div className="form-check">
                <Textarea placeholder="(Optional)What designers and categories are you planning on selling?" />
              </div>
              <Link to={"/sellWithUsSet"}>
              <button type="button" class="btn btn-outline-dark mt-5">
                FINISH
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellWithUsSelectPiece;
