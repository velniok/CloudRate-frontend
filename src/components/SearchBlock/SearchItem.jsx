import React from 'react'
import { Link } from 'react-router'

export default function SearchItem({ name, avatarUrl, id, filter }) {
    return (
        <li className="search__list-item">
            <Link to={`/${filter}/${id}`}>
            {
                avatarUrl
                ?
                <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="search__list-avatar" />
                :
                <div className="search__list-avatar"></div>
            }
            </Link>
            <Link to={`/${filter}/${id}`}>
                <span className="search__list-name">{name}</span>
            </Link>
        </li>
    )
}
