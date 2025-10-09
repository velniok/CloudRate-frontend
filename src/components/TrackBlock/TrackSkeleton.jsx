import React from 'react'
import Skeleton from '../Skeleton'
import TrackRating from './TrackRating'

export default function TrackSkeleton() {
  return (
    <section className="track">
        <div className="track-wrapper">
            <div className="container">
                <div className="track__profile">
                    <Skeleton className="track__profile-avatar" />
                    <div className="track__profile-info">
                        <Skeleton className="track__profile-nickname" width="200px" height="34px" radius="8px" />
                        <Skeleton className="track__profile-soundcloud" width="100px" height="20px" radius="6px" />
                        <Skeleton className="track__profile-rating rating-overall" />
                        <ul className="track__profile-artist-list">
                            <li className="track__profile-artist-item">
                                <Skeleton className="track__profile-artist-avatar" />
                                <Skeleton className="track__profile-artist-name" height="17px" width="110px" radius="6px" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="track-content">
                    <div className="track__comment">
                        <h2 className="track__comment-title title">Комментарии</h2>
                        <div className="track__comment-content">
                            <ul className="track__comment-list">
                                {
                                    [...Array(3)].map((e, index) => (
                                        <li className="track__comment-item" key={index}>
                                            <div className="track__comment-user">
                                                <Skeleton className="track__comment-user-avatar" />
                                                <Skeleton className="track__comment-user-nickname" height="20px" width="100px" radius="8px" />
                                                <Skeleton className="track__comment-user-rating rating-overall" />
                                            </div>
                                            <Skeleton className="track__comment-text" height="175px" radius="12px" />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="track__rating">
                        <h2 className="track__rating-title title">Оценить трек</h2>
                        <div className="track__rating-wrapper">
                            <Skeleton className="track__rating-list" height="508px" radius="12px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
