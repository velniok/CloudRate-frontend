import React from 'react'
import { Link } from 'react-router'

export default function ArtistTrackItem({ name, id, avatarUrl, artist, ratingTrackOverall }) {

  return (
    <li className="artist__track-item">
        <Link to={`/track/${id}`}>
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="artist__track-img" />
        </Link>
        <div className="artist__track-info">
            <Link to={`/track/${id}`}>
                <span className="artist__track-name">{name}</span>
            </Link>
            <div className="artist__track-artist">
                {
                    artist.map(e => (
                        <Link to={`/artist/${e._id}`} key={e._id}>
                            <div className="artist__track-artist-wrapper">
                                <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt={e.name} className="artist__track-artist-avatar" />
                                <span className="artist__track-artist-name" key={e._id}>{e.name}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        <span className="artist__track-rating">{ratingTrackOverall.avgRating}</span>
    </li>
  )
}