import React, { useState } from 'react'
import AdminArtist from './AdminArtist'
import AdminTrack from './AdminTrack'
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function AdminBlock() {

    const navigate = useNavigate();

    const hash = useLocation().hash

    const [activeMenu, setActiveMenu] = useState(null)

    useEffect(() => {
        setActiveMenu(hash)
    }, [hash])

    return (
        <section className="admin">
            <div className="admin-wrapper">
                <div className="container">
                    <div className="admin-inner">
                        <div className="admin__menu">
                            <ul className="admin__menu-list">
                                <li className={`admin__menu-item ${activeMenu === '' ? 'active' : ''}`} onClick={() => { setActiveMenu(1); navigate(`/admin`) } }>Главная</li>
                                <li className={`admin__menu-item ${activeMenu === '#artists' ? 'active' : ''}`} onClick={() => { setActiveMenu(1); navigate(`/admin?page=1#artists`) } }>Артисты</li>
                                <li className={`admin__menu-item ${activeMenu === '#tracks' ? 'active' : ''}`} onClick={() => { setActiveMenu(2); navigate(`/admin?page=1#tracks`) } }>Треки</li>
                                <li className="admin__menu-item">Пользователи</li>
                            </ul>
                            </div>
                            {
                              activeMenu === '#artists' ? <AdminArtist />
                              :
                              activeMenu === '#tracks' ? <AdminTrack /> 
                              :
                              <>Админ панель</>
                            }
                    </div>
                </div>
            </div>
        </section>
    )
}
