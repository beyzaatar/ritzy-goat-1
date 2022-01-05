import React from 'react'
import {
    Grid,
    Input
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function SellWithUsConsignments() {
    return (
        <div className='container w-20 h-25'>
            <div className="row justify-content-md-center mt-3 w-20">
                < div className="col-20 col-md-20 col-lg-5 bg-light mt-5 me-4 p-5  border">

                    <p className="h6 row justify-content-md-center mt-3">LAST STEP</p>
                    <p className=" h2 row justify-content-md-center mt-3">Please confirm your address</p>

                    <form>
                        <div className="mb-3  mt-4">
                            <div className="row mt-3">
                                <div className="col">
                                    <Input focusBorderColor='black' type="text" aria-label="First name" className="form-control " placeholder='FIRST NAME' />
                                </div>
                                <div className="col">
                                    <Input focusBorderColor='black' type="text" aria-label="Last name" className="form-control" placeholder='LAST NAME' />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <Input focusBorderColor='black' placeholder='Street1' />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <Input focusBorderColor='black' placeholder='Street2' />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <Input focusBorderColor='black' placeholder='City' />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <select class="form-select form-select-md mb-3" focusBorderColor='black' aria-label=".form-select-lg example">
                                        <option selected>State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>                                </div>
                                <div className="col">
                                    <Input focusBorderColor='black' type="number" className="form-control" aria-label="Sizing example input" placeholder='ZIP CODE' />
                                </div>

                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                <Input focusBorderColor='black' type="number" className="form-control" aria-label="Sizing example input" placeholder='Phone' />
                                </div>
                            </div>

                            
                        </div>
                        <Link to="/sellWithUs/confirmation"><button type="submit" class="btn btn-dark w-100"> SAVE & FINISH</button></Link>
                            
                        
                    </form>
                </div>
            </div>
        </div >
    )
}

export default SellWithUsConsignments
