import React from 'react'

export default function TrackCommentItem({ avatarUrl, nickname, ratingOverall, review }) {
    return (
        <li className="track__comment-item">
            <div className="track__comment-user">
                {
                    avatarUrl ? 
                    <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="track__comment-user-avatar" />
                    : <div className="track__comment-user-avatar"></div>
                }
                <span className="track__comment-user-nickname">{nickname}</span>
                <span className="track__comment-user-rating rating-overall">{ratingOverall}</span>
            </div>
            <p className="track__comment-text">{review}</p>
        </li>
    )
}
