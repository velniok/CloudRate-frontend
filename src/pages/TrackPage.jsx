import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import TrackBlock from '../components/TrackBlock'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrackOne } from '../redux/slices/track'
import TrackSkeleton from '../components/TrackBlock/TrackSkeleton'

export default function TrackPage() {

    const dispatch = useDispatch()

    let params = useParams().id

    const TrackData = useSelector((state) => state.track.data)

    useEffect(() => {
        dispatch(fetchTrackOne(params))
    }, [params])

  return (
    <>
        {
          TrackData ?
            <TrackBlock
              key={TrackData._id}
              name={TrackData.name}
              avatarUrl={TrackData.avatarUrl}
              id={TrackData._id}
              artist={TrackData.artist}
              ratingTrackOverall={TrackData.ratingTrack[0].overall}
              ratingTrackCriteria={TrackData.ratingTrack[0].criteria}
              reviews={TrackData.reviews}
            /> : <TrackSkeleton />
        }
    </>
  )
}
