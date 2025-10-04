import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchArtistRemove } from '../../redux/slices/artistAdmin'
import AdminArtistEdit from './AdminArtistEdit'
import { Link } from 'react-router'

export default function AdminArtistList({ name, avatarUrl, id, TracksData, tracks, soundCloudUrl }) {

    const dispatch = useDispatch()

    const [openEdit, setOpenEdit] = useState(false)

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
                }).map(e => (
                    <li className="admin-artist__track-item" key={e._id}>
                        <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-artist__track-avatar" />
                        <span className="admin-artist__track-name">{e.name}</span>
                    </li>
                ))
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
