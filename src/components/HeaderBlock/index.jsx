import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderProfile from './HeaderProfile'
import HeaderLogo from './HeaderLogo'
import HeaderBurger from './HeaderBurger'

export default function HeaderBlock() {

  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="container">
                <div className="header-inner">
                    <HeaderLogo />
                    <HeaderNav />
                    <div className="header-left">
                      <HeaderProfile />
                      <HeaderBurger />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
