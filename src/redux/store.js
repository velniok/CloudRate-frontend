import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { artistAdminReducer } from './slices/artistAdmin'
import { trackAdminReducer } from './slices/trackAdmin'
import { artistReducer } from './slices/artist'
import { trackReducer } from './slices/track'
import { userReducer } from './slices/user'

const store = configureStore({
    reducer: {
        auth: authReducer,
        artistAdmin: artistAdminReducer,
        artist: artistReducer,
        trackAdmin: trackAdminReducer,
        track: trackReducer,
        user: userReducer,
    }
})

export default store