import React from 'react'
import { Link } from 'react-router';

export default function HeaderProfileInfo({ onClickLogout, openProfile, setOpenProfile, UserData }) {
    return (
        <div className={`header__profile-info ${openProfile ? 'show' : ''}`}>
            <span className="header__profile-close" onClick={() => setOpenProfile(false)} >+</span>
            <span className="header__profile-nickname">
                {UserData.user.name}
                {
                    UserData.user.role === 'admin' &&
                    <span className="header__profile-role header__profile-role--admin">{UserData.user.role}</span>
                }
            </span>
                <div className="header__profile-inner">
                <Link to={`/user/${UserData.user._id}`}>
                    <span className="header__profile-page header__profile--action" onClick={() => setOpenProfile(false)}>Моя страница</span>
                </Link>
                {
                    UserData.user.role === 'admin' &&
                    <Link to={"/admin"}>
                        <span className="header__profile-admin header__profile--action" onClick={() => setOpenProfile(false)}>Админ-панель</span>
                    </Link>
                }
                <Link to={`/user/${UserData.user._id}/edit`}>
                    <span className="header__profile-page header__profile--action" onClick={() => setOpenProfile(false)}>Изменить профиль</span>
                </Link>
                <span className="header__profile-logout header__profile--action" onClick={() => {onClickLogout(); setOpenProfile(false)}}>Выйти из аккаунта</span>
            </div>
        </div>
    )
}
