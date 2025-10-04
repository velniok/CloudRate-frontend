import React from 'react'
import Skeleton from '../Skeleton'

export default function ArtistProfileSkeleton() {
  return (
        <section className="artist">
            <div className="artist-wrapper">
                <div className="container">
                    <div className="artist-inner">
                        <div className="artist-left">
                            <Skeleton className="artist-img" width="200px" height="200px" />
                            <div className="artist__info">
                                <Skeleton className="artist__info-name" width="300px" height="42px" radius="12px" />
                                <Skeleton className="artist__info-soundcloud" width="200px" height="20px" radius="8px" />
                            </div>
                        </div>
                        <div className="artist-right">
                            <ul className="artist__track-list">
                                <li className="artist__track-item">
                                <Skeleton className="artist__track-img" />
                                    <div className="artist__track-info">
                                        <Skeleton className="artist__track-name" height="24px" width="250px" radius="8px" />
                                        <div className="artist__track-artist">
                                            <Skeleton className="artist__track-artist-wrapper" height="30px" width="150px" radius="8px" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="artist__track-list">
                                <li className="artist__track-item">
                                <Skeleton className="artist__track-img" />
                                    <div className="artist__track-info">
                                        <Skeleton className="artist__track-name" height="24px" width="250px" radius="8px" />
                                        <div className="artist__track-artist">
                                            <Skeleton className="artist__track-artist-wrapper" height="30px" width="150px" radius="8px" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="artist__track-list">
                                <li className="artist__track-item">
                                <Skeleton className="artist__track-img" />
                                    <div className="artist__track-info">
                                        <Skeleton className="artist__track-name" height="24px" width="250px" radius="8px" />
                                        <div className="artist__track-artist">
                                            <Skeleton className="artist__track-artist-wrapper" height="30px" width="150px" radius="8px" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
