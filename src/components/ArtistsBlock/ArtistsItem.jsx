import React from 'react'
import { Link } from 'react-router'

export default function ArtistsItem({ artists }) {
  return (
    <Link to={`/artist/${artists._id}`}>
      <li className="artists__list-item">
          <img src={`http://localhost:5000${artists.avatarUrl}`} alt="" className="artists__list-img" />
          <span className="artists__list-name">{artists.name}</span>
      </li>
    </Link>
  )
}
