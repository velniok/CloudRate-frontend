import React, { useState } from 'react'
import AdminTrackCreate from './AdminTrackCreate'
import { useSelector } from 'react-redux'
import AdminTrackList from './AdminTrackList'

export default function AdminTrack({ TracksData, ArtistsData }) {

    const trackStatus = useSelector((state) => state.trackAdmin.status)

    const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="admin-track">
        <div className="admin-track-wrapper">
            <div className="admin-track-top">
                <h3 className="admin-track-title title">Список треков</h3>
                <button className="admin-track-btn" onClick={() => setModalOpen(true)}>Добавить новый трек</button>
            </div>
            <AdminTrackCreate modalOpen={modalOpen} setModalOpen={setModalOpen} ArtistsData={ArtistsData} />
            <div className="admin-track__list">
                {
                    trackStatus === 'loaded' &&
                    TracksData.map(e => {
                        return <AdminTrackList key={e._id} name={e.name} id={e._id} avatarUrl={e.avatarUrl} artist={e.artist} ArtistsData={ArtistsData} />
                    })
                }
            </div>
        </div>
    </div>
  )
}
