import React from 'react'
import Skeleton from '../Skeleton'
import TrackRating from './TrackRating'

export default function TrackSkeleton() {
  return (
    <section className="track">
        <div className="track-wrapper">
            <div className="container">
                <div className="track-inner">
                    <div className="track-left">
                        <div className="track__profile">
                            <Skeleton className="track__profile-avatar" />
                            <div className="track__profile-info">
                                <Skeleton className="track__profile-name" width="300px" height="44px" radius="12px" />
                                <ul className="track__profile-artist-list">
                                    <Skeleton className="track__profile-artist-wrapper" width="150px" height="31px" />
                                </ul>
                                <Skeleton className="track__profile-rating" width="60px" height="40px" radius="8px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
