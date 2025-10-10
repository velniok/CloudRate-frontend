import React from 'react'
import UserTrackItem from './UserTrackItem'

export default function UserTrack({ rating }) {
    return (
        <div className="user__track">
            <h2 className="user__track-title title">Оценки пользователя</h2>
                {
                    rating.length === 0 ?
                    <span className="user__track-none">Пользователь еще не оценил ни одного трека</span>
                    :
                    <ul className="user__track-list">
                        {
                            rating.map(e => (
                                <UserTrackItem
                                    key={e.track._id}
                                    id={e.track._id}
                                    avatarUrl={e.track.avatarUrl}
                                    name={e.track.name}
                                    artist={e.track.artist}
                                    ratingOverall={e.ratingTrack.ratingOverall}
                                    ratingCriteria={e.ratingTrack.ratingCriteria}
                                    review={e.ratingTrack.review}
                                />
                            ))
                        }
                    </ul>
                }
        </div>
    )
}
