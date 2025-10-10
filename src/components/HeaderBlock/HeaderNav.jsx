import React from 'react'
import { Link } from 'react-router'


export default function HeaderNav() {
    return (
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
    )
}
