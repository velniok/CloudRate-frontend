import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import TrackRating from './TrackRating'
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg'

export default function TrackBlock({ name, avatarUrl, id, artist, ratingTrackOverall, ratingTrackCriteria, reviews }) {

    const [showMore, setShowMore] = useState(false)

  return (
    <section className="track">
        <div className="track-wrapper">
            <div className="container">
                <div className="track-inner">
                    <div className="track-left">
                        <div className="track__profile">
                            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt={name} className="track__profile-avatar" />
                            <div className="track__profile-info">
                                <span className="track__profile-type">Сингл</span>
                                <span className="track__profile-name">{name}</span>
                                <ul className="track__profile-artist-list">
                                    {
                                        artist.map(e => (
                                            <Link to={`/artist/${e._id}`} key={e._id}>
                                                <div className="track__profile-artist-wrapper">
                                                    <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="track__profile-artist-avatar" />
                                                    <span className="track__profile-artist-name" key={e._id}>{e.name}</span>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </ul>
                                <div className="track__profile-rating">
                                    {
                                        ratingTrackOverall.rating.length === 0
                                        ? 
                                        <span className="track__profile-rating-overall--null">У трека еще нет оценок. Будь первым, кто его оценит!</span> 
                                        :
                                        <>
                                        <span className="track__profile-rating-overall">
                                            {ratingTrackOverall.avgRating}
                                        </span>
                                        <button className={`track__profile-rating-btn ${showMore ? 'show' : ''}`} onClick={() => setShowMore(!showMore)}>
                                            <img src={iconArrowDown} alt="" />
                                        </button>
                                        <ul className={`track__profile-rating-more ${showMore ? 'show' : ''}`}>
                                            {
                                                ratingTrackCriteria.map(e => (
                                                    <li className="track__profile-rating-item" key={e.id}>
                                                        <span className="track__profile-rating-name">{e.name}</span>
                                                        <span className="track__profile-rating-avg">{e.avgRating}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="track__comment">
                            <h2 className="track__comment-title">Комментарии пользователей</h2>
                            {
                                reviews.length === 0 ?
                                <span className="track__comment-none">На этот трек еще нет комментариев. Будь первым, кто напишет его.</span>
                                :
                                <ul className="track__comment-list">
                                    {
                                        reviews.map(e => (
                                            <li className="track__comment-item" key={e.userId}>
                                                <div className="track__comment-user">
                                                    <Link to={`/user/${e.userId}`}>
                                                        {
                                                            e.reviewUser.avatarUrl ? 
                                                            <img src={`${import.meta.env.VITE_API_URL}${e.reviewUser.avatarUrl}`} alt="" className="track__comment-avatar" />
                                                            : <div className="track__comment-avatar"></div>
                                                        }
                                                    </Link>
                                                    <Link to={`/user/${e.userId}`}>
                                                        <span className="track__comment-nickname">{e.reviewUser.nickname}</span>
                                                    </Link>
                                                    <span className="track__comment-rating rating-overall">{e.rating.ratingOverall}</span>
                                                </div>
                                                <p className="track__comment-text">{e.review}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="track-rigth">
                        <TrackRating id={id} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
