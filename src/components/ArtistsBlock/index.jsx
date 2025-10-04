import React from 'react'
import ArtistsItem from './ArtistsItem'

export default function ArtistsBlock({ artists }) {

  return (
    <section className="artists">
      <div className="artists-wrapper">
        <div className="container">
          <ul className="artists__list">
            {
              artists.map((artists) => {
                return <ArtistsItem artists={artists} key={artists._id} />
              })
            } 
          </ul>
        </div>
      </div>
    </section>
  )
}
