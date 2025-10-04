import React from 'react'
import ArtistTrackItem from './ArtistTrackItem'

export default function ArtistProfileBlock({ avatarUrl, name, soundCloudUrl, tracks }) {

    return (
        <section className="artist">
            <div className="artist-wrapper">
                <div className="container">
                    <div className="artist-inner">
                        <div className="artist-left">
                            <img src={`${process.env.REACT_APP_API_URL}${avatarUrl}`} alt={name} className="artist-img" />
                            <div className="artist__info">
                                <h1 className="artist__info-name">{name}</h1>
                                <a href={soundCloudUrl} className="artist__info-soundcloud">SoundCloud артиста</a>
                            </div>
                        </div>
                        <div className="artist-right">
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
            </div>
        </section>
    )
}
