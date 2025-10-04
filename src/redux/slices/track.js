import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchTrackOne = createAsyncThunk('track/fetchTrackOne', async (id) => {
    const { data } = await axios.get(`track/${id}`)
    return data
})

export const fetchTopRatingTracks = createAsyncThunk('track/fetchTopRatingTracks', async () => {
    const { data } = await axios.get('top-rating-tracks')
    return data
})

const initialState = {
    data: null,
    status: 'loading',
    topRatingTracks: null,
}

const trackSlice = createSlice({
    name: "track",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrackOne.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchTrackOne.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchTrackOne.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })

        .addCase(fetchTopRatingTracks.pending, (state) => {
            state.status = 'loading',
            state.topRatingTracks = null
        })
        .addCase(fetchTopRatingTracks.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.topRatingTracks = action.payload
        })
        .addCase(fetchTopRatingTracks.rejected, (state) => {
            state.status = 'error',
            state.topRatingTracks = null
        })
    }
})

export const trackReducer = trackSlice.reducer