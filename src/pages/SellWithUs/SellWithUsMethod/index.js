import React from 'react'
import { Link } from "react-router-dom";
import { GoPackage } from 'react-icons/go';
import { FaHandHolding } from 'react-icons/fa';



function SellWithUsMethod() {
    return (
        <div className='container'>
            <div className="row justify-content-md-center mt-3 ">
                < div className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border">
                    <p className="h6 row justify-content-md-center mt-3">WE’RE ALMOST THERE</p>
                    <p className=" h2 row justify-content-md-center mt-3">Let’s get your itemson their way</p>

                    <div className="row mt-3">
                        <div className="col">
                            
                            <button type="button" className="btn btn-outline-dark w-100 h-100">
                            <div ><FaHandHolding className="btn-group btn-group-justified" size={100}/></div>
                            <strong>VIRTUAL CONCIERGE APPOINTMENT</strong>
                                <div>
                                    <p className="h6 row justify-content-md-center mt-3">
                                        Schedule a virtual appointment with one of our Luxury Managers.
                                        </p>
                                </div>
                            </button>
                            
                        </div>
                        <div className="col">
                        <Link to="/sellwithus/packingList">
                            <button type="button" className="btn btn-outline-dark w-100">
                                <div ><GoPackage class="btn-group btn-group-justified" size={100}/></div>
                                <strong>PRINT A FREE SHIPPING LABEL</strong>
                                <div>
                                    <p className="h6 row justify-content-md-center mt-3">
                                        Send us your items-postage is always on us.
                                    </p>
                                </div>

                            </button>
                            </Link>
                        </div>



                    </div>


                </div>


            </div>

        </div>
    )
}

export default SellWithUsMethod
