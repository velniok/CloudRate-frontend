import React, { useState } from 'react'
import { Link } from 'react-router'

export default function UserTrackItem({ id, avatarUrl, name, artist, ratingOverall, ratingCriteria, review }) {

    const [ratingInfoOpen, setRatingInfoOpen] = useState(false)

    return (
        <li className="user__track-item">
            <Link to={`/track/${id}`}>
                <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="user__track-avatar" />
            </Link>
            <div className="user__track-info">
                <span className="user__track-name">{name}</span>
                <ul className="user__track-artist-list">
                    {
                        artist.map(e => (
                            <li className="user__track-artist-item" key={e.artistId}>
                                <Link to={`/artist/${e.artistId}`}>
                                    <span className="user__track-artist-nickname">{e.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className={`user__track-rating ${ratingInfoOpen ? 'open' : ''}`} onMouseEnter={() => setRatingInfoOpen(true)} onMouseLeave={() => setRatingInfoOpen(false)}>
                    <span className="user__track-rating-text">Оценка пользователя:</span>
                    <span className="user__track-rating-overall rating-overall">{ratingOverall}</span>
                </div>
                <div className={`user__track-rating-info ${ratingInfoOpen ? 'open' : ''}`} onMouseEnter={() => setRatingInfoOpen(true)} onMouseLeave={() => setRatingInfoOpen(false)}>
                    <ul className="user__track-rating-list">
                        {
                            ratingCriteria.map((e, index) => (
                                <li className="user__track-rating-item" key={index}>
                                    <span className="user__track-rating-criteria rating-overall">{e}</span>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        review && <span className="user__track-rating-review">Оценка с обзором</span>
                    }
                </div>
            </div>
        </li>
    )
}
