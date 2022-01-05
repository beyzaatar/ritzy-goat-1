import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAddressTypesAsync = createAsyncThunk(
  "addressTypes/getAddressTypesAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/addressTypes/getAll");
    return res.data.data;
  }
);

export const addressTypesSlice = createSlice({
  name: "addressTypes",
  initialState: {
    addressTypes: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    //get cities
    [getAddressTypesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAddressTypesAsync.fulfilled]: (state, action) => {
      state.addressTypes = action.payload;
      state.isLoading = false;
    },
    [getAddressTypesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.console.error = action.error.message;
    },
  },
});

export default addressTypesSlice.reducer;