import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../axios'

export const fetchArtistCreate = createAsyncThunk('artist/fetchArtistCreate', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/artist', params)
        return data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const fetchArtistEdit = createAsyncThunk('artist/fetchArtistEdit', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/artist/${params.id}`, params.otherParams)
        return data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const fetchArtistAll = createAsyncThunk('artist/fetchArtistAll', async () => {
    const { data } = await axios.get('/artist')
    return data
})

export const fetchArtistRemove = createAsyncThunk('artist/fetchArtistRemove', async (id) => {
    axios.delete(`/artist/${id}`)
})


const initialState = {
    data: null,
    status: 'loading',
    error: null,
}

const artistAdminSlice = createSlice({
    name: 'artistAdmin',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchArtistCreate.pending, (state) => {
            state.status = 'loading',
            state.data = state.data
        })
        .addCase(fetchArtistCreate.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = [...state.data, action.payload.artist]
        })
        .addCase(fetchArtistCreate.rejected, (state, action) => {
            state.status = 'error',
            state.data = state.data,
            state.error = action.payload
        })

        .addCase(fetchArtistEdit.pending, (state) => {
            state.status = 'loading',
            state.data = state.data
        })
        .addCase(fetchArtistEdit.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = state.data.map(e => e._id === action.payload._id ? e = action.payload : e = e)
        })
        .addCase(fetchArtistEdit.rejected, (state, action) => {
            state.status = 'error',
            state.data = state.data,
            state.error = action.payload
        })

        .addCase(fetchArtistAll.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchArtistAll.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchArtistAll.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })

        .addCase(fetchArtistRemove.pending, (state, action) => {
            state.data = state.data.filter(obj => obj._id !== action.meta.arg)
        })
    }
})

export const artistAdminReducer = artistAdminSlice.reducer