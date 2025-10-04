import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import AdminBlock from '../components/AdminBlock'

export default function AdminPage() {

    const userData = useSelector((state) => state.auth.data)

    if (userData?.user.role !== 'admin') {
        return <Navigate to='/' />
    }

  return (
    <AdminBlock />
  )
}
