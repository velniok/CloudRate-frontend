import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistAll } from '../../redux/slices/artistAdmin'
import AdminArtistCreate from './AdminArtistCreate'
import AdminArtistList from './AdminArtistList'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import AdminArtistListSkeleton from './AdminArtistListSkeleton'

export default function AdminArtist() {

    const search = useLocation().search
    const hash = useLocation().hash

    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const ArtistsData = useSelector((state) => state.artistAdmin.data)
    const ArtistsStatus = useSelector((state) => state.artistAdmin.status)
    
    useEffect(() => {
        if (hash === '#artists') {
            dispatch(fetchArtistAll({ page: search }))
        }
    }, [search, hash])

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
                        ArtistsStatus !== 'loading' ?
                        ArtistsData.artists.map(e => {
                            return <AdminArtistList
                                key={e._id}
                                name={e.name}
                                avatarUrl={e.avatarUrl}
                                id={e._id}
                                tracks={e.tracks}
                                soundCloudUrl={e.soundCloudUrl}
                            />
                        })
                        : [...Array(5)].map(e => (
                            <AdminArtistListSkeleton />
                        ))
                    }
                </ul>
                <button className="" onClick={() => { ArtistsData.nextPage === true && navigate(`/admin?page=${ArtistsData.page + 1}#artists`) }}>+ 1</button>
                <button className="" onClick={() => { ArtistsData.page !== 1 && navigate(`/admin?page=${ArtistsData.page - 1}#artists`) }}>- 1</button>
            </div>
        </div>
    )
}
