import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import AdminBlock from '../components/AdminBlock'

export default function AdminPage() {

    const userData = useSelector((state) => state.auth.data)

  return (
    userData?.user.role === 'admin' &&
    <AdminBlock />
  )
}
