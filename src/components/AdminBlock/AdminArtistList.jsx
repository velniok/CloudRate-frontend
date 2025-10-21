import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchArtistRemove } from '../../redux/slices/artistAdmin'
import AdminArtistEdit from './AdminArtistEdit'
import { Link } from 'react-router'

export default function AdminArtistList({ name, avatarUrl, id, tracks, soundCloudUrl }) {

    const dispatch = useDispatch()

    const [openEdit, setOpenEdit] = useState(false)
    const [openMore, setOpenMore] = useState(false)

    const onClickArtistRemove = (id) => {
        dispatch(fetchArtistRemove(id))
    }

  return (
    <li className="admin-artist__list-item">
        <div className="admin-artist__list-bio">
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="admin-artist__list-avatar" />
            <span className="admin-artist__list-nickname"><Link to={`/artist/${id}`}>{name}</Link></span>
        </div>
        <ul className="admin-artist__list-track-list">
            {
                tracks.map((e, index) => {
                    if (index < 3) {
                        return (
                            <li className="admin-artist__list-track-item" key={e._id}>
                                <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-artist__list-track-avatar" />
                                <span className="admin-artist__list-track-name">{e.name}</span>
                            </li>
                        )
                    }
                })
            }
            {
                tracks.length > 3 && (<>
                <li className="admin-artist__list-track-item admin-artist__list-track-item--more" onClick={() => setOpenMore(!openMore)}>
                    <span className={`admin-artist__list-track-more-btn ${openMore ? "show" : ""}`}>+</span>
                </li>
                    <div className={`admin-artist__list-track-more-wrapper ${openMore ? "show" : ""}`}>
                    {
                        tracks.map((e, index) => {
                            if (index > 2) {
                                return (
                                    <div className="admin-artist__list-track-item" key={e._id}>
                                        <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-artist__list-track-avatar" />
                                        <span className="admin-artist__list-track-name">{e.name}</span>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                </>)
            }
        </ul>
        <div className="admin-artist__list-track-options">
            <button className="admin-artist__list-track-btn" onClick={() => setOpenEdit(true)}>Изменить</button>
            <button className="admin-artist__list-track-btn" onClick={() => onClickArtistRemove(id)}>Удалить</button>
            <AdminArtistEdit openEdit={openEdit} setOpenEdit={setOpenEdit} name={name} avatarUrl={avatarUrl} id={id} soundCloudUrl={soundCloudUrl} />
        </div>
    </li>
  )
}
