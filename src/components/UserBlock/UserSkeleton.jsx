import React from 'react'
import Skeleton from '../Skeleton'

export default function UserSkeleton() {
    return (
        <section className="user">
            <div className="user-wrapper">
                <div className="container">
                    <div className="user__profile">
                        <Skeleton className="user__profile-avatar" />
                        <div className="user__profile-info">
                            <div className="user__profile-info-top">
                                <Skeleton className="user__profile-nickname" width="150px" height="34px" radius="8px" />
                            </div>
                            <Skeleton className="user__profile-soundcloud" width="100px" height="20px" radius="5px" />
                        </div>
                    </div>
                    <div className="user__track">
                        <h2 className="user__track-title title">Оценки пользователя</h2>
                        <ul className="user__track-list">
                            {
                                [...Array(6)].map((e, index) => (
                                    <li className="user__track-item" key={index}>
                                        <Skeleton className="user__track-avatar" />
                                        <div className="user__track-info">
                                            <Skeleton className="user__track-name" width="100px" height="17px" radius="8px" />
                                            <div className="user__track-artist">
                                                <Skeleton className="user__track-artist-nickname" width="150px" height="17px" radius="8px" />
                                            </div>
                                            <div className="user__track-rating">
                                                <span className="user__track-rating-text">Оценка пользователя:</span>
                                                <Skeleton className="user__track-rating-overall rating-overall" />
                                            </div>
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
