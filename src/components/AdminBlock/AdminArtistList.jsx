import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchArtistRemove } from '../../redux/slices/artistAdmin'
import AdminArtistEdit from './AdminArtistEdit'
import { Link } from 'react-router'

export default function AdminArtistList({ name, avatarUrl, id, TracksData, tracks, soundCloudUrl }) {

    const dispatch = useDispatch()

    const [openEdit, setOpenEdit] = useState(false)
    const [openMore, setOpenMore] = useState(false)

    const onClickArtistRemove = (id) => {
        dispatch(fetchArtistRemove(id))
    }

  return (
    <li className="admin-artist__list-item">
        <div className="admin-artist__list-element--avatar">
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="admin-artist__list-avatar" />
        </div>
        <span className="admin-artist__list-name admin-artist__list-element--name"><Link to={`/artist/${id}`}>{name}</Link></span>
        <ul className="admin-artist__track-list admin-artist__track-element--track">
            {
                TracksData.filter(obj => {
                    if (tracks.includes(obj._id)) {
                        return true
                    }
                }).map((e, index) => {
                    if (index < 3) {
                        return (
                            <li className="admin-artist__track-item" key={e._id}>
                                <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-artist__track-avatar" />
                                <span className="admin-artist__track-name">{e.name}</span>
                            </li>
                        )
                    }
                })
            }
            {
                TracksData.filter(obj => {
                    if (tracks.includes(obj._id)) {
                        return true
                    }
                }).length > 3 && (<>
                <li className="admin-artist__track-item admin-artist__track-item--more" onClick={() => setOpenMore(!openMore)}>
                    <span className={`admin-artist__track-more-btn ${openMore ? "show" : ""}`}>+</span>
                </li>
                    <div className={`admin-artist__track-more-wrapper ${openMore ? "show" : ""}`}>
                    {
                        TracksData.filter(obj => {
                            if (tracks.includes(obj._id)) {
                                return true
                            }
                        }).map((e, index) => {
                            if (index > 2) {
                                return (
                                    <div className="admin-artist__track-item">
                                        <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-artist__track-avatar" />
                                        <span className="admin-artist__track-name">{e.name}</span>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                </>)
            }
        </ul>
        <div className="admin-artist__list-element--options">
            <button className="admin-artist__list-element--btn btn--red" onClick={() => onClickArtistRemove(id)}>Удалить</button>
            <button className="admin-artist__list-element--btn btn--yellow" onClick={() => setOpenEdit(true)}>Изменить</button>
            <AdminArtistEdit openEdit={openEdit} setOpenEdit={setOpenEdit} name={name} avatarUrl={avatarUrl} id={id} soundCloudUrl={soundCloudUrl} />
        </div>
    </li>
  )
}
