import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, Navigate } from 'react-router'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'

export default function AuthLogin() {
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(null)

    const login = async () => {
        const data = await dispatch(fetchAuth({email, password}))

        if (data.error?.message) {
            console.log(data)
            setLoginError(`${data.payload.message}`)
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
    <section className="login">
        <div className="login-wrapper">
            <div className="container">
                <div className="login-inner">
                    <h1 className="login-title">Вход</h1>
                    <p className="login-desc">Введите данные для входа в свой аккаунт</p>
                    <p className="login-desc">Нет аккаунта? <Link to="/registration" className="login-link">Зарегистрироваться</Link></p>
                    {
                        loginError && <p className="login-error">{loginError}</p>
                    }
                    <ul className="login__auth-list">
                        <li className="login__auth-item">
                            <label htmlFor="email" className="login__auth-label">Email</label>
                            <input type="email" className="login__auth-input" required value={email} onChange={e => setEmail(e.target.value)} />
                        </li>
                        <li className="login__auth-item">
                            <label htmlFor="password" className="login__auth-label">Пароль</label>
                            <input type="password" className="login__auth-input" required value={password} onChange={e => setPassword(e.target.value)} />
                        </li>
                    </ul>
                    <button type="submit" className="login-submit btn--green" onClick={login}>Войти</button>
                </div>
            </div>
        </div>
    </section>
  )
}
