import React from 'react'
import homeIcon from '../assets/icons/home-icon.svg'
import searchIcon from '../assets/icons/search-icon.svg'
import newsIcon from '../assets/icons/news-icon.svg'
import { Link, useLocation } from 'react-router';

export default function MoblieMenu() {

    const pathname = useLocation().pathname;

    return (
        <section className="mobile-menu">
            <div className="mobile-menu-wrapper">
                <div className="container">
                    <div className="mobile-menu-inner">
                        <nav className="mobile-menu__nav">
                            <ul className="mobile-menu__nav-list">
                                <li className={`mobile-menu__nav-item ${pathname === '/' ? 'active ' : ''}`}>
                                    <Link to={'/'} className="mobile-menu__nav-link">
                                        <img src={homeIcon} alt="" className="mobile-menu__nav-icon" />
                                        <span className="mobile-menu__nav-text">Главная</span>
                                    </Link>
                                </li>
                                <li className={`mobile-menu__nav-item ${pathname === '/search' ? 'active ' : ''}`}>
                                    <Link to={'/search'} className="mobile-menu__nav-link">
                                        <img src={searchIcon} alt="" className="mobile-menu__nav-icon" />
                                        <span className="mobile-menu__nav-text">Поиск</span>
                                    </Link>
                                </li>
                                <li className="mobile-menu__nav-item">
                                    <Link to={'/'} className="mobile-menu__nav-link">
                                        <img src={newsIcon} alt="" className="mobile-menu__nav-icon" />
                                        <span className="mobile-menu__nav-text">Новости</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
