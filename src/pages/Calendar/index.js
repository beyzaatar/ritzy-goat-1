import React from "react";
import { Link } from "react-router-dom";
import { getWeeksForMonth } from "./helpers";

let month = [];
function index() {
  month = getWeeksForMonth(1, 2022);
  console.log(month[0]);

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-3 ">
        <div
          div
          className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border"
        >
          <p className=" h1 row justify-content-md-center mt-3">
            Request a Free Appointment
          </p>
          <Link>
            <p className="row justify-content-md-center mt-3">
              Coming soon...
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
