import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/login', params)
        return data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const fetchGetUser = createAsyncThunk('auth/fetchGetUser', async (id) => {
    const { data } = await axios.get(`/auth/${id}`)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/register', params)
        return data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me')
    return data
})

const initialState = {
    data: null,
    status: 'loading',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
            state.status = 'loading'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAuth.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchAuth.rejected, (state, action) => {
            state.status = 'error',
            state.data = action.payload
        })

        .addCase(fetchRegister.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchRegister.rejected, (state, action) => {
            state.status = 'error',
            state.data = action.payload
        })

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
        
        .addCase(fetchAuthMe.pending, (state) => {
            state.status = 'loading',
            state.data = null
        })
        .addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.status = 'loaded',
            state.data = action.payload
        })
        .addCase(fetchAuthMe.rejected, (state) => {
            state.status = 'error',
            state.data = null
        })
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.status === "loaded")

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions