import React from 'react'
import editIcon from '../../assets/icons/edit-icon.svg'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
import { Link } from 'react-router'

export default function UserProfile({ avatarUrl, name, role, id }) {

    const AuthData = useSelector(state => state.auth.data)
    const isAuth = useSelector(selectIsAuth)

    return (
        <div className="user__profile">
            {
                avatarUrl ?
                <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="user__profile-avatar" />
                : <div className="user__profile-avatar"></div>
            }
            <div className="user__profile-info">
                <div className="user__profile-info-top">
                    <span className="user__profile-nickname">{name}</span>
                    {
                        role === 'admin' ?
                        <span className="user__profile-role user__profile-role--admin">Админ</span>
                        : <span className="user__profile-role">Пользователь</span>
                    }
                </div>
                <a href="#!" className="user__profile-soundcloud">SoundCloud</a>
            </div>
            {
                isAuth &&
                id === AuthData.user._id &&
                <>
                    <Link to={`/user/${id}/edit`}>
                        <img src={editIcon} alt="" className="user__profile-edit-icon" />
                    </Link>
                </>
            }
        </div>
    )
}
