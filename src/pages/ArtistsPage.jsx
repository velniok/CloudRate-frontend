import React, { useEffect } from 'react'
import ArtistsBlock from '../components/ArtistsBlock'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistAll } from '../redux/slices/artistAdmin'

export default function ArtistsPage() {

  const dispatch = useDispatch()
  const ArtistsData = useSelector((state) => state.artistAdmin.data)

  useEffect(() => {
    dispatch(fetchArtistAll())
  }, [])

  return (
    <>
      {
        ArtistsData !== null && <ArtistsBlock artists={ArtistsData} />
      }
    </>
  )
}
