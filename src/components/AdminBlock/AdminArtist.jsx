import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistRemove } from '../../redux/slices/artistAdmin'
import AdminArtistCreate from './AdminArtistCreate'
import AdminArtistList from './AdminArtistList'

export default function AdminArtist({ ArtistsData, TracksData }) {

    const [modalOpen, setModalOpen] = useState(false)

    const artistStatus = useSelector((state) => state.artistAdmin.status)
    const trackStatus = useSelector((state) => state.trackAdmin.status)

  return (
    <div className="admin-artist">
        <div className="admin-artist__list">
            <div className="admin-artist__list-top">
              <h3 className="admin-artist__list-title">Список артистов</h3>
              <button className="admin-artist__list-btn btn--green" onClick={() => setModalOpen(true)}>Добавить нового артиста</button>
            </div>
            <AdminArtistCreate modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="admin-artist__list-wrapper">
                <li className="admin-artist__list-item">
                    <span className="admin-artist__list-title admin-artist__list-element--avatar">Аватарка</span>
                    <span className="admin-artist__list-title admin-artist__list-element--name">Никнейм</span>
                    <span className="admin-artist__list-title admin-artist__list-element--artist">Трек(-и)</span>
                    <span className="admin-artist__list-title admin-artist__list-element--options">Опции</span>
                </li>
              {
                artistStatus !== 'loading' && trackStatus !== 'loading' &&
                ArtistsData.map(e => {
                  return <AdminArtistList
                    key={e._id}
                    name={e.name}
                    avatarUrl={e.avatarUrl}
                    id={e._id}
                    tracks={e.tracks}
                    soundCloudUrl={e.soundCloudUrl}
                    TracksData={TracksData}
                  />
                })
              }
            </div>
        </div>
    </div>
  )
}
