import React from 'react'
import Skeleton from '../Skeleton'

export default function SearchItemSkeleton() {
    return (
        <li className="search__list-item">
            <Skeleton className="search__list-avatar" />
            <Skeleton className="search__list-name" width="150px" height="20px" radius="8px" />
        </li>
    )
}
