import React, { useRef, useState } from 'react'
import axios from '../../axios'

export default function UserEditBlock({ name, avatarUrl, id }) {

    const [newName, setNewName] = useState(name)
    const [newAvatarUrl, setNewAvatarUrl] = useState(avatarUrl)

    const inputAvatarRef = useRef(null)

    const onChangeAvatar = async (event) => {
        try {
            const avatar = event.target.files[0]
            const formData = new FormData()
            formData.append('image', avatar)
            const { data } = await axios.post('/upload', formData)
            setNewAvatarUrl(data.url)
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке файла')
        }
    }

    const onClickSubmit = async () => {
        await axios.patch(`/user/${id}`, {
            name: newName,
            avatarUrl: newAvatarUrl,
        })
        location.reload()
    }

    return (
        <section className="user-edit">
            <div className="user-edit-wrapper">
                <div className="container">
                    <div className="user-edit-inner">
                        <form action="" className="user-edit__form">
                            <ul className="user-edit__form-list">
                                <li className="user-edit__form-item">
                                    <label htmlFor="" className="user-edit__form-label">Изменить имя</label>
                                    <input type="text" className="user-edit__form-input" value={newName} onChange={e => setNewName(e.target.value)} />
                                </li>
                                <li className="user-edit__form-item">
                                    <label htmlFor="" className="user-edit__form-label">Изменить аватар</label>
                                        <button className="user-edit__form-btn" type='button' onClick={() => inputAvatarRef.current.click()}>
                                            {
                                                newAvatarUrl
                                                ? <img src={`${import.meta.env.VITE_API_URL}${newAvatarUrl}`} alt="" className="user-edit__form-avatar" />
                                                : <div className="user-edit__form-avatar"></div>
                                            }
                                        </button>
                                    <input type="file" className="user-edit__form-input" ref={inputAvatarRef} onChange={onChangeAvatar} hidden />
                                </li>
                            </ul>
                        </form>
                        <button className="user-edit-submit" onClick={onClickSubmit}>Изменить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
