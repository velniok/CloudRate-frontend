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
      <div className="admin-track__list-element--avatar">
        <img src={`${process.env.REACT_APP_API_URL}${avatarUrl}`} alt="" className="admin-track__list-avatar" />
      </div>
        <span className="admin-track__list-name admin-track__list-element--name"><Link to={`/track/${id}`}>{name}</Link></span>
      <ul className="admin-track__owner-list admin-track__list-element--artist">
        {
          artist.map(e => ArtistsData.filter(obj => obj._id === e.artistId).map(e => (
            <li className="admin-track__owner-item" key={e._id}>
              <img src={`${process.env.REACT_APP_API_URL}${e.avatarUrl}`} alt={e.name} className="admin-track__owner-avatar" />
              <span className="admin-track__owner-name">{e.name}</span>
            </li>
          )))
        }
      </ul>
      <div className="admin-artist__list-element--options">
          <button className="admin-artist__list-element--btn btn--red" onClick={() => onClickTrackRemove(id)}>Удалить</button>
          <button className="admin-artist__list-element--btn btn--yellow" onClick={() => setOpenEdit(true)}>Изменить</button>
          <AdminTrackEdit openEdit={openEdit} setOpenEdit={setOpenEdit} name={name} avatarUrl={avatarUrl} id={id} />
      </div>
    </li>
  )
}
