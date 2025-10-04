import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://cloudrate-backend-production.up.railway.app",
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance