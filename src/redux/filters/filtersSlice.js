import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getSizesAsync=createAsyncThunk('sizeFilters/getSizesAsync',async()=>{
    const res=await axios('http://localhost:8080/api/sizes/getAll');
    return res.data.data;
})

export const getDesignersAsync=createAsyncThunk('designerFilters/getDesignersAsync',async()=>{
    const res=await axios('http://localhost:8080/api/designers/getAll');
    return res.data.data;
})

export const getColorsAsync=createAsyncThunk('colorFilters/getColorsAsync',async()=>{
    const res=await axios('http://localhost:8080/api/colors/getAll');
    return res.data.data;
})

export const getGendersAsync=createAsyncThunk('genderFilters/getGendersAsync',async()=>{
    const res=await axios("http://localhost:8080/api/genders/getAll");
    return res.data.data;
})


export const filtersSlice=createSlice({
    name:'filters',
    initialState:{
        sizes:[],
        designers:[],
        colors:[],
        genders:[],
        isLoadingSize:false,
        errorSize:false,
        isLoadingDesigner:false,
        errorDesigner:false,
        isLoadingColor:false,
        errorColor:false,
        isLoadingGender:false,
        errorColorGender:false,
    },
    reducers:{},
    extraReducers:{
        [getSizesAsync.pending]:(state,action)=>{
            state.isLoadingSize=true;
        },
        [getSizesAsync.fulfilled]:(state, action) => {
            state.sizes=action.payload;
            state.isLoadingSize=false;
        },
        [getSizesAsync.rejected]:(state, action)=>{
            state.isLoadingSize=false;
            state.console.errorSize=action.error.message;

        },

        [getDesignersAsync.pending]:(state,action)=>{
            state.isLoadingDesigner=true;
        },
        [getDesignersAsync.fulfilled]:(state, action) => {
            state.designers=action.payload;
            state.isLoadingDesigner=false;
            console.log(state.colors)
        },
        [getDesignersAsync.rejected]:(state, action)=>{
            state.isLoadingDesigner=false;
            state.console.errorDesigner=action.error.message;

        },

        [getColorsAsync.pending]:(state,action)=>{
            state.isLoadingColor=true;
        },
        [getColorsAsync.fulfilled]:(state, action) => {
            state.colors=action.payload;
            state.isLoadingColor=false;
        },
        [getColorsAsync.rejected]:(state, action)=>{
            state.isLoadingColor=false;
            state.console.errorColor=action.error.message;
        },

        [getGendersAsync.pending]:(state,action)=>{
            state.isLoadingGender=true;
        },
        [getGendersAsync.fulfilled]:(state, action) => {
            state.genders=action.payload;
            state.isLoadingGender=false;
        },
        [getGendersAsync.rejected]:(state, action)=>{
            state.isLoadingGender=false;
            state.console.errorGender=action.error.message;
        }
    }
})
export default filtersSlice.reducer;