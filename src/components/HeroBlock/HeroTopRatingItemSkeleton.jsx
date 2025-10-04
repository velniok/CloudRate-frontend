import React from 'react'
import { Link } from 'react-router'
import Skeleton from '../Skeleton'

export default function HeroTopRatingItemSkeleton() {
  return (
    <li className="hero__top-item">
        <Skeleton className="hero__top-avatar" />
        <Skeleton className="hero__top-name" height="20px" width="100px" radius="8px" />
        <Skeleton className="hero__top-artist-list" width="130px" height="25px" radius="8px"  />
        <Skeleton className="hero__top-artist-list" width="130px" height="25px" radius="8px"  />
        <Skeleton className="hero__top-artist-list" width="130px" height="25px" radius="8px"  />
    </li>
  )
}