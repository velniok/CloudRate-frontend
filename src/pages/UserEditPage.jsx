import React, { useEffect } from 'react'
import UserEditBlock from '../components/UserEditBlock'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router'
import { fetchGetUser } from '../redux/slices/user'

export default function UserEditPage() {

    const params = useParams().id
    const dispatch = useDispatch()

    const UserData = useSelector(state => state.user.data)
    const AuthData = useSelector(state => state.auth.data)
    const UserStatus = useSelector(state => state.user.status === 'loaded')

    useEffect(() => {
        dispatch(fetchGetUser(params))
    }, [params])

    return (
        <>
            {
            UserStatus ?
                params === AuthData.user._id ?
                <UserEditBlock name={UserData.name} avatarUrl={UserData.avatarUrl} id={UserData._id} />
                : <>Нет доступа</>
            : <>Загрузка</>
            }
        </>
    )
}
