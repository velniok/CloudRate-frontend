import React from 'react'
import { Link } from 'react-router'

export default function TrackProfile({ name, avatarUrl, artist, ratingTrackOverall }) {
    return (
        <div className="track__profile">
            <img src={`${import.meta.env.VITE_API_URL}${avatarUrl}`} alt="" className="track__profile-avatar" />
            <div className="track__profile-info">
                <span className="track__profile-nickname">{name}</span>
                <a href="#!" className="track__profile-soundcloud">SoundCloud</a>
                {
                    ratingTrackOverall.avgRating === 0 ? <span className="track__profile-rating-none">Оценок на этот трек еще нет. Будь первым, кто ее поставит!</span>
                    :
                    <span className="track__profile-rating rating-overall">{ratingTrackOverall.avgRating}</span>
                }
                <ul className="track__profile-artist-list">
                    {
                        artist.map(e => (
                            <li className="track__profile-artist-item" key={e._id}>
                                <Link to={`/artist/${e._id}`} className='track__profile-artist-item'>
                                    <img src={`${import.meta.env.VITE_API_URL}${e.avatarUrl}`} alt="" className="track__profile-artist-avatar" />
                                    <span className="track__profile-artist-name">{e.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
