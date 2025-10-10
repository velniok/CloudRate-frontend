import React from 'react'
import TrackCommentItem from './TrackCommentItem'

export default function TrackComment({ reviews }) {
    return (
        <div className="track__comment">
            <h2 className="track__comment-title title">Обзоры на трек</h2>
            <div className="track__comment-content">
                    {
                        reviews.length === 0 ?
                        <span className="track__comment-none">Обзоров к этому треку еще нет. Будь первым, кто его отправит!</span>
                        : 
                        <ul className="track__comment-list">
                            {
                                reviews.map(e => (
                                    <TrackCommentItem key={e.userId} id={e.userId} avatarUrl={e.reviewUser.avatarUrl} nickname={e.reviewUser.nickname} ratingOverall={e.rating.ratingOverall} review={e.review} />
                                ))
                            }
                        </ul>
                    }
            </div>
        </div>
    )
}
