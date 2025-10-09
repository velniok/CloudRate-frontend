import React from 'react'
import { Link } from 'react-router'
import TrackRating from './TrackRating'

export default function TrackBlock({ name, avatarUrl, id, artist, ratingTrackOverall, ratingTrackCriteria, reviews }) {

    return (
        <section className="track">
            <div className="track-wrapper">
                <div className="container">
                    <div className="track__profile">
                        <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="track__profile-avatar" />
                        <div className="track__profile-info">
                            <span className="track__profile-nickname">{name}</span>
                            <a href="#!" className="track__profile-soundcloud">SoundCloud</a>
                            {
                                ratingTrackOverall.avgRating === 0 ? <span className="track__profile-rating-none">Оценок на этот трек еще нет. Будь первым, кто ее поставит!</span>
                                :
                                <span className="track__profile-rating rating-overall">{ratingTrackOverall.avgRating}</span>
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
                    <div className="track-content">
                        <div className="track__comment">
                            <h2 className="track__comment-title title">Комментарии</h2>
                            <div className="track__comment-content">
                                    {
                                        reviews.length === 0 ?
                                        <span className="track__comment-none">Комментариев к этому треку еще нет. Будь первым, кто его отправит!</span>
                                        : 
                                        <ul className="track__comment-list">
                                            {
                                                reviews.map(e => (
                                                    <li className="track__comment-item" key={e.userId}>
                                                        <div className="track__comment-user">
                                                            {
                                                                e.reviewUser.avatarUrl ? 
                                                                <img src={`${import.meta.env.VITE_API_URL}${e.reviewUser.avatarUrl}`} alt="" className="track__comment-user-avatar" />
                                                                : <div className="track__comment-user-avatar"></div>
                                                            }
                                                            <span className="track__comment-user-nickname">{e.reviewUser.nickname}</span>
                                                            <span className="track__comment-user-rating rating-overall">{e.rating.ratingOverall}</span>
                                                        </div>
                                                        <p className="track__comment-text">{e.review}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    }
                            </div>
                        </div>
                        <TrackRating id={id} />
                    </div>
                </div>
            </div>
        </section>
  )
}
