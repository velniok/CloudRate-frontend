import React, { useEffect, useState } from 'react'
import AdminArtist from './AdminArtist'
import AdminTrack from './AdminTrack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistAll } from '../../redux/slices/artistAdmin'
import { fetchTrackAll } from '../../redux/slices/trackAdmin'

export default function AdminBlock() {

  const dispatch = useDispatch()

  const ArtistsData = useSelector((state) => state.artistAdmin.data)
  const TracksData = useSelector((state) => state.trackAdmin.data)

  useEffect(() => {
    dispatch(fetchArtistAll())
    dispatch(fetchTrackAll())
  }, [])

  const [activeMenu, setActiveMenu] = useState(1)

  return (
    <section className="admin">
      <div className="admin-wrapper">
        <div className="container">
          <div className="admin-inner">
            <div className="admin__menu">
              <ul className="admin__menu-list">
                <li className={`admin__menu-item ${activeMenu === 1 ? 'active' : ''}`} onClick={() => setActiveMenu(1)}>Артисты</li>
                <li className={`admin__menu-item ${activeMenu === 2 ? 'active' : ''}`} onClick={() => setActiveMenu(2)}>Треки</li>
                <li className="admin__menu-item">Пользователи</li>
              </ul>
            </div>
            {
              activeMenu === 1 ? <AdminArtist ArtistsData={ArtistsData} TracksData={TracksData} />
              : <AdminTrack TracksData={TracksData} ArtistsData={ArtistsData} /> 
            }
          </div>
        </div>
      </div>
    </section>
  )
}
