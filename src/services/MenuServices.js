import axios from "axios"

export const getCategoryLevel1 = async()=>{
    const{data}=await axios.get('http://localhost:8080/api/categoryLevel1/getAll')
    return data;
}

export const getCategoryLevel2 = async(mainCategoryId)=>{
    const{data}=await axios.get(`http://localhost:8080/api/categoryLevel2/getByCategoryLevel1Id?id=${mainCategoryId}`)
    return data;
}