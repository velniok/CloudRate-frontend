import React from 'react'
import { Link } from 'react-router'

export default function UserTrackItem({ id, avatarUrl, name, artist, ratingOverall }) {
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
                <span className="user__track-rating rating-overall">{ratingOverall}</span>
            </div>
        </li>
    )
}
