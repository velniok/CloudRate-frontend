import React from 'react'
import Skeleton from '../Skeleton'

export default function AdminArtistListSkeleton() {
    return (
        <li className="admin-track__list-item">
            <div className="admin-track__list-bio">
                <Skeleton className="admin-track__list-avatar" />
                <Skeleton className="admin-track__list-name" width="120px" height="17px" radius="4px" />
            </div>
            <ul className="admin-track__list-owner-list">
                {
                    [...Array(3)].map((e) => {
                        return (
                            <Skeleton className="admin-track__list-owner-item" width="140px" height="37px" radius="8px" />
                        )
                    })
                }
            </ul>
            <div className="admin-track__list-options">
                <button className="admin-track__list-btn">Изменить</button>
                <button className="admin-track__list-btn">Удалить</button>
            </div>
        </li>
    )
}
