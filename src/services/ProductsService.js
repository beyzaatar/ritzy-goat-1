import axios from "axios"

export const fetchProductList = async()=>{
    const{data}=await axios.get('http://localhost:8080/api/products/getAll')
    return data;
}

export const fetchProductDetail = async(id)=>{
    const{data}=await axios.get(`http://localhost:8080/api/products/getByProductId?id=${id}`)
    return data;
}

export const fetchProductImages = async(id)=>{
    const{data}=await axios.get(`http://localhost:8080/api/productImages/getById?productId=${id}`)
    return data;
}

export const deleteProduct=async(id)=>{
    const {data}=await fetch(`http://localhost:8080/api/products/deleteById?id=${id}`)
    return data;
};


export const postProduct=async(input)=>{
    const {data} =await axios.post(`http://localhost:8080/api/products/add`,input)
    return data;
}