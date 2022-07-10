import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAboutUsData = createAsyncThunk('aboutUs/getAboutUsData', async () => {
    const response = await axios.get('http://localhost:80/astillas-patagonicas/getAboutUsData.php/');
    return response.data[0].aboutUsDescription;
});

export const updateAboutUsData = createAsyncThunk('aboutUs/updateAboutUsData', async (data, { dispatch }) => {
    axios.post('http://localhost:80/astillas-patagonicas/updateAboutUsData.php/', data);
    dispatch(getAboutUsData());
});

export const aboutUsSlice = createSlice({
    name: 'aboutUs',
    initialState: {
        images: [],
        aboutUs: null,
        isLoading: false,
        failedGet: false,
        failedPost: false
    },
    extraReducers: {
        [getAboutUsData.pending]: (state) => {
            state.isLoading = true;
        },
        [getAboutUsData.fulfilled]: (state, action) => {
            state.aboutUs = action.payload;
            state.isLoading = false;
            state.failedGet = false;
            state.failedPost = false;
        },
        [getAboutUsData.rejected]: (state) => {
            state.failedGet = true;
        },
        [updateAboutUsData.rejected]: (state) => {
            state.failedPost = true;
        }
    }
})

// Action creators are generated for each case reducer function
export default aboutUsSlice.reducer