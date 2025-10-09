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
            setPassword('')
            setEmail('')
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
                    <h2 className="login-title title">Вход</h2>
                    <p className="login-desc">Введите данные для входа в свой аккаунт</p>
                    <p className="login__noreg">Нет аккаунта? <Link to="/registration" className="login__noreg-link">Зарегистрироваться</Link></p>
                    <form action="" className="login__form">
                        {
                            loginError && <span className="login__form-error">{loginError}</span>
                        }
                        <ul className="login__form-list">
                            <li className="login__form-item">
                                <input type="email" className={`login__form-input ${loginError ? 'error' : ''}`} placeholder='Email' autoComplete='on' required value={email} onChange={e => setEmail(e.target.value)} onClick={() => setLoginError(null)} />
                            </li>
                            <li className="login__form-item">
                                <input type="password" className={`login__form-input ${loginError ? 'error' : ''}`} placeholder='Введите пароль' autoComplete='on' required value={password} onChange={e => setPassword(e.target.value)} onClick={() => setLoginError(null)} />
                            </li>
                        </ul>
                        <button type="button" className="login__form-submit" onClick={login} >Войти</button>
                    </form>
                </div>                
            </div>
        </div>
    </section>
  )
}
