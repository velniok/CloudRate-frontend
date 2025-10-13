import React from 'react'

export default function UserProfile({ avatarUrl, name, role }) {
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
        </div>
    )
}
