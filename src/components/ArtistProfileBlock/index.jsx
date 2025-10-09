import React from 'react'
import ArtistTrackItem from './ArtistTrackItem'

export default function ArtistProfileBlock({ avatarUrl, name, soundCloudUrl, tracks }) {

    return (
        <section className="artist">
            <div className="artist-wrapper">
                <div className="container">
                    <div className="artist__profile">
                        <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="artist__profile-avatar" />
                        <div className="artist__profile-info">
                            <span className="artist__profile-nickname">{name}</span>
                            <a href={soundCloudUrl} className="artist__profile-soundcloud">SoundCloud</a>
                        </div>
                    </div>
                    <div className="artist__track">
                        <h2 className="artist__track-title title">Треки артиста</h2>
                        <ul className="artist__track-list">
                            {
                                tracks.map(e => (
                                    <ArtistTrackItem key={e._id} name={e.name} avatarUrl={e.avatarUrl} id={e._id} artist={e.artist} ratingTrackOverall={e.ratingTrack[0].overall} />
                                ))  
                            }                       
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
