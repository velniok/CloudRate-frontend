import React from 'react'
import { Link, Navigate } from 'react-router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth'

export default function AuthReg() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [nicknameError, setNicknameError] = useState(null)

    const reg = async () => {
        if (password !== confirmPassword) {
            return false
        }
        const data = await dispatch(fetchRegister({nickname, email, password}))
        if (data.error?.message) {
            data.payload.map(e => {
                e.path === 'email' ? setEmailError(`${e.msg}`) :
                e.path === 'password' ? setPasswordError(`${e.msg}`) :
                e.path === 'nickname' && setNicknameError(`${e.msg}`)
            })
            return false
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth) {
        return <Navigate to='/' />
    }

  return (
    <section className="reg">
        <div className="reg-wrapper">
            <div className="container">
                <div className="reg-inner">
                    <h1 className="reg-title">Создать аккаунт</h1>
                    <p className="reg-desc">Введите данные для регистрации аккаунта</p>
                    <p className="reg-desc">Уже есть аккаунт? <Link to="/login" className="login-link">Войти</Link></p>
                    <form action="" className="reg__auth">
                        <ul className="reg__auth-list">
                            <li className="reg__auth-item">
                                <label className="reg__auth-label">Email</label>
                                <input type="email" className="reg__auth-input" value={email} onChange={e => setEmail(e.target.value)} required />
                                {
                                    emailError && <p className="reg__auth-error">{emailError}</p>
                                }
                            </li>
                            <li className="reg__auth-item">
                                <label className="reg__auth-label">Никнейм</label>
                                <input type="text" className="reg__auth-input" value={nickname} onChange={e => setNickname(e.target.value)} required />
                                {
                                    nicknameError && <p className="reg__auth-error">{nicknameError}</p>
                                }
                            </li>
                            <li className="reg__auth-item">
                                <label className="reg__auth-label">Пароль</label>
                                <input type="password" className="reg__auth-input" value={password} onChange={e => setPassword(e.target.value)} required />
                                {
                                    passwordError && <p className="reg__auth-error">{passwordError}</p>
                                }
                            </li>
                            <li className="reg__auth-item">
                                <label className="reg__auth-label">Подтвердите пароль</label>
                                <input type="password" className="reg__auth-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                                {
                                    password !== confirmPassword && <p className="reg__auth-error">Пароли не совпадают</p>
                                }
                            </li>
                        </ul>
                        
                    </form>
                    <button type="submit" className="reg-submit btn--green" onClick={reg}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    </section>
  )
}
