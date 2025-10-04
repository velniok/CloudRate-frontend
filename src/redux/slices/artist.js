import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchArtistOne = createAsyncThunk('artist/fetchArtistOne', async (id) => {
    const { data } = await axios.get(`artist/${id}`)
    return data
})

const initialState = {
    data: null,
    status: 'loading',
}

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchArtistOne.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchArtistOne.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchArtistOne.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })
    }
})

export const artistReducer = artistSlice.reducer