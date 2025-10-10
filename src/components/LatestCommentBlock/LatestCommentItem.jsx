import React from 'react'
import { Link } from 'react-router'

export default function LatestCommentItem({ user, review, track, rating }) {
    return (
        <li className="latest-comment__card-item">
            <div className="latest-comment__card-user">
                <Link to={`/user/${user.id}`}>
                    {
                        user.avatarUrl
                        ?
                        <img src={`${import.meta.env.VITE_API_URL}${user.avatarUrl}`} alt="" className="latest-comment__card-user-avatar" />
                        :
                        <div className="latest-comment__card-user-avatar"></div>
                    }
                </Link>
                <Link to={`/user/${user.id}`}>
                    <span className="latest-comment__card-user-nickname">{user.nickname}</span>
                </Link>
                <span className="latest-comment__card-rating rating-overall">{rating.ratingOverall}</span>
            </div>
            <div className="latest-comment__card-content">
                <p className="latest-comment__card-review">{review}</p>
                <div className="latest-comment__card-track">
                    <Link to={`/track/${track.trackId}`}>
                        <img src={`${import.meta.env.VITE_API_URL}${track.avatarUrl}`} alt="" className="latest-comment__card-track-avatar" />
                    </Link>
                    <span className="latest-comment__card-track-name">{track.name}</span>
                    {
                        track.artist.map(e => (
                            <Link to={`/artist/${e.artistId}`}>
                                <span className="latest-comment__card-track-artist">{e.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </li>
    )
}
