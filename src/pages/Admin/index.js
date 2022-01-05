import React from 'react'
import { GoPackage } from "react-icons/go";
import { GrUnorderedList } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";



function Admin() {
    return (
        <div className='container'>
            <div className="row  justify-content-end">
                <div className="col-4 d-flex justify-content-end align-items-right">
                    <br></br>
                    <ul className="nav col-12 col-lg-auto">

                        <li>
                            <Link to="/adminHome" className="nav-link text-dark">
                                <AiOutlineHome />
                                Home
                            </Link>
                        </li>
                        <br></br>
                        <li>
                            <Link to="/adminOrder" className="nav-link text-dark">
                                <GrUnorderedList />
                                Orders
                            </Link>
                        </li>
                        <br></br>
                        <li>
                            <Link to="/adminProduct" className="nav-link text-dark">
                                <GoPackage />
                                Products
                            </Link>
                        </li>
                        <br></br>
                        <li>
                            <Link to="/adminUser" className="nav-link text-dark">
                                <FiUsers />
                                Users
                            </Link>
                        </li>
                        <br></br>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin
