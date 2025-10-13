import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (params) => {
    const { data } = await axios.post(`search/${params.filter}`, params)
    return data
})

const initialState = {
    data: null,
    status: 'loading',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchSearch.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchSearch.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })
    }
})

export const searchReducer = searchSlice.reducer