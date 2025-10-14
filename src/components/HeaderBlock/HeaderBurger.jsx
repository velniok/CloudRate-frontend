import React, { useState } from 'react'
import burgerIcon from '../../assets/icons/burger-menu-icon.svg'
import closeIcon from '../../assets/icons/close-icon.svg'
import logoIcon from '../../assets/icons/logo-icon.png'
import { Link } from 'react-router'

export default function HeaderBurger() {

    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <div className="header__burger">
            <img src={burgerIcon} alt="" className="header__burger-open" onClick={() => setBurgerOpen(true)} />
            <div className={`header__burger-info ${burgerOpen ? 'open' : ''}`}>
                <img src={closeIcon} alt="" className="header__burger-close" onClick={() => setBurgerOpen(false)} />
                <div className="header__burger-logo">
                    <Link className="header__burger-logo-link" to="/">
                        <img src={logoIcon} alt="" className="header__burger-logo-img" />
                        <h1 className="header__burger-logo-text">CloudRate</h1>
                    </Link>
                </div>
                <nav className="header__burger-nav">
                    <ul className="header__burger-list">
                        <li className="header__burger-item" onClick={() => setBurgerOpen(false)}>
                            <Link to={'/'}>
                                Главная
                            </Link>
                        </li>
                        <li className="header__burger-item" onClick={() => setBurgerOpen(false)}>
                            <Link to={'/search'}>
                                Поиск
                            </Link>
                        </li>
                        <li className="header__burger-item" onClick={() => setBurgerOpen(false)}>
                            Новости
                        </li>
                        <li className="header__burger-item" onClick={() => setBurgerOpen(false)}>
                            О нас
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
