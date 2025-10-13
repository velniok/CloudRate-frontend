import React from 'react'
import { Link, useLocation } from 'react-router'

export default function HeaderNav() {

    const pathname = useLocation().pathname;

    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className={`header__nav-item ${pathname === '/' ? 'active ' : ''}`}>
                    <Link to="/" className="header__nav-link">
                        Главная
                    </Link>
                </li>
                <li className={`header__nav-item ${pathname === '/search' ? 'active ' : ''}`}>
                    <Link to="/search" className="header__nav-link">
                        Поиск
                    </Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link">
                        Новости
                    </Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link">
                        О нас
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
