import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { artistAdminReducer } from './slices/artistAdmin'
import { trackAdminReducer } from './slices/trackAdmin'
import { artistReducer } from './slices/artist'
import { trackReducer } from './slices/track'
import { userReducer } from './slices/user'
import { searchReducer } from './slices/search'

const store = configureStore({
    reducer: {
        auth: authReducer,
        artistAdmin: artistAdminReducer,
        artist: artistReducer,
        trackAdmin: trackAdminReducer,
        track: trackReducer,
        user: userReducer,
        search: searchReducer,
    }
})

export default store