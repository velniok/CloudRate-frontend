import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { Link } from 'react-router';
import HeaderProfileInfo from './HeaderProfileInfo';

export default function HeaderProfile() {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)
    const UserStatus = useSelector((state) => state.auth.status)
    const UserData = useSelector((state) => state.auth.data)

    const [openProfile, setOpenProfile] = useState(false)

    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

    return (
        <div className="header__profile">
            {
                isAuth ?
                UserStatus === 'loaded' &&
                    <>
                        {
                            UserData.avatarUrl ? <img src={UserData.user.avatarUrl} alt="" className="header__profile-avatar" onClick={() => setOpenProfile(!openProfile)} /> : <div className="header__profile-avatar" onClick={() => setOpenProfile(!openProfile)} ></div>
                        }
                        <HeaderProfileInfo onClickLogout={onClickLogout} UserData={UserData} openProfile={openProfile} setOpenProfile={setOpenProfile} />
                    </>
                :
                <Link to={"/login"}>
                    <button className="header__profile-login">Войти</button>
                </Link>
            }
        </div>
    )
}
