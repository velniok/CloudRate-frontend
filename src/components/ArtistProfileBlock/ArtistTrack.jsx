import React from 'react'
import ArtistTrackItem from './ArtistTrackItem'

export default function ArtistTrack({ tracks }) {
    return (
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
    )
}
