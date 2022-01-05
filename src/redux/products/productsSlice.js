import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/products/getAll");
    return res.data.data;
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoadingProduct: false,
    errorProduct: false,

    currentCategory1: 0,
  },
  reducers: {
    changeCurrenCategory1: (state, action) => {
      state.currentCategory1 = action.payload;
    }
  },
  extraReducers: {
    //get products
    [getProductsAsync.pending]: (state, action) => {
      state.isLoadingProduct = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoadingProduct = false;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.isLoadingProduct = false;
      state.console.errorProduct = action.errorProduct.message;
    },
  },
});

export const { changeCurrenCategory1 } = productsSlice.actions;
export default productsSlice.reducer;
