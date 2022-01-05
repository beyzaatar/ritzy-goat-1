import React from "react";
import { Link } from "react-router-dom";


function AccountTabs() {
  return (
    <div>
      <ul className="nav list-group-flush" style={{ padding: "20px" }}>
        <li className="list-group-item">
          <Link to="/myPurchases" style={{ fontSize: "1.1rem" }}>
            MY PURCHASES
          </Link>
        </li>

        <li className="list-group-item">
          <Link to="/mySales" style={{ fontSize: "1.1rem" }}>
            MY SALES
          </Link>
        </li>

        <li className="list-group-item">
          <Link to="/accountInfo" style={{ fontSize: "1.1rem" }}>
            ACCOUNT INFO
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/addressBook" style={{ fontSize: "1.1rem" }}>
            ADDRESS BOOK
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/account" style={{ fontSize: "1.1rem" }}>
            PAYMENT METHODS
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/account" style={{ fontSize: "1.1rem" }}>
            PREFERENCES
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/obsessions" style={{ fontSize: "1.1rem" }}>
            OBSESSIONS
          </Link>
        </li>

        <li className="list-group-item">
          <Link to="/account" style={{ fontSize: "1.1rem" }}>
            MY RG
          </Link>
        </li>

        <li className="list-group-item">
          <Link to="/account" style={{ fontSize: "1.1rem" }}>
            WAITLIST
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/account" style={{ fontSize: "1.1rem" }}></Link>
        </li>
      </ul>
    </div>
  );
}

export default AccountTabs;
