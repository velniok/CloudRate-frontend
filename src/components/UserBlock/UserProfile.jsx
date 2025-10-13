import React, { useState } from 'react'
import editIcon from '../../assets/icons/edit-icon.svg'
import UserProfileEdit from './UserProfileEdit'
import { useSelector } from 'react-redux'

export default function UserProfile({ avatarUrl, name, role, id }) {

    const AuthData = useSelector(state => state.auth.data)

    const [editShow, setEditShow] = useState(false)

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
                id === AuthData.user._id &&
                <>
                    <img src={editIcon} alt="" className="user__profile-edit-icon" onClick={() => setEditShow(true)} />
                    <div className={`user__profile-edit ${editShow ? 'show' : ''}`}>
                        <UserProfileEdit name={name} avatarUrl={avatarUrl} role={role} setEditShow={setEditShow} id={id} />
                    </div>
                </>
            }
        </div>
    )
}
