import React, { useState } from 'react'
import AdminTrackCreate from './AdminTrackCreate'
import { useDispatch, useSelector } from 'react-redux'
import AdminTrackList from './AdminTrackList'
import { useEffect } from 'react'
import { fetchTrackAll } from '../../redux/slices/trackAdmin'
import { useLocation, useNavigate } from 'react-router'
import AdminTrackListSkeleton from './AdminTrackListSkeleton'
import arrowNext from '../../assets/icons/icon-arrow-next.svg'
import arrowPrev from '../../assets/icons/icon-arrow-prev.svg'
import Skeleton from '../Skeleton'

export default function AdminTrack() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const search = useLocation().search
    const hash = useLocation().hash

    const TrackStatus = useSelector((state) => state.trackAdmin.status)
    const TracksData = useSelector((state) => state.trackAdmin.data)

    const [modalOpen, setModalOpen] = useState(false)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        if (hash === '#tracks') {
            dispatch(fetchTrackAll({ page: search }))
            setPage(Number(search.slice(6)))
        }
    }, [search, hash])

  return (
    <div className="admin-track">
        <div className="admin-track-wrapper">
            <div className="admin-track-top">
                <h3 className="admin-track-title title">Список треков</h3>
                <button className="admin-track-btn" onClick={() => setModalOpen(true)}>Добавить новый трек</button>
            </div>
            <AdminTrackCreate modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="admin-track__list">
                {
                    TrackStatus === 'loaded' ?
                    TracksData.tracks.map(e => {
                        return <AdminTrackList key={e._id} name={e.name} id={e._id} avatarUrl={e.avatarUrl} artists={e.artist} />
                    })
                    :
                    [...Array(5)].map(e => (
                        <AdminTrackListSkeleton />
                    ))
                }
            </div>
            <div className="admin-track__list-bottom">
                <button className="admin-track__list-bottom-btn admin-track__list-bottom-btn--prev" onClick={() => { TracksData.page !== 1 && navigate(`/admin?page=${TracksData.page - 1}#tracks`) }}>
                    <img src={arrowPrev} alt="" className="admin-track__list-bottom-icon disabled" />
                </button>
                    <span className="admin-track__list-bottom-page">{page}</span>
                <button className="admin-track__list-bottom-btn admin-track__list-bottom-btn--next" onClick={() => { TracksData.nextPage === true && navigate(`/admin?page=${TracksData.page + 1}#tracks`) }}>
                    <img src={arrowNext} alt="" className="admin-track__list-bottom-btn-icon" />
                </button>
            </div>
        </div>
    </div>
  )
}
