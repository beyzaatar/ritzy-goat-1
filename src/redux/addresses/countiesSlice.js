import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountiesAsync = createAsyncThunk(
  "counties/getCountiesAsync",
  async () => {
    const res = await axios("http://localhost:8080/api/counties/getAll");
    return res.data.data;
  }
);

export const countiesSlice = createSlice({
  name: "counties",
  initialState: {
    counties: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    //get counties
    [getCountiesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCountiesAsync.fulfilled]: (state, action) => {
      state.counties = action.payload;
      state.isLoading = false;
    },
    [getCountiesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.console.error = action.error.message;
    },
  },
});

export default countiesSlice.reducer;