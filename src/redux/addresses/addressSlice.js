import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAddressesAsync = createAsyncThunk(
  "addresses/getAddressesAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/addresses/getAll");
    return res.data.data;
  }
);

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    //get addresses
    [getAddressesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAddressesAsync.fulfilled]: (state, action) => {
      state.addresses = action.payload;
      state.isLoading = false;
    },
    [getAddressesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.console.error = action.error.message;
    },
  },
});

export default addressesSlice.reducer;
