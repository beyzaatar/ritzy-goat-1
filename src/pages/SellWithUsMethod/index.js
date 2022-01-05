import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function index() {
    return (
        <div className='container'>
            <div className="row justify-content-md-center mt-3 ">
                <div div className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border">
                <p className="h6 row justify-content-md-center mt-3">WE’RE ALMOST THERE</p>
               <p className=" h2 row justify-content-md-center mt-3">Let’s get your itemson their way</p>
                <Link to="/request/appointment">
                <Button colorScheme="teal" size="xs">
                request an appointment
                </Button></Link>
                </div>
            </div>
        </div>
    )
}

export default index
