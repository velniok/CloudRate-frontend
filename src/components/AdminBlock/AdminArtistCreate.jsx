import React, { useRef, useState } from 'react'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
import { fetchArtistCreate } from '../../redux/slices/artistAdmin'
import addPhotoIcon from '../../assets/icons/addPhoto-icon.svg'

export default function AdminArtistCreate({ modalOpen, setModalOpen }) {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [soundCloudUrl, setSoundCloudUrl] = useState('')
    const [nameError, setNameError] = useState(null)
    const [avatarUrlError, setAvatarUrlError] = useState(null)
    const [soundCloudUrlError, setSoundCloudUrlError] = useState(null)

    const inputAvatarRef = useRef(null)

    const onChangeAvatar = async (event) => {
            try {
                const avatar = event.target.files[0]
                const formData = new FormData()
                formData.append('image', avatar)
                const { data } = await axios.post('/upload', formData)
                console.log(data)
                setAvatarUrl(data.url)
            } catch (err) {
                console.warn(err)
                alert('Ошибка при загрузке файла')
            }
        }

    const onClickArtistCreate = async () => {
        const data = await dispatch(fetchArtistCreate({ name, avatarUrl, soundCloudUrl }))
        if (data.error?.message) {
            data.payload.map(e => {
                e.path === 'name' ? setNameError(`${e.msg}`) :
                e.path === 'avatarUrl' ? setAvatarUrlError(`${e.msg}`) :
                e.path === 'soundCloudUrl' && setSoundCloudUrlError(`${e.msg}`)
            })
        }
        setName('')
        setAvatarUrl('')
        setSoundCloudUrl('')
    }
 
  return (
    <div className={`admin-artist__create ${modalOpen ? 'show' : ''}`}>
        <div className="admin-artist__create-wrapper">
            <div className="admin-artist__create-top">
                <h3 className="admin-artist__create-title title">Добавить нового артиста</h3>
                <button className="admin-artist__create-close" onClick={() => setModalOpen(false)}>Закрыть</button>
            </div>
            <form action="" className="admin-artist__create-form">
                <ul className="admin-artist__create-list">
                    <li className="admin-artist__create-item">
                        <label htmlFor="" className="admin-artist__create-label">Никнейм артиста</label>
                        <input type="text" className={`admin-artist__create-input ${nameError ? 'error' : ''}`} onClick={() => setNameError(false)} value={name} onChange={e => setName(e.target.value)} />
                        {
                            nameError && <p className="admin-artist__create-error">{nameError}</p>
                        }
                    </li>
                    <li className="admin-artist__create-item">
                        <label htmlFor="" className="admin-artist__create-label">Ссылка на SoundCloud артиста</label>
                        <input type="text" className={`admin-artist__create-input ${soundCloudUrlError ? 'error' : ''}`} value={soundCloudUrl} onClick={() => setSoundCloudUrlError(false)} onChange={e => setSoundCloudUrl(e.target.value)} />
                        {
                            soundCloudUrlError && <p className="admin-artist__create-error">{soundCloudUrlError}</p>
                        }
                    </li>
                    <li className="admin-artist__create-item">
                        <label htmlFor="" className="admin-artist__create-label">Загрузить аватарку артиста</label>
                        <button className={`admin-artist__create-btn ${avatarUrl && 'disableBorder'} ${avatarUrlError ? 'error' : ''}`} type='button' onClick={() => inputAvatarRef.current.click()}>
                            <img src={addPhotoIcon} alt="Загрузить аватарку артиста" className="admin-artist__create-btn-icon" />
                            {
                                avatarUrl && (
                                    <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="admin-artist__create-avatar" />
                                )
                            }
                        </button>
                        <input type="file" className="admin-artist__create-input" ref={inputAvatarRef} onClick={() => setAvatarUrlError(false)} onChange={onChangeAvatar} hidden />
                        {
                            avatarUrlError && <p className="admin-artist__create-error">{avatarUrlError}</p>
                        }
                    </li>
                </ul>
                <button className="admin-artist__create-submit btn--green" type='button' onClick={() => {onClickArtistCreate(); setModalOpen(false)}}>Добавить артиста</button>
            </form>
        </div>
    </div>
  )
}
