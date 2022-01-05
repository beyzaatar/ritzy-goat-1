import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice";
import categoryReducer from "./categories/categoriesSlice";
import filterReducer from "./filters/filtersSlice";
import productImagesReducer from "./productImages/productImagesSlice";
import addressReducer from "./addresses/addressSlice"
import cityReducer from "./addresses/citiesSlice"
import countyReducer from "./addresses/countiesSlice"
import neighborhoodReducer from "./addresses/neighborhoodsSlice"
import addressTypeReducer from "./addresses/addressTypesSlice"

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    productImages: productImagesReducer,
    filters: filterReducer,

    //address
    addresses:addressReducer,
    cities:cityReducer,
    counties:countyReducer,
    neighborhoods:neighborhoodReducer,
    addressTypes:addressTypeReducer
  },
});
