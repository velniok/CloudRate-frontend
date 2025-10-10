import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderProfile from './HeaderProfile'
import HeaderLogo from './HeaderLogo'

export default function HeaderBlock() {

  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="container">
                <div className="header-inner">
                    <HeaderLogo />
                    <HeaderNav />
                    <HeaderProfile />
                </div>
            </div>
        </div>
    </header>
  )
}
