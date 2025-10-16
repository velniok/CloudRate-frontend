import React from 'react'
import Skeleton from '../Skeleton'

export default function ArtistProfileSkeleton() {
    return (
        <section className="artist">
            <div className="artist-wrapper">
                <div className="container">
                    <div className="artist__profile">
                        <Skeleton className="artist__profile-avatar" />
                        <div className="artist__profile-info">
                            <Skeleton className="artist__profile-nickname" width="150px" height="34px" radius="8px" />
                            <Skeleton className="artist__profile-soundcloud" width="105px" height="20px" radius="8px" />
                        </div>
                    </div>
                    <div className="artist__track">
                        <h2 className="artist__track-title title">Треки артиста</h2>
                        <ul className="artist__track-list">
                            {
                                [...Array(6)].map((e, index) => (
                                    <li className="artist__track-item" key={index}>
                                        <Skeleton className="artist__track-avatar" />
                                        <div className="artist__track-info">
                                            <Skeleton className="artist__track-name" width="100px" height="17px" radius="8px" />
                                            <div className="artist__track-artist">
                                                <Skeleton className="artist__track-artist-nickname" width="150px" height="17px" radius="8px" />
                                            </div>
                                            <Skeleton className="artist__track-rating rating-overall" />
                                        </div>
                                    </li>
                                ))
                            }                       
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
