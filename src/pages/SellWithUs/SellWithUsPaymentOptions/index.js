import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function SellWithUsPaymentOptions() {
    return (
        <div className='container w-100 h-100 p-5 '>
            <main>
                <div>
                    <a href='/'> <MdOutlineArrowBackIos class="btn-group btn-group-left" size={25} />
                        <strong>TO MY SALES</strong></a>
                    <div className='container w-50 h-100'>
                        <p className="h2 row justify-content-md-center ">PAYMENT OPTİONS</p>
                        <h6 className="  text-left mt-3">Commission payments are issued on the
                            15th of each month. Select your payment method below.</h6>
                        <br></br>
                        <Divider orientation='horizontal' />
                    </div>


                    <div className='container w-50 h-100'>
                        <div className="row mt-3">

                            <div className="col">
                                <Link to={"/sellWithUs/verify"}>
                                    <p className=" h4  text-left mt-3">Site Credit</p>
                                    <h6 className="  text-left">Earn an extra 5%</h6>
                                </Link>
                            </div>


                            <div className="col">
                                <Link to={"/sellWithUs/verify"}>
                                    <MdOutlineArrowForwardIos class="btn-group btn-group-right" size={30} />
                                </Link>
                            </div>
                        </div>
                        <br></br>
                        <Divider />

                        <div className="row mt-3">
                            <div className="col">
                                <Link to={"/sellWithUs/DirectDepositVerify"}>
                                    <p className=" h4  text-left mt-3">Direct Deposit(Recommended)</p>
                                    <h6 className="  text-left">The easiest way to get paid</h6>
                                </Link>
                            </div>

                            <div className="col">
                                <Link to={"/sellWithUs/DirectDepositVerify"}>
                                    <MdOutlineArrowForwardIos class="btn-group btn-group-right" size={30} />
                                </Link>

                            </div>
                        </div>

                        <br></br>
                        <Divider />

                        <div className="row mt-3">
                            <div className="col">
                                <p className=" h4  text-left mt-3">Check By Mail</p>
                                <h6 className="  text-left">Earn an extra 5%</h6>
                            </div>

                            <div className="col">
                                <MdOutlineArrowForwardIos class="btn-group btn-group-right" size={30} />
                            </div>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default SellWithUsPaymentOptions
