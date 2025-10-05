import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchGetUser = createAsyncThunk('user/fetchGetUser', async (id) => {
    const { data } = await axios.get(`/user/${id}`)
    return data
})

const initialState = {
    data: null,
    status: 'loading',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetUser.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchGetUser.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchGetUser.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })
    }
})

export const userReducer = userSlice.reducer