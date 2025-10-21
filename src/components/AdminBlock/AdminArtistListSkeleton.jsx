import React from 'react'
import Skeleton from '../Skeleton'

export default function AdminArtistListSkeleton() {
    return (
        <li className="admin-artist__list-item">
            <div className="admin-artist__list-bio">
                <Skeleton className="admin-artist__list-avatar" />
                <Skeleton className="admin-artist__list-nickname" width="120px" height="17px" radius="4px" />
            </div>
            <ul className="admin-artist__list-track-list">
                {
                    [...Array(3)].map((e) => {
                            return (
                                <Skeleton className="admin-artist__list-track-item" width="140px" height="37px" radius="8px" />
                            )
                    })
                }
            </ul>
            <div className="admin-artist__list-track-options">
                <button className="admin-artist__list-track-btn">Изменить</button>
                <button className="admin-artist__list-track-btn">Удалить</button>
            </div>
        </li>
    )
}
