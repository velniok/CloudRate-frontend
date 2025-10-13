import React from 'react'
import { Link } from 'react-router'

export default function TrackCommentItem({ avatarUrl, name, ratingOverall, review, id }) {
    return (
        <li className="track__comment-item">
            <div className="track__comment-user">
                <Link to={`/user/${id}`}>
                    {
                        avatarUrl ? 
                        <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="track__comment-user-avatar" />
                        : <div className="track__comment-user-avatar"></div>
                    }
                </Link>
                <Link to={`/user/${id}`}><span className="track__comment-user-nickname">{name}</span></Link>
                <span className="track__comment-user-rating rating-overall">{ratingOverall}</span>
            </div>
            <p className="track__comment-text">{review}</p>
        </li>
    )
}
