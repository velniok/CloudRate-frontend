import React from 'react'
import { Link } from 'react-router'

export default function ArtistsItem({ artists }) {
  return (
    <Link to={`/artist/${artists._id}`}>
      <li className="artists__list-item">
          <img src={`${process.env.REACT_APP_API_URL}${artists.avatarUrl}`} alt="" className="artists__list-img" />
          <span className="artists__list-name">{artists.name}</span>
      </li>
    </Link>
  )
}
