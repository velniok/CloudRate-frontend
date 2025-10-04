import React from 'react'
import { Link } from 'react-router'

export default function HeroTopRatingItem({ name, avatarUrl, id, artist }) {
  return (
    <li className="hero__top-item">
        <Link to={`/track/${id}`}>
        <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt={name} className="hero__top-avatar" />
        <span className="hero__top-name">{name}</span>
        </Link>
        <ul className="hero__top-artist-list">
            {
                artist.map(e => (
                    <Link to={`/artist/${e._id}`} key={e._id}>
                        <li className="hero__top-artist-item">
                            <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt="" className="hero__top-artist-avatar" />
                            <span className="hero__top-artist-name">{e.name}</span>
                        </li>
                     </Link>
                ))
            }
        </ul>
    </li>
  )
}
