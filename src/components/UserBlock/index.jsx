import React from 'react'
import UserProfile from './UserProfile'
import UserTrack from './UserTrack'

export default function UserBlock({ name, avatarUrl, role, rating, id }) {

    return (
        <section className="user">
            <div className="user-wrapper">
                <div className="container">
                    <UserProfile name={name} avatarUrl={avatarUrl} role={role} id={id} />
                    <UserTrack rating={rating} />
                </div>
            </div>
        </section>
    )
}
