import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCitiesAsync = createAsyncThunk(
  "cities/getCitiesAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/cities/getAll");
    return res.data.data;
  }
);

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    //get cities
    [getCitiesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCitiesAsync.fulfilled]: (state, action) => {
      state.cities = action.payload;
      state.isLoading = false;
    },
    [getCitiesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.console.error = action.error.message;
    },
  },
});

export default citiesSlice.reducer;