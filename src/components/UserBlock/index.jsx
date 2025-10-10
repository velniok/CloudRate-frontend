import React from 'react'
import UserProfile from './UserProfile'
import UserTrack from './UserTrack'

export default function UserBlock({ nickname, avatarUrl, role, rating }) {

    return (
        <section className="user">
            <div className="user-wrapper">
                <div className="container">
                    <UserProfile nickname={nickname} avatarUrl={avatarUrl} role={role} />
                    <UserTrack rating={rating} />
                </div>
            </div>
        </section>
    )
}
