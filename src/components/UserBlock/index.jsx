import React from 'react'
import { Link } from 'react-router'

export default function UserBlock({ nickname, avatarUrl, role, rating }) {

    return (
        <section className="user">
            <div className="user-wrapper">
                <div className="container">
                    <div className="user__profile">
                        {
                            avatarUrl ?
                            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="user__profile-avatar" />
                            : <div className="user__profile-avatar"></div>
                        }
                        <div className="user__profile-info">
                            <div className="user__profile-info-top">
                                <span className="user__profile-nickname">{nickname}</span>
                                {
                                    role === 'admin' ?
                                    <span className="user__profile-role user__profile-role--admin">Админ</span>
                                    : <span className="user__profile-role">Пользователь</span>
                                }
                            </div>
                            <a href="#!" className="user__profile-soundcloud">SoundCloud</a>
                        </div>
                    </div>
                    <div className="user__track">
                        <h2 className="user__track-title title">Оценки пользователя</h2>
                        <ul className="user__track-list">
                            {
                                rating.map(e => (
                                    <li className="user__track-item" key={e.track._id}>
                                        <Link to={`/track/${e.track._id}`}>
                                            <img src={`${import.meta.env.VITE_API_URL}${e.track.avatarUrl}`} alt="" className="user__track-avatar" />
                                        </Link>
                                        <div className="user__track-info">
                                            <span className="user__track-name">{e.track.name}</span>
                                            <ul className="user__track-artist-list">
                                                {
                                                    e.track.artist.map(e => (
                                                        <li className="user__track-artist-item" key={e.artistId}>
                                                            <Link to={`/artist/${e.artistId}`}>
                                                                <span className="user__track-artist-nickname">{e.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <span className="user__track-rating rating-overall">{e.ratingTrack.ratingOverall}</span>
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
