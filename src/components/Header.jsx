import React from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { selectIsAuth, logout } from '../redux/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import logoIcon from '../assets/icons/logo-icon.png'

export default function Header() {
    const location = useLocation().pathname;
    
    const isAuth = useSelector(selectIsAuth)
    const userData = useSelector((state) => state.auth.data)
    const dispatch = useDispatch()

    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="container">
                <div className="header__top">
                    <div className="header__logo">
                        <Link to="/" className="header__logo-link">
                            <img src={logoIcon} alt="" className="header__logo-img" />
                            <h1 className="header__logo-text">CloudRate</h1>
                        </Link>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className={`header__nav-item header__nav-item--${location === '/' ? 'active' : '' }`}><Link to="/" className="header__nav-link">Главная</Link></li>
                            <li className="header__nav-item"><a href="#!" className="header__nav-link">Новости</a></li>
                            <li className={`header__nav-item header__nav-item--${location === '/artist' ? 'active' : '' }`}><Link to="/artist" className='header__nav-link'>Артисты</Link></li>
                            <li className="header__nav-item"><a href="#!" className="header__nav-link">О нас</a></li>
                        </ul>
                    </nav>
                    <div className="header__btns">
                        {
                            isAuth ?
                            <>
                                <Link to="/user">
                                    <button className="header__btns-auth btn--blue">Профиль</button>
                                </Link>
                                {
                                    userData?.user.role === 'admin' &&
                                    <Link to="/admin">
                                        <button className="header__btns-admin btn--red">Админ</button>
                                    </Link>
                                }
                                <button className="header__btns-auth btn--red" onClick={onClickLogout}>Выйти</button>
                                
                            </>
                            :
                            <Link to="/login">
                                <button className="header__btns-auth btn--blue">Войти</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
