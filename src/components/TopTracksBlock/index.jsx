import React, { useEffect, useRef } from 'react'
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
    const [width, setWidth] = useState(0)
    const [columnGap, setColumnGap] = useState(0)
    const [posMultiplier, setPosMultiplier] = useState(0)

    const TopRatingTracks = useSelector(state => state.track.topRatingTracks)

    useEffect(() => {
        dispatch(fetchTopRatingTracks())
    }, [])

    const sliderNext = () => {
        if (width === 145) {
            setColumnGap(10)
            setPosMultiplier(1)
        } else {
            setColumnGap(15)
            setPosMultiplier(3)
        }
        if (cardPos < 3 && width === 195) {
            setCardPost(prev => prev += 1)
        } else if (cardPos < 13 && width === 145) {
            setCardPost(prev => prev += 1)
        }
    }

    const sliderPrev = () => {
        if (cardPos > 0) {
            setCardPost(prev => prev -= 1)
        }
    }

  return (
    <section className="top-tracks">
        <div className="top-tracks-wrapper">
            <div className="container">
                <div className="top-tracks-inner">
                    <h2 className="top-tracks-title title">Самые оцениваемые треки</h2>
                    <div className="top-tracks__card">
                        <ul className="top-tracks__card-list" style={{ marginLeft: `-${ (cardPos * ((width + columnGap) * posMultiplier)) }px` }}>
                            {
                                TopRatingTracks ?
                                TopRatingTracks.map(e => (
                                    <TopTracksItem key={e._id} name={e.name} avatarUrl={e.avatarUrl} id={e._id} artist={e.artist} ratingTrack={e.ratingTrack} setWidth={setWidth} />
                                ))
                                : [...Array(7)].map((e, index) => (
                                    <TopTracksItemSkeleton key={index} />
                                ))
                            }
                        </ul>
                        <button className={`top-tracks__card-btn top-tracks__card-btn--prev ${cardPos <= 0 ? 'disabled' : ''}`} onClick={sliderPrev}>
                            <img src={iconArrowPrev} alt="" className="top-tracks__card-btn-icon" />
                        </button>
                        <button className={`top-tracks__card-btn top-tracks__card-btn--next ${cardPos >= 3 && width === 195 ? 'disabled' : cardPos >= 13 && width === 145 ? 'disabled' : ''}`} onClick={sliderNext}>
                            <img src={iconArrowNext} alt="" className="top-tracks__card-btn-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
