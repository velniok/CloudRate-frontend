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
            <div className="admin-artist-wrapper">
                <div className="admin-artist-top">
                    <h3 className="admin-artist-title title">Список артистов</h3>
                    <button className="admin-artist-btn" onClick={() => setModalOpen(true)}>Добавить нового артиста</button>
                </div>
                <AdminArtistCreate modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <ul className="admin-artist__list">
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
                </ul>
            </div>
        </div>
    )
}
