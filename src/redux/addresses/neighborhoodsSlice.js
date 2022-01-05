import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNeighborhoodsAsync = createAsyncThunk(
  "neighborhoods/getNeighborhoodsAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/neighborhoods/getAll");
    return res.data.data;
  }
);

export const neighborhoodsSlice = createSlice({
  name: "neighborhoods",
  initialState: {
    neighborhoods: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    //get cities
    [getNeighborhoodsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNeighborhoodsAsync.fulfilled]: (state, action) => {
      state.neighborhoods = action.payload;
      state.isLoading = false;
    },
    [getNeighborhoodsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.console.error = action.error.message;
    },
  },
});

export default neighborhoodsSlice.reducer;