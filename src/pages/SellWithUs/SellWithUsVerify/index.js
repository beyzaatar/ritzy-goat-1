import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function SellWithUsVerify() {
    return (
        <div className='container w-100 h-100 p-5 '>
            <main>
                <div>
                    <Link to={"/sellwithUs/paymentOptions"}> <MdOutlineArrowBackIos className="btn-group btn-group-left" size={25} />
                        <strong>TO PAYMENT OPTIONS</strong></Link>
                    <div className='container w-50 h-100'>
                        
                            <p className="h2 row justify-content-md-center ">Please Verify Your Account</p>
                            <div className='container w-75 h-100'>
                            <h6 className="  text-left mt-3">
                                For added security, we’ve sent a one-time password to the email address
                                associated with your The RitzyGoat account. Please enter it below to update your Payment Option.</h6>
                            <br></br>
                        </div>
                        <div className=" container w-50 h-25 p-1">
                            <Input focusBorderColor='black' type="text" aria-label="One-time password" className="form-control "
                                placeholder='Enter One-Time Password' />
                            <br></br>
                            <div className=" container w-100 h-25 p-1">
                                <Link to={"/sellWithUs/siteCredit"}>
                                    <button type="button" className="btn btn-outline-dark w-100 ">Verify</button>
                                </Link>
                            </div>
                            <br></br>

                            <h6 className=" text-center "><a href='/'><u>Resend One-Time Password</u></a></h6>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SellWithUsVerify
