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
                    <h2 className="reg-title title">Создать аккаунт</h2>
                    <p className="reg-desc">Введите данные для регистрации аккаунта</p>
                    <p className="reg__noreg">Уже есть аккаунт? <Link to="/login" className="reg__noreg-link">Войти</Link></p>
                    <form action="" className="reg__form">
                        <ul className="reg__form-list">
                            <li className="reg__form-item">
                                {
                                    emailError && <span className="reg__form-error">{emailError}</span>
                                }
                                <input type="email" className={`reg__form-input ${emailError ? 'error' : ''}`} placeholder='Email' autoComplete='on' required value={email} onChange={e => setEmail(e.target.value)} />
                            </li>
                            <li className="reg__form-item">
                                {
                                    nicknameError && <span className="reg__form-error">{nicknameError}</span>
                                }
                                <input type="text" className={`reg__form-input ${nicknameError ? 'error' : ''}`} placeholder='Никнейм' required value={nickname} onChange={e => setNickname(e.target.value)} />
                            </li>
                            <li className="reg__form-item">
                                {
                                    passwordError && <span className="reg__form-error">{passwordError}</span>
                                }
                                <input type="password" className={`reg__form-input ${passwordError ? 'error' : ''}`} placeholder='Пароль' autoComplete='on' required value={password} onChange={e => setPassword(e.target.value)} />
                            </li>
                            <li className="reg__form-item">
                                {
                                    password !== confirmPassword && <span className="reg__form-error">Пароли не совпадают</span>
                                }
                                <input type="password" className={`reg__form-input ${password !== confirmPassword ? 'error' : ''}`} placeholder='Повторите пароль' autoComplete='on' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            </li>
                        </ul>
                        <button type="button" className="reg__form-submit" onClick={reg}>Создать аккаунт</button>
                    </form>
                </div>                
            </div>
        </div>
    </section>
  )
}
