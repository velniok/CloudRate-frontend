import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatingTracks } from '../../redux/slices/track'
import TopTracksItem from './TopTracksItem'
import TopTracksItemSkeleton from './TopTracksItemSkeleton'
import iconArrowPrev from '../../assets/icons/icon-arrow-prev.svg'
import iconArrowNext from '../../assets/icons/icon-arrow-next.svg'
import { useState } from 'react'

export default function TopTracksBlock() {

    const dispatch = useDispatch()
    
    const [cardPos, setCardPost] = useState(0)

    const TopRatingTracks = useSelector(state => state.track.topRatingTracks)

    useEffect(() => {
        dispatch(fetchTopRatingTracks())
    }, [])

  return (
    <section className="top-tracks">
        <div className="top-tracks-wrapper">
            <div className="container">
                <div className="top-tracks-inner">
                    <h2 className="top-tracks-title title">Самые оцениваемые треки</h2>
                    <div className="top-tracks__card">
                        <ul className="top-tracks__card-list" style={{ marginLeft: `-${(50 * cardPos)}%` }}>
                            {
                                TopRatingTracks ?
                                TopRatingTracks.map(e => (
                                    <TopTracksItem key={e._id} name={e.name} avatarUrl={e.avatarUrl} id={e._id} artist={e.artist} ratingTrack={e.ratingTrack} />
                                ))
                                : [...Array(7)].map((e, index) => (
                                    <TopTracksItemSkeleton key={index} />
                                ))
                            }
                        </ul>
                        <button className={`top-tracks__card-btn top-tracks__card-btn--prev ${cardPos <= 0 ? 'disabled' : ''}`} onClick={() => cardPos > 0 && setCardPost(prev => prev -= 1)}>
                            <img src={iconArrowPrev} alt="" className="top-tracks__card-btn-icon" />
                        </button>
                        <button className={`top-tracks__card-btn top-tracks__card-btn--next ${cardPos >= 2 ? 'disabled' : ''}`} onClick={() => cardPos < 2 && setCardPost(prev => prev += 1)}>
                            <img src={iconArrowNext} alt="" className="top-tracks__card-btn-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
