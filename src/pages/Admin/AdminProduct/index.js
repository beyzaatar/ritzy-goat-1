import React from 'react'
import Admin from '..'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, getProductsAsync } from "../../../redux/products/productsSlice"
import { deleteProduct } from '../../../services/ProductsService';
import { useQueryClient, useMutation } from 'react-query';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
    useToast,
    Button
} from '@chakra-ui/react'


function AdminProduct() {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch();
    const toast = useToast()

    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    const queryClient=useQueryClient();

    const deleteMutation = useMutation(deleteProduct,{
        onSuccess:() =>queryClient.invalidateQueries()
    });
    return (
        <div>
            <div className='container'>
                <div className="row justify-content-md-center mt-3 ">
                    <a href='/newProduct' className='btn btn-dark w-25  mt-3' >Add New Product</a>
                    <table className="table table-striped table-hover mt-5">
                        <thead>
                            <tr>

                                <th scope="col" className='h5'>id</th>
                                <th scope="col" className='h5'>Product Name</th>
                                <th scope="col" className='h5'>Category 1</th>
                                <th scope="col" className='h5'>Category 2</th>
                                <th scope="col" className='h5'>Category 3</th>
                                <th scope="col" className='h5'>Color</th>
                                <th scope="col" className='h5'>Gender</th>
                                <th scope="col" className='h5'>Material</th>
                                <th scope="col" className='h5'>Size</th>
                                <th scope="col" className='h5'>Unit Price</th>
                                <th scope="col" className='h5'>Description</th>
                                <th scope="col" className='h5'>Detailed Information</th>



                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <th className='h5' scope="row">{product.id}</th>
                                        <td>{product.productName}</td>
                                        <td>{product.categoryLevel1.categoryName}</td>
                                        <td>{product.categoryLevel2.categoryName}</td>
                                        <td>{product.categoryLevel3.categoryName}</td>
                                        <td>{product.color.colorName}</td>
                                        <td>{product.gender.genderName}</td>
                                        <td>{product.material.materialName}</td>
                                        <td>{product.size.sizeName}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.description}</td>
                                        <td>{product.detailedInformation}</td>

                                        
                                        <td><Link to={`/adminProductDetail/${product.id}`} type="button" className="btn btn-link text-success">Edit</Link></td>
                                        
                                        <td>
                                            <Popover>
                                                <PopoverTrigger>
                                                    <button type="button" className="btn btn-link text-success">Delete</button>
                                                </PopoverTrigger>
                                                <Portal size>
                                                    <PopoverContent>
                                                        <PopoverArrow />
                                                        <PopoverHeader className='h5'>Are you sure?</PopoverHeader>
                                                        <PopoverCloseButton />
                                                        <PopoverBody>
                                                            <button type="button" className="btn btn-dark w-25" onClick={()=>{
                                                                deleteMutation.mutate(product.id,{
                                                                    onSuccess:()=>{
                                                                        console.log("success")
                                                                    }

                                                                })
                                                            }}
                                                            >Yes</button>

                                                            <button type="button" style={{ marginLeft: 20 }} className="btn btn-light w-25">No</button>
                                                        </PopoverBody>
                                                        <PopoverFooter></PopoverFooter>
                                                    </PopoverContent>
                                                </Portal>
                                            </Popover>
                                        </td>


                                    </tr>
                                ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct
