import React from 'react'
import { BsBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function MySales() {
    return (
        <div >
            <div className="card text-center" style={{ width: "50rem", justifyContent: "center" }}>
                <div className="card-body">
                    <BsBagFill size="50" />
                    <h5 className="card-title">YOU DO NOT HAVE FOR SALE YET</h5>
                    <p className="card-text">Start consigning to view your sales..</p>
                    <br></br>
                    <Link href="#" className="btn btn-dark">START SELLING NOW </Link>
                </div>
            </div>
        </div>
    )
}

export default MySales
