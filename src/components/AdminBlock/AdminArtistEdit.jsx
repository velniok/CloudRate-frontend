import React, { useRef, useState } from 'react'
import axios from '../../axios'
import addPhotoIcon from '../../assets/icons/addPhoto-icon.svg'
import { fetchArtistEdit } from '../../redux/slices/artistAdmin'
import { useDispatch } from 'react-redux'

export default function AdminArtistEdit({ openEdit, setOpenEdit, name, avatarUrl, soundCloudUrl, id }) {

    const dispatch = useDispatch()

    const [newName, setNewName] = useState(`${name}`)
    const [newAvatarUrl, setNewAvatarUrl] = useState(`${avatarUrl}`)
    const [newSoundCloudUrl, setNewSoundCloudUrl] = useState(`${soundCloudUrl}`)

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

        const onClickArtistEdit = async () => {
            dispatch(fetchArtistEdit({ id: id,
                otherParams: {
                name: newName,
                avatarUrl: newAvatarUrl,
                soundCloudUrl: newSoundCloudUrl,
                }
            }))
        }

  return (
    <div className={`admin-artist__edit ${openEdit && 'show'}`} onClick={(e) => {
        if (e.target.className === 'admin-artist__edit show') {
            setOpenEdit(false)
        }
    }}>
        <div className="admin-artist__edit-wrapper">
            <div className="admin-artist__edit-top">
                <h3 className="admin-artist__edit-title">Изменить артиста:<span>{name}</span></h3>
                <button className="admin-artist__edit-close btn--red" onClick={() => setOpenEdit(false)}>Закрыть</button>
            </div>
            <form action="" className="admin-artist__edit-form">
                <ul className="admin-artist__edit-list">
                    <li className="admin-artist__edit-item">
                        <label htmlFor="" className="admin-artist__edit-label">Изменить никнейм артиста</label>
                        <input type="text" className="admin-artist__edit-input" value={newName} onChange={e => setNewName(e.target.value)} />
                    </li>
                    <li className="admin-artist__edit-item">
                        <label htmlFor="" className="admin-artist__edit-label">Изменить ссылку на SoundCloud артиста</label>
                        <input type="text" className="admin-artist__edit-input" value={newSoundCloudUrl} onChange={e => setNewSoundCloudUrl(e.target.value)} />
                    </li>
                    <li className="admin-artist__edit-item">
                        <label htmlFor="" className="admin-artist__edit-label">Изменить аватарку артиста</label>
                        <button className={`admin-artist__edit-btn ${avatarUrl && 'disableBorder'}`} type='button' onClick={() => inputAvatarRef.current.click()}>
                            <img src={addPhotoIcon} alt="Загрузить аватарку артиста" className="admin-artist__edit-btn-icon" />
                            {
                                avatarUrl && (
                                    <img src={`http://localhost:5000${newAvatarUrl}`} alt="" className="admin-artist__edit-avatar" />
                                )
                            }
                        </button>
                        <input type="file" className="admin-artist__edit-input" ref={inputAvatarRef} onChange={onChangeAvatar} hidden />
                    </li>
                </ul>
                <button className="admin-artist__edit-submit btn--green" type='button' onClick={() => {onClickArtistEdit(); setOpenEdit(false)}}>Изменить артиста</button>
            </form>
        </div>
    </div>
  )
}
