import React, { useState } from 'react'
import { Link } from 'react-router'

export default function UserBlock({ nickname, avatarUrl, role, rating }) {

    const [ratingInfoShow, setRatingInfoShow] = useState(null)

    return (
        <section className="user">
            <div className="container">
                <div className="user-wrapper">
                    <div className="user__profile">
                        {
                            avatarUrl ?
                            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="user__profile-avatar" />
                            : <div className="user__profile-avatar"></div>
                        }
                        <div className="user__profile-info">
                            <span className="user__profile-nickname">{nickname}</span>
                            {
                                role === 'admin' ?
                                <span className="user__profile-role user__profile-role--admin">Админ</span>
                                : <span className="user__profile-role">Пользователь</span>
                            }
                        </div>
                    </div>
                    <div className="user__rating">
                        <h2 className="user__rating-title">Оценки пользователя</h2>
                        <ul className="user__rating-list">
                            {
                                rating.map((e, index) => (
                                    <li className="user__rating-item" key={e.track._id} onMouseLeave={() => setRatingInfoShow(null)}>
                                        <div className={`user__rating-wrapper ${ratingInfoShow === index ? 'opacity' : ''}`} onMouseEnter={() => setRatingInfoShow(index)}>
                                            <img src={`${import.meta.env.VITE_API_URL}${e.track.avatarUrl}`} alt="" className="user__rating-avatar" />
                                            <div className="user__rating-desc">
                                                <span className="user__rating-name">{e.track.name}</span>
                                                <div className="user__rating-artist">
                                                    {
                                                        e.track.artist.map(e => (
                                                            <Link to={`/artist/${e.artistId}`} key={e.artistId}>
                                                            <span className="user__rating-artist-name">{e.name}</span>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                                <span className="user__rating-grade rating-overall">{e.ratingTrack.ratingOverall}</span>
                                            </div>
                                        </div>
                                        <div className={`user__rating-info ${ratingInfoShow === index ? 'show' : ''}`}>
                                            <Link to={`/track/${e.track._id}`} className="user__rating-link">Перейти к треку</Link>
                                            <ul className="user__rating-criteria-list">
                                                {
                                                    e.ratingTrack.ratingCriteria.map((e, index) => (
                                                        <span className="user__rating-criteria-item" key={index}>{e}</span>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
