import React from 'react'
import TrackRating from './TrackRating'
import TrackProfile from './TrackProfile'
import TrackComment from './TrackComment'

export default function TrackBlock({ name, avatarUrl, id, artist, ratingTrackOverall, ratingTrackCriteria, reviews }) {

    return (
        <section className="track">
            <div className="track-wrapper">
                <div className="container">
                    <TrackProfile name={name} avatarUrl={avatarUrl} artist={artist} ratingTrackOverall={ratingTrackOverall} ratingTrackCriteria={ratingTrackCriteria} />
                    <div className="track-content">
                        <TrackComment reviews={reviews} />
                        <TrackRating id={id} />
                    </div>
                </div>
            </div>
        </section>
  )
}
