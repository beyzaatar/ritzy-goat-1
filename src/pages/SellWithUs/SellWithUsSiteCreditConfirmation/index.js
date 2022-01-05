import React from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';


function index() {
    return (
        <div className='container w-75 h-100 p-5 '>
            <main>
                <div>
                    <div className='container w-25 h-100 '>
                        <MdOutlineCheckCircleOutline className="btn-group btn-group-justified" size={60} />
                    </div>
                    <br></br>
                    <div className='container w-75 h-100'>
                        <p className="h2 row justify-content-md-center ">Payment Method Updated</p>

                        <div className='container w-50 h-100'>
                            <h6 className="   row justify-content-md-left">
                                Thank you for updating your payment method.</h6>
                            <br></br>

                            <h6 className="   row justify-content-md-left">
                                Payment Method:Site Credit +5%</h6>
                            <br></br>

                            <h6 className="   row justify-content-md-center">
                                Payment method changes made after the first of the month will apply to the next month’s payment.</h6>
                        </div>
                        <br></br>
                        <br></br>
                        <div className=" container w-50 h-25 p-1">
                            <Link to={"/sellWithUs/siteCreditInformation"}>
                                <button type="button" className="btn btn-outline-dark w-100 ">GO TO MY SALES</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default index
