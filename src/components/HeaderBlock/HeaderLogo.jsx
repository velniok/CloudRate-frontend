import React from 'react'
import { Link } from 'react-router'
import logoIcon from '../../assets/icons/logo-icon.png'

export default function HeaderLogo() {
    return (
        <div className="header__logo">
            <Link className="header__logo-link" to="/">
                <img src={logoIcon} alt="" className="header__logo-img" />
                <h1 className="header__logo-text">CloudRate</h1>
            </Link>
        </div>
    )
}
