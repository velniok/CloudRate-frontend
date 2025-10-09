import React from 'react'
import Skeleton from '../Skeleton'

export default function TopTracksItemSkeleton() {
    return (
        <li className="top-tracks__card-item">
            <Skeleton className="top-tracks__card-avatar" />
            <Skeleton className="top-tracks__card-name" width="100px" height="17px" radius="4px" />
            <ul className="top-tracks__card-artist-list">
                <Skeleton className="top-tracks__card-artist-item" width="120px" height="17px" radius="4px" />
            </ul>
            <Skeleton className="top-tracks__card-rating rating-overall" />
        </li>
    )
}