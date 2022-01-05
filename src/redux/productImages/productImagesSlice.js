import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductImagesAsync=createAsyncThunk('productImages/getProductImagesAsync', async()=>{
 const res =await axios('http://localhost:8080/api/productImages/getAll');
 return res.data.data;
 });


/*export const addProductAsync=createAsyncThunk('products/addProductAsync',async(data)=>{
    const res=await axios.post('http://localhost:8080/api/products/add',data);
    return res.data.data;
})*/


export const productImagesSlice=createSlice({
    name:'productImages',
    initialState:{
        items:[],
        isLoading:false,
        error:false,
    },
    reducers:{},
    extraReducers:{
        //get product images
        [getProductImagesAsync.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getProductImagesAsync.fulfilled]:(state, action) => {
            state.items=action.payload;
            state.isLoading=false;
        },
        [getProductImagesAsync.rejected]:(state, action)=>{
            state.isLoading=false;
            state.console.error=action.error.message;

        },

        
 
    },
});
export default productImagesSlice.reducer;


