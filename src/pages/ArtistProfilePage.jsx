import React, { useEffect } from 'react'
import ArtistProfileBlock from '../components/ArtistProfileBlock/index'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistOne } from '../redux/slices/artist'
import ArtistProfileSkeleton from '../components/ArtistProfileBlock/ArtistProfileSkeleton'

export default function ArtistProfilePage() {
  
      const params = useParams().id

      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(fetchArtistOne(params))
      }, [params])

      const ArtistData = useSelector((state) => state.artist.data)
      const ArtistStatus = useSelector((state) => state.artist.status === 'loading' ? true : false)

  return (
    <>
      {
        ArtistStatus ? <ArtistProfileSkeleton /> :
          <ArtistProfileBlock
            key={ArtistData._id}
            name={ArtistData.name}
            avatarUrl={ArtistData.avatarUrl}
            soundCloudUrl={ArtistData.soundCloudUrl}
            tracks={ArtistData.tracks}
            params={params}
          />
      }
    </>
  )
}
