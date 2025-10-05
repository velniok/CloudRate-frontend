import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrackCreate } from '../../redux/slices/trackAdmin'
import axios from '../../axios'
import addPhotoIcon from '../../assets/icons/addPhoto-icon.svg'

export default function AdminTrackCreate({ modalOpen, setModalOpen, ArtistsData }) {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [artistId, setArtistId] = useState([])
    const [avatarUrl, setAvatarUrl] = useState('')
    const [filterArtist, setFilterArtist] = useState([])
    const [trackArtist, setTrackArtist] = useState([])

    const inputAvatarRef = useRef(null)

    const onChangeAvatar = async (event) => {
            try {
                const avatar = event.target.files[0]
                const formData = new FormData()
                formData.append('image', avatar)
                const { data } = await axios.post('/upload', formData)
                setAvatarUrl(data.url)
            } catch (err) {
                console.warn(err)
                alert('Ошибка при загрузке файла')
            }
        }

    const onClickTrackCreate = () => {
        let artist = []

        const artistsDataIds = ArtistsData.map(obj => obj._id)

        artistId.map(e => {
            if (artistsDataIds.includes(e)) {
                ArtistsData.map(obj => {
                    if (obj._id === e) {
                        const artistObj = {
                            "id": artist.length + 1,
                            "name": obj.name,
                            "artistId": obj._id
                        }
                        artist.push(artistObj)
                    }
                })
            }
        })
        dispatch(fetchTrackCreate({ name, artist, avatarUrl }))
        setName('')
        setArtistName('')
        setAvatarUrl('')
        setArtistId([])
        setTrackArtist([])
    }

    const onChangeArtistName = (e) => {
        setArtistName(e.target.value)
        setFilterArtist(prev => prev = ArtistsData.filter(obj => {
            if (obj.name.includes(e.target.value)) {
                return true
            } else if (obj.name.includes("ё") && e.target.value.includes("е")) {
                return true
        }}))
    }

    const onClickArtistId = (e) => {
        const artist = e
        if (artistId.includes(artist._id) === false) {
            const artistObj = {
                _id: artist._id,
                name: artist.name,
                avatarUrl: artist.avatarUrl,
            }
            setTrackArtist(prev => [...prev, artistObj])
            setArtistId(prev => [...prev, artistObj._id])
            setArtistName(prev => prev = '')
        }
    }

    const onClickArtistIdDel = (e) => {
        setArtistId(prev => prev = artistId.filter(obj => obj !== e._id))
        setTrackArtist(prev => prev = trackArtist.filter(obj => obj._id !== e._id))
    }
 
  return (
    <div className={`admin-track__create ${modalOpen ? 'show' : ''}`} onClick={(e) => {
        if (e.target.className === 'admin-track__create show') {
            setModalOpen(false)
        }
    }}>

        <div className="admin-track__create-wrapper">
            <div className="admin-track__create-top">
                <h3 className="admin-track__create-title">Добавить новый трек</h3>
                <button className="admin-track__create-close btn--red" onClick={() => setModalOpen(false)}>Закрыть</button>
            </div>
            <form action="" className="admin-track__create-form">
                <ul className="admin-track__create-list">
                    <li className="admin-track__create-item">
                        <label htmlFor="" className="admin-track__create-label">Название трека</label>
                        <input type="text" className="admin-track__create-input" value={name} onChange={e => setName(e.target.value)} />
                    </li>
                    <li className="admin-track__create-item">
                        <label htmlFor="" className="admin-track__create-label">Артист(-ы)</label>
                        <ul className="admin-track__artist-list">
                            {
                                trackArtist.map(e => {
                                    return <li className="admin-track__artist-item" onClick={() => onClickArtistIdDel(e)}>
                                        <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-track__artist-avatar" />
                                        <span className="admin-track__artist-name">{e.name}</span>
                                        </li>
                                })
                            }
                        </ul>
                        <input type="text" className="admin-track__create-input" value={artistName} onChange={e => onChangeArtistName(e)} />
                        <ul className={`admin-track__filter-list ${artistName && 'show'}`}>
                            {
                                filterArtist.length === 0 || 
                                filterArtist.map(e => {
                                    if (artistId.includes(e._id)) {
                                        return true
                                    }
                                }) === true ||
                                (filterArtist.length > 0 && filterArtist.map(e => {
                                    if (artistId.includes(e._id)) {
                                        return true
                                    }
                                }).every(e => e === true)) === true
                                ? 
                                <h1>Ничего не найдено</h1>
                                :
                                artistName === ''
                                ?
                                <></>
                                :                                 
                                filterArtist.map(e => {
                                    if (artistId.includes(e._id) === false) {
                                        return <li className="admin-track__filter-item" onClick={() => onClickArtistId(e)} key={e._id}>
                                            <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt="" className="admin-track__filter-avatar" />
                                            <span className="admin-track__filter-name">{e.name}</span>
                                        </li>
                                    }
                                })
                            }
                        </ul>
                    </li>
                    <li className="admin-track__create-item">
                        <label htmlFor="" className="admin-track__create-label">Загрузить обложку трека</label>
                        <button className={`admin-track__create-btn ${avatarUrl && 'disableBorder'}`} type='button' onClick={() => inputAvatarRef.current.click()}>
                            <img src={addPhotoIcon} alt="Загрузить аватарку артиста" className="admin-track__create-btn-icon" />
                            {
                                avatarUrl && (
                                    <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="admin-track__create-avatar" />
                                )
                            }
                        </button>
                        <input type="file" className="admin-track__create-input" ref={inputAvatarRef} onChange={onChangeAvatar} hidden />
                    </li>
                </ul>
                <button className="admin-track__create-submit btn--green" type='button' onClick={() => {onClickTrackCreate(); setModalOpen(false)}}>Добавить трек</button>
            </form>
        </div>
    </div>
  )
}
