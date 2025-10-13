import React, { useEffect } from 'react'
import UserBlock from '../components/UserBlock'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchGetUser } from '../redux/slices/user'
import UserSkeleton from '../components/UserBlock/UserSkeleton'

export default function UserPage() {

  const params = useParams().id
  const dispatch = useDispatch()

  const UserData = useSelector(state => state.user.data)
  const UserStatus = useSelector(state => state.user.status === 'loaded')

  useEffect(() => {
    dispatch(fetchGetUser(params))
  }, [params])

  return (
    <>
      {
        UserStatus ?
        <UserBlock key={UserData._id} id={UserData._id} name={UserData.name} avatarUrl={UserData.avatarUrl} role={UserData.role} rating={UserData.ratingTracks} />
        :
        <UserSkeleton />
      }
    </>
  )
}
