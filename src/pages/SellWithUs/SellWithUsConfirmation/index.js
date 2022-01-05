import {  Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function SellWithUsConfirmation() {
    return (
        <div className='container w-100 h-100 p-5 bg-light'>
            <div className="container w-100 h-75 p-5 bg-white ">
                < div className=" container w-100 h-75 bg-warning  p-4  border   ">

                    <p className="h6 row justify-content-md-center mt-3">YOU'RE ALL SET</p>
                    <p className=" h2 row justify-content-md-center mt-3">Get your items ready!</p>

                    <div className="row mt-3">
                        <div className="col">
                            <p className="h6 row justify-content-md-center mt-3">Your shipping label</p>
                            <button type="submit" class="btn btn-outline-dark w-100">DOWNLOAD NOW</button>
                        </div>

                        <div className="col">
                            <p className="h6 row justify-content-md-center mt-3">Set up your direct deposit</p>
                          <Link to={"/sellwithUs/paymentOptions"}>
                            <button type="submit" class="btn btn-outline-dark w-100">START</button>
                            </Link>
                        </div>
                    </div>

                    <h6 className=" row justify-content-md-center pt-5">We also sent your label to:</h6>
                    <h6 ><u className="  row justify-content-md-center ">beyzaatar50@gmail.com</u></h6>
                    <p className="h6 text-center pt-4">QUESTIONS? CALL US AT <u>1-800-215-0566</u></p>                
                    </div>
            </div>
            < div className=" container w-100 h-75 bg-white  p-5">
                <div className='row mt-3'>
                    <div className='col'>
                        <div div className=" container w-50 h-25 p-1">
                            <p className=" h3 row justify-content-md-center ">Get Text Reminders</p>
                            <br></br>
                            <Input focusBorderColor='black' type="number" className="form-control" aria-label="Sizing example input" placeholder='Phone' />
                            <br></br>
                            <button type="submit" class="btn btn-outline-dark w-100">SIGN UP</button>
                            <br></br>
                            <br></br>
                            <h6 className=" text-center ">By signing up, you agree to receive text messages from The RealReal.
                                Message and data rates may apply.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellWithUsConfirmation
