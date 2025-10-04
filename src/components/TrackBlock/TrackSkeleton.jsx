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
                        <Skeleton className="track-img" />
                        <div className="track__info">
                            <Skeleton className="track__info-name" width="300px" height="44px" radius="12px" />
                            <ul className="track__artist-list">
                                <Skeleton className="track__artist-list-wrapper" width="150px" height="31px" />
                            </ul>
                            <Skeleton className="track__info-rating" width="60px" height="40px" radius="8px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
