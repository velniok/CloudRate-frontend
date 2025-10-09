import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { selectIsAuth, logout } from '../redux/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import logoIcon from '../assets/icons/logo-icon.png'

export default function Header() {
    const location = useLocation().pathname;
    
    const isAuth = useSelector(selectIsAuth)
    const UserStatus = useSelector((state) => state.auth.status)
    const UserData = useSelector((state) => state.auth.data)
    const dispatch = useDispatch()

    const [openProfile, setOpenProfile] = useState(false)

    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="container">
                <div className="header-inner">
                    <div className="header__logo">
                        <Link className="header__logo-link" to="/">
                            <img src={logoIcon} alt="" className="header__logo-img" />
                            <h1 className="header__logo-text">CloudRate</h1>
                        </Link>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item active">
                                <Link className="header__nav-link">
                                    Главная
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link className="header__nav-link">
                                    Новости
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link className="header__nav-link">
                                    Артисты
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link className="header__nav-link">
                                    О нас
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__profile">
                        {
                            isAuth ?
                            UserStatus === 'loaded' &&
                                <>
                                    {
                                        UserData.avatarUrl ? <img src={UserData.user.avatarUrl} alt="" className="header__profile-avatar" onClick={() => setOpenProfile(!openProfile)} /> : <div className="header__profile-avatar" onClick={() => setOpenProfile(!openProfile)} ></div>
                                    }
                                    <div className={`header__profile-info ${openProfile ? 'show' : ''}`}>
                                        <span className="header__profile-close" onClick={() => setOpenProfile(false)} >+</span>
                                        <span className="header__profile-nickname">
                                            {UserData.user.nickname}
                                            {
                                                UserData.user.role === 'admin' &&
                                                <span className="header__profile-role header__profile-role--admin">{UserData.user.role}</span>
                                            }
                                        </span>
                                            <div className="header__profile-inner">
                                            <Link to={`/user/${UserData.user._id}`}>
                                                <span className="header__profile-page header__profile--action" onClick={() => setOpenProfile(false)} >Моя страница</span>
                                            </Link>
                                            {
                                                UserData.user.role === 'admin' &&
                                                <Link to={"/admin"}>
                                                    <span className="header__profile-admin header__profile--action" onClick={() => setOpenProfile(false)}>Админ-панель</span>
                                                </Link>
                                            }
                                            <span className="header__profile-logout header__profile--action" onClick={() => {onClickLogout(); setOpenProfile(false)}}>Выйти из аккаунта</span>
                                        </div>
                                    </div>
                                </>
                            :
                            <Link to={"/login"}>
                                <button className="header__profile-login">Войти</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
