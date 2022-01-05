import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

function index() {
    return (
        <div className='container w-100 h-100 p-5 '>
            <main>
                <div>
                    <Link to={"/sellwithUs/paymentOptions"}> <MdOutlineArrowBackIos className="btn-group btn-group-left" size={25} />
                        <strong>TO PAYMENT OPTIONS</strong></Link>
                    <div className='container w-50 h-100'>
                        <p className="h2 row justify-content-md-center ">Site Credit</p>
                        <h6 className="   row justify-content-md-center">
                            Earn an extra 5% on top of your commission each month.</h6>
                        <br></br>
                        <br></br>
                        <p className="h1 row justify-content-md-center ">EARN 5% MORE</p>
                        <p className="h4 row justify-content-md-center ">each month with site credit</p>

                        <br></br>
                        <br></br>
                            <div className=" container w-50 h-25 p-1">
                                <Link to={"/sellWithUs/siteCreditConfirmation"}>
                                    <button type="button" className="btn btn-outline-dark w-100 ">Confirm</button>
                                </Link>
                            </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default index
