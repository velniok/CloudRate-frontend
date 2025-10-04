import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import TrackRating from './TrackRating'
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg'

export default function TrackBlock({ name, avatarUrl, id, artist, ratingTrackOverall, ratingTrackCriteria }) {

    const [showMore, setShowMore] = useState(false)

  return (
    <section className="track">
        <div className="track-wrapper">
            <div className="container">
                <div className="track-inner">
                    <div className="track-left">
                        <img src={`http://localhost:5000${avatarUrl}`} alt={name} className="track-img" />
                        <div className="track__info">
                            <span className="track__info-type">Сингл</span>
                            <span className="track__info-name">{name}</span>
                            <ul className="track__artist-list">
                                {
                                    artist.map(e => (
                                        <Link to={`/artist/${e._id}`} key={e._id}>
                                            <div className="track__artist-list-wrapper">
                                                <img src={`http://localhost:5000${e.avatarUrl}`} alt={e.name} className="track__artist-list-avatar" />
                                                <span className="track__artist-list-name" key={e._id}>{e.name}</span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </ul>
                            <div className="track__info-rating">
                                {
                                    ratingTrackOverall.rating.length === 0
                                    ? 
                                    <span className="track__info-rating-overall--null">У трека еще нет оценок. Будь первым, кто его оценит!</span> 
                                    :
                                    <>
                                    <span className="track__info-rating-overall">
                                        {ratingTrackOverall.avgRating}
                                    </span>
                                    <button className={`track__info-rating-btn ${showMore ? 'show' : ''}`} onClick={() => setShowMore(!showMore)}>
                                        <img src={iconArrowDown} alt="" />
                                    </button>
                                    <ul className={`track__info-rating-more ${showMore ? 'show' : ''}`}>
                                        {
                                            ratingTrackCriteria.map(e => (
                                                <li className="track__info-rating-item" key={e.id}>
                                                    <span className="track__info-rating-name">{e.name}</span>
                                                    <span className="track__info-rating-avg">{e.avgRating}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                                }
                                
                            </div>
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
