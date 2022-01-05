import React from 'react'
import {
    List,
    ListItem,
    Button,
    Divider
} from '@chakra-ui/react'
import { MdClear } from 'react-icons/md';
import { Link } from 'react-router-dom';

function SellWithUsPackingList() {
    return (
        <div className='container'>
            <div className="row justify-content-md-center mt-3 ">
                <div div className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border">
                    <p className="h2 row justify-content-md-center mt-3">Packing List</p>
                    <p className=" h6 row justify-content-md-center mt-3">Check out our accepted designers and list each item you'd like to sell.</p>
                    <div className="row mt-3">
                        <div className="col">
                            <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option selected>Select Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>                        </div>
                        <div className="col">
                            <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option selected>Select Designer Brand</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col">
                            <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option selected>Select Item Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col">
                            <button type="button" class="btn btn-outline-secondary">ADD ITEM</button>
                        </div>

                    </div>
                    <div>
                        <br></br>
                        <br></br>
                        <div>CONSIGNMENT LIST: 3 ITEMS</div>

                        <Divider />
                        <div className="row mt-2">
                            <div className="col">
                                <List spacing={3}>
                                    <ListItem>
                                        Women's Fashion & Accessories / 'S Max Mara / Accessories
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-outline-dark h-15 w-15">
                                    <div ><MdClear class="btn-group btn-group-justified" size={15} /></div>

                                </button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <List spacing={3}>
                                    <ListItem>
                                        Men's Fashion & Accessories / Casely-Hayford / Accessories
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-outline-dark h-15 w-15">
                                    <div ><MdClear class="btn-group btn-group-justified" size={15} /></div>
                                </button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <List spacing={3}>
                                    <ListItem>

                                        Fine Jewelry / 1-100 / Anklets
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-outline-dark h-15 w-15">
                                    <div ><MdClear class="btn-group btn-group-justified" size={15} /></div>
                                </button>
                            </div>
                    </div>
                    <br></br>
                    <Link to={"/sellWithUs/consignments"}>
                    <Button colorScheme="teal" mt="10" width="full" class="btn btn-outline-dark -justified">
                        SELL 3 ITEMS
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
        </div >
    )
}

export default SellWithUsPackingList
