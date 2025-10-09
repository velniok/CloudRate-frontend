import React, { useEffect } from 'react'
import './scss/index.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ArtistsPage from './pages/ArtistsPage'
import ArtistProfilePage from './pages/ArtistProfilePage'
import TrackPage from './pages/TrackPage'
import AuthReg from './components/AuthBlock/AuthReg'
import AuthLogin from './components/AuthBlock/AuthLogin'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <>
      <Header />
      <div className="main">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/artist/' element={<ArtistsPage />} />
        <Route path='/artist/:id' element={<ArtistProfilePage />} />
        <Route path='/track/:id' element={<TrackPage />} />
        <Route path='/registration' element={<AuthReg />} />
        <Route path='/login' element={<AuthLogin />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/user/:id' element={<UserPage />} />
      </Routes>
      </div>
      <footer className="footer"></footer>
    </>
  )
}
