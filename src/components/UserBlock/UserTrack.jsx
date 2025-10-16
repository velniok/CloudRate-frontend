import React, { useEffect, useRef, useState } from 'react'
import UserTrackItem from './UserTrackItem'
import iconArrowPrev from '../../assets/icons/icon-arrow-prev.svg'
import iconArrowNext from '../../assets/icons/icon-arrow-next.svg'

export default function UserTrack({ rating }) {

    const [cardPos, setCardPost] = useState(0)
    const [cardListWidth, setCardListWidth] = useState(0)
    const [cardWidth, setCardWidth] = useState(0)
    const [cardPosMultipler, setCardPosMultipler] = useState(0)

    const cardRef = useRef(null)
    const cardListRef = useRef(null)

    useEffect(() => {
        setCardListWidth(cardListRef.current.offsetWidth)
        setCardWidth(cardRef.current.offsetWidth)
        if (cardWidth > 650) {
            setCardPosMultipler(1)
        } else {
            setCardPosMultipler(0.1)
        }
    }, [cardPos])

    const sliderNext = () => {
        if ((cardPos * cardPosMultipler) * (cardListWidth - cardWidth) < cardListWidth - cardWidth) {
            setCardPost(prev => prev += 1)
        }
    }

    const sliderPrev = () => {
        if (cardPos > 0) {
            setCardPost(prev => prev -= 1)
        }
    }

    return (
        <div className="user__track">
            <h2 className="user__track-title title">Оценки пользователя</h2>
            <div className="user__track-content" ref={cardRef}>
                {
                    rating.length === 0 ?
                    <span className="user__track-none">Пользователь еще не оценил ни одного трека</span>
                    :
                    <ul className="user__track-list"ref={cardListRef} style={{ transform: `translateX(-${ (cardPos * cardPosMultipler) * (cardListWidth - cardWidth) }px)` }}>
                        {
                            rating.map(e => (
                                <UserTrackItem
                                    key={e.track._id}
                                    id={e.track._id}
                                    avatarUrl={e.track.avatarUrl}
                                    name={e.track.name}
                                    artist={e.track.artist}
                                    ratingOverall={e.ratingTrack.ratingOverall}
                                    ratingCriteria={e.ratingTrack.ratingCriteria}
                                    review={e.ratingTrack.review}
                                />
                            ))
                        }
                    </ul>
                }
                <button className={`user__track-btn user__track-btn--prev ${cardPos <= 0 ? 'disabled' : ''}`} onClick={sliderPrev}>
                    <img src={iconArrowPrev} alt="" className="user__track-btn-icon" />
                </button>
                <button className={`user__track-btn user__track-btn--next ${(cardPos * cardPosMultipler) * (cardListWidth - cardWidth) >= cardListWidth - cardWidth ? 'disabled' : ''}`} onClick={sliderNext}>
                    <img src={iconArrowNext} alt="" className="user__track-btn-icon" />
                </button>
            </div>
        </div>
    )
}
