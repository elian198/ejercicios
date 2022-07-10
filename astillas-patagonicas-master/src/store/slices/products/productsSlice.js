import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get('http://localhost:80/astillas-patagonicas/getProducts.php');
    return response.data;
});

export const postProduct = createAsyncThunk('products/postProduct', async (product, { dispatch }) => {
    await axios.post('http://localhost:80/astillas-patagonicas/postProduct.php/', product);
    dispatch(getProducts());
});

export const deleteProduct = createAsyncThunk('products/deleteProducts', async (id, { dispatch }) => {
    await axios.delete(`http://localhost:80/astillas-patagonicas/deleteProduct.php?id=${id}`);
    dispatch(getProducts());
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (product, { dispatch }) => {
    await axios.post('http://localhost:80/astillas-patagonicas/updateProduct.php/', product);
    dispatch(getProducts());
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        failedGet: false,
        failedPost: false,
        failedDelete: false,
        failedUpdate: false
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.failedGet = false;
            state.failedDelete = false;
            state.failedUpdate = false;
        },
        [getProducts.rejected]: (state) => {
            state.failedGet = true;
        },
        [postProduct.rejected]: (state) => {
            state.failedPost = true;
        },
        [deleteProduct.rejected]: (state) => {
            state.failedDelete = true;
        },
        [updateProduct.rejected]: (state) => {
            state.failedUpdate = true;
        }
    }
})

// Action creators are generated for each case reducer function
export default productsSlice.reducer
