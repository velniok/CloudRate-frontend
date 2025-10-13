import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrackRemove } from '../../redux/slices/trackAdmin'
import { Link } from 'react-router'
import AdminTrackEdit from './AdminTrackEdit'

export default function AdminTrackList({ name, id, avatarUrl, artist, ArtistsData }) {

    const dispatch = useDispatch()

    const [openEdit, setOpenEdit] = useState(false)

    const onClickTrackRemove = (id) => {
        dispatch(fetchTrackRemove(id))
    }

    return (
        <li className="admin-track__list-item">
            <div className="admin-track__list-bio">
                <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="admin-track__list-avatar" />
                <span className="admin-track__list-name"><Link to={`/track/${id}`}>{name}</Link></span>
            </div>
            <ul className="admin-track__list-owner-list">
                {
                    artist.map(e => ArtistsData.filter(obj => obj._id === e.artistId).map(e => (
                        <li className="admin-track__list-owner-item" key={e._id}>
                            <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-track__list-owner-avatar" />
                            <span className="admin-track__list-owner-name">{e.name}</span>
                        </li>
                    )))
                }
            </ul>
            <div className="admin-track__list-options">
                <button className="admin-track__list-btn" onClick={() => setOpenEdit(true)}>Изменить</button>
                <button className="admin-track__list-btn" onClick={() => onClickTrackRemove(id)}>Удалить</button>
                <AdminTrackEdit openEdit={openEdit} setOpenEdit={setOpenEdit} name={name} avatarUrl={avatarUrl} id={id} />
            </div>
        </li>
    )
}
