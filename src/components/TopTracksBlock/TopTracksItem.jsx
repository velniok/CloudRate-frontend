import React from 'react'
import { Link } from 'react-router'

export default function TopTracksItem({ name, avatarUrl, id, artist, ratingTrack }) {
    return (
        <li className="top-tracks__card-item">
            <Link to={`/track/${id}`}>
                <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="top-tracks__card-avatar" />
            </Link>
            <span className="top-tracks__card-name">{name}</span>
            <ul className="top-tracks__card-artist-list">
                {
                    artist.map(e => (
                        <li className="top-tracks__card-artist-item" key={e._id}>
                            <Link to={`/artist/${e._id}`}>
                                <span className="top-tracks__card-artist-nickname">{e.name}</span>
                            </Link>
                        </li>
                    )) 
                }
            </ul>
            <span className="top-tracks__card-rating rating-overall">{ratingTrack[0].overall.avgRating}</span>
        </li>
    )
}
