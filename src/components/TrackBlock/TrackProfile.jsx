import React, { useState } from 'react'
import { Link } from 'react-router'
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg'

export default function TrackProfile({ name, avatarUrl, artist, ratingTrackOverall, ratingTrackCriteria }) {

    const [ratingInfoOpen, serRatingInfoOpen] = useState(false)

    return (
        <div className="track__profile">
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="track__profile-avatar" />
            <div className="track__profile-info">
                <div className="track__profile-bio">
                    <span className="track__profile-nickname">{name}</span>
                    <a href="#!" className="track__profile-soundcloud">SoundCloud</a>
                </div>
                {
                    ratingTrackOverall.avgRating === 0 ? <span className="track__profile-rating-none">Оценок на этот трек еще нет. Будь первым, кто ее поставит!</span>
                    :
                    <>
                        <div className="track__profile-rating">
                            <span className="track__profile-rating-overall rating-overall">{ratingTrackOverall.avgRating}</span>
                            <img src={iconArrowDown} alt="" className={`track__profile-rating-icon ${ratingInfoOpen ? 'open' : ''}`} onClick={() => serRatingInfoOpen(!ratingInfoOpen)} />
                        </div>
                        <div className={`track__profile-rating-info ${ratingInfoOpen ? 'open' : ''}`}>
                            <ul className="track__profile-rating-list">
                                {
                                    ratingTrackCriteria.map((e, index) => (
                                        <li className="track__profile-rating-item" key={index}>
                                            <span className="track__profile-rating-criteria rating-overall">{e.avgRating}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                }
                <ul className="track__profile-artist-list">
                    {
                        artist.map(e => (
                            <li className="track__profile-artist-item" key={e._id}>
                                <Link to={`/artist/${e._id}`} className='track__profile-artist-item'>
                                    <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt="" className="track__profile-artist-avatar" />
                                    <span className="track__profile-artist-name">{e.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
