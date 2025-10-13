import React, { useEffect } from 'react'
import './scss/index.scss'
import HeaderBlock from './components/HeaderBlock/index'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ArtistProfilePage from './pages/ArtistProfilePage'
import TrackPage from './pages/TrackPage'
import AuthReg from './components/AuthBlock/AuthReg'
import AuthLogin from './components/AuthBlock/AuthLogin'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import SearchPage from './pages/SearchPage'

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchAuthMe())
    }, [])

    return (
        <>
            <HeaderBlock />
            <div className="main">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/artist/:id' element={<ArtistProfilePage />} />
                <Route path='/track/:id' element={<TrackPage />} />
                <Route path='/registration' element={<AuthReg />} />
                <Route path='/login' element={<AuthLogin />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/user/:id' element={<UserPage />} />
                <Route path='/search' element={<SearchPage />} />
            </Routes>
            </div>
            <footer className="footer"></footer>
        </>
    )
}
