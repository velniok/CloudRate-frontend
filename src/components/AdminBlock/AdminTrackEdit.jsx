import React, { useRef, useState } from 'react'
import axios from '../../axios'
import addPhotoIcon from '../../assets/icons/addPhoto-icon.svg'
import { useDispatch } from 'react-redux'
import { fetchTrackEdit } from '../../redux/slices/trackAdmin'

export default function AdminArtistEdit({ openEdit, setOpenEdit, name, avatarUrl, id }) {

    const dispatch = useDispatch()

    const [newName, setNewName] = useState(`${name}`)
    const [newAvatarUrl, setNewAvatarUrl] = useState(`${avatarUrl}`)

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

        const onClickTrackEdit = async () => {
            dispatch(fetchTrackEdit({ id: id,
                otherParams: {
                name: newName,
                avatarUrl: newAvatarUrl,
                }
            }))
        }

  return (
    <div className={`admin-track__edit ${openEdit && 'show'}`}>
        <div className="admin-track__edit-wrapper">
            <div className="admin-track__edit-top">
                <h3 className="admin-track__edit-title title">Изменить трек:<span className="admin-track__edit-title-nickname">{name}</span></h3>
                <button className="admin-track__edit-close btn--red" onClick={() => setOpenEdit(false)}>Закрыть</button>
            </div>
            <form action="" className="admin-track__edit-form">
                <ul className="admin-track__edit-list">
                    <li className="admin-track__edit-item">
                        <label htmlFor="" className="admin-track__edit-label">Изменить название трека</label>
                        <input type="text" className="admin-track__edit-input" value={newName} onChange={e => setNewName(e.target.value)} />
                    </li>
                    <li className="admin-track__edit-item">
                        <label htmlFor="" className="admin-track__edit-label">Изменить обложку трека</label>
                        <button className={`admin-track__edit-btn ${avatarUrl && 'disableBorder'}`} type='button' onClick={() => inputAvatarRef.current.click()}>
                            <img src={addPhotoIcon} alt="Загрузить аватарку артиста" className="admin-track__edit-btn-icon" />
                            {
                                avatarUrl && (
                                    <img src={`${import.meta.env.VITE_API_URL}${newAvatarUrl}`} alt="" className="admin-track__edit-avatar" />
                                )
                            }
                        </button>
                        <input type="file" className="admin-track__edit-input" ref={inputAvatarRef} onChange={onChangeAvatar} hidden />
                    </li>
                </ul>
                <button className="admin-track__edit-submit btn--green" type='submit' onClick={onClickTrackEdit}>Изменить трек</button>
            </form>
        </div>
    </div>
  )
}