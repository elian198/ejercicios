import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../store/slices/products/productsSlice'
import aboutUsReducer from '../store/slices/aboutUs/aboutUsSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        aboutUs: aboutUsReducer
    },
});