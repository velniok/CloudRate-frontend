import React, { useEffect } from 'react'
import UserBlock from '../components/UserBlock'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchGetUser } from '../redux/slices/auth'

export default function UserPage() {

  const params = Number(useParams().id)
  const dispatch = useDispatch()

  const UserData = useSelector(state => state.auth.data)
  const UserStatus = useSelector(state => state.auth.status === 'loaded')

  useEffect(() => {
    dispatch(fetchGetUser(params))
  }, [])

  return (
    <>
      {
        UserStatus && <UserBlock key={UserData.user.id} nickname={UserData.user.nickname} />
      }
    </>
  )
}
