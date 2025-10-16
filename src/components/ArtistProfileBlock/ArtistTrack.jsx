import React, { useEffect, useRef, useState } from 'react'
import ArtistTrackItem from './ArtistTrackItem'
import iconArrowPrev from '../../assets/icons/icon-arrow-prev.svg'
import iconArrowNext from '../../assets/icons/icon-arrow-next.svg'

export default function ArtistTrack({ tracks }) {

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
        <div className="artist__track">
            <h2 className="artist__track-title title">Треки артиста</h2>
            <div className="artist__track-content" ref={cardRef}>
                <ul className="artist__track-list" ref={cardListRef} style={{ transform: `translateX(-${ (cardPos * cardPosMultipler) * (cardListWidth - cardWidth) }px)` }}>
                    {
                        tracks.map(e => (
                            <ArtistTrackItem key={e._id} name={e.name} avatarUrl={e.avatarUrl} id={e._id} artist={e.artist} ratingTrackOverall={e.ratingTrack[0].overall} />
                        ))  
                    }                       
                </ul>
                <button className={`artist__track-btn user__track-btn--prev ${cardPos <= 0 ? 'disabled' : ''}`} onClick={sliderPrev}>
                    <img src={iconArrowPrev} alt="" className="artist__track-btn-icon" />
                </button>
                <button className={`artist__track-btn user__track-btn--next ${(cardPos * cardPosMultipler) * (cardListWidth - cardWidth) >= cardListWidth - cardWidth ? 'disabled' : ''}`} onClick={sliderNext}>
                    <img src={iconArrowNext} alt="" className="artist__track-btn-icon" />
                </button>
            </div>
        </div>
    )
}
