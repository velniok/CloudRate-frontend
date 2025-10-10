import React from 'react'
import { Link } from 'react-router'

export default function ArtistTrackItem({ name, id, avatarUrl, artist, ratingTrackOverall }) {

  return (
    <li className="artist__track-item">
        <Link to={`/track/${id}`}>
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="artist__track-avatar" />
        </Link>
        <div className="artist__track-info">
            <span className="artist__track-name">{name}</span>
            <ul className="artist__track-artist-list">
                {
                    artist.map(e => (
                        <li className="artist__track-artist-item" key={e._id}>
                            <Link to={`/artist/${e._id}`}>
                                <span className="artist__track-artist-nickname">{e.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <span className="artist__track-rating rating-overall">{ratingTrackOverall.avgRating}</span>
        </div>
    </li>
  )
}