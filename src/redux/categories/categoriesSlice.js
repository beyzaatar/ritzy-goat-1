import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryLevel1sAsync = createAsyncThunk(
  "categoryLevel1s/getCategoryLevel1sAsync",
  async () => {
    const res = await axios(
      "http://localhost:8080/api/categories/categoryLevel1/getAll"
    );
    return res.data.data;
  }
);

export const getCategoryLevel2sAsync = createAsyncThunk(
  "categoryLevel2s/getCategoryLevel2sAsync",
  async () => {
    const res = await axios(
      "http://localhost:8080/api/categories/categoryLevel2/getAll"
    );
    return res.data.data;
  }
);

export const getCategoryLevel3sAsync = createAsyncThunk(
  "categoryLevel3s/getCategoryLevel3sAsync",
  async () => {
    const res = await axios(
      "http://localhost:8080/api/categories/categoryLevel3/getAll"
    );
    return res.data.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories1: [],
    isLoading1: false,
    error1: false,
    currentCategory1:0,

    categories2: [],
    isLoading2: false,
    error2: false,
    currentCategory2:1,

    categories3: [],
    isLoading3: false,
    error3: false,


    
  },
  reducers: {
    changeHoverCategory1: (state, action) => {
      state.currentCategory1 = action.payload;
    },
    changeCurrentCategory2: (state, action) => {
      state.currentCategory2 = action.payload;
    }
  },
  extraReducers: {
    //get category1
    [getCategoryLevel1sAsync.pending]: (state, action) => {
      state.isLoading1 = true;
    },
    [getCategoryLevel1sAsync.fulfilled]: (state, action) => {
      state.categories1 = action.payload;
      state.isLoading1 = false;
    },
    [getCategoryLevel1sAsync.rejected]: (state, action) => {
      state.isLoading1 = false;
      state.console.error1 = action.error.message;
    },

    //get category2
    [getCategoryLevel2sAsync.pending]: (state, action) => {
      state.isLoading2 = true;
    },
    [getCategoryLevel2sAsync.fulfilled]: (state, action) => {
      state.categories2 = action.payload;
      state.isLoading2 = false;
    },
    [getCategoryLevel2sAsync.rejected]: (state, action) => {
      state.isLoading2 = false;
      state.console.error2 = action.error.message;
    },

    //get category3
    [getCategoryLevel3sAsync.pending]: (state, action) => {
      state.isLoading3 = true;
    },
    [getCategoryLevel3sAsync.fulfilled]: (state, action) => {
      state.categories3 = action.payload;
      state.isLoading3 = false;
    },
    [getCategoryLevel3sAsync.rejected]: (state, action) => {
      state.isLoading3 = false;
      state.console.error3= action.error.message;
    },
  },
});
export const { changeHoverCategory1 } = categoriesSlice.actions;

export default categoriesSlice.reducer;
