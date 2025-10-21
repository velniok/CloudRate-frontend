import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchTrackCreate = createAsyncThunk('track/fetchTrackCreate', async (params) => {
    const { data } = await axios.post('/track', params)
    return data
})

export const fetchTrackEdit = createAsyncThunk('artist/fetchTrackEdit', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/track/${params.id}`, params.otherParams)
        return data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const fetchTrackAll = createAsyncThunk('track/fetchTrackAll', async (params) => {
    const { data } = await axios.get(`/track${params.page}`)
    return data
})

export const fetchTrackRemove = createAsyncThunk('track/fetchTrackRemove', async (id) => {
    axios.delete(`track/${id}`)
})

const initialState = {
    data: null,
    status: 'loading',
}

const trackAdminSlice = createSlice({
    name: "trackAdmin",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrackCreate.pending, (state) => {
            state.status = 'loading',
            state.data = state.data
        })
        .addCase(fetchTrackCreate.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = [...state.data, action.payload.track]
        })
        .addCase(fetchTrackCreate.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })

        .addCase(fetchTrackEdit.pending, (state) => {
            state.status = 'loading',
            state.data = state.data
        })
        .addCase(fetchTrackEdit.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = state.data.map(e => e._id === action.payload._id ? e = action.payload : e = e)
        })
        .addCase(fetchTrackEdit.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })

        .addCase(fetchTrackAll.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchTrackAll.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchTrackAll.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })

        .addCase(fetchTrackRemove.pending, (state, action) => {
            state.data = state.data.filter(obj => obj._id !== action.meta.arg)
        })
    }
})

export const trackAdminReducer = trackAdminSlice.reducer