import React from 'react'

export default function ArtistiProfile({ avatarUrl, name, soundCloudUrl }) {
    return (
        <div className="artist__profile">
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="artist__profile-avatar" />
            <div className="artist__profile-info">
                <span className="artist__profile-nickname">{name}</span>
                <a href={soundCloudUrl} className="artist__profile-soundcloud">SoundCloud</a>
            </div>
        </div>
    )
}
