import React from 'react'
import ArtistiProfile from './ArtistiProfile'
import ArtistTrack from './ArtistTrack'

export default function ArtistProfileBlock({ avatarUrl, name, soundCloudUrl, tracks }) {

    return (
        <section className="artist">
            <div className="artist-wrapper">
                <div className="container">
                    <ArtistiProfile avatarUrl={avatarUrl} name={name} soundCloudUrl={soundCloudUrl} />
                    <ArtistTrack tracks={tracks} />
                </div>
            </div>
        </section>
    )
}
