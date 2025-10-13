import React, { useRef, useState } from 'react'
import editAvatarIcon from '../../assets/icons/edit-avatar-icon.svg'
import axios from '../../axios'

export default function UserProfileEdit({ avatarUrl, name, role, setEditShow, id }) {

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
            avatarUrl: newAvatarUrl,
        })
        window.location.reload()
    }    

    return (
        <div className="user__profile user__profile--edit">
            {
                avatarUrl ?
                <> 
                <div className="user__profile-avatar user__profile-avatar--edit" onClick={() => inputAvatarRef.current.click()}>
                    <img src={editAvatarIcon} alt="" className="user__profile-edit-avatar-icon" />
                    <img src={`${import.meta.env.VITE_API_URL}${newAvatarUrl}`} alt="" className="" />
                </div>
                </>
                : <div className="user__profile-avatar user__profile-avatar--edit" onClick={() => inputAvatarRef.current.click()}>
                    <img src={editAvatarIcon} alt="" className="user__profile-edit-avatar-icon" />
                    <img src={`${import.meta.env.VITE_API_URL}${newAvatarUrl}`} alt="" className="" />
                </div>
            }
            <input type="file" className="user__profile-edit-input" hidden ref={inputAvatarRef} onChange={onChangeAvatar} />
            <div className="user__profile-info">
                <div className="user__profile-info-top">
                    <span className="user__profile-nickname user__profile-nickname--edit">{name}</span>
                    {
                        role === 'admin' ?
                        <span className="user__profile-role user__profile-role--admin">Админ</span>
                        : <span className="user__profile-role">Пользователь</span>
                    }
                </div>
                <a href="#!" className="user__profile-soundcloud">SoundCloud</a>
            </div>
            <button className="user__profile-edit-close" onClick={() => setEditShow(false)}>Отмена</button>
            <button className="user__profile-edit-submit" onClick={onClickSubmit}>Сохранить</button>
        </div>
    )
}
