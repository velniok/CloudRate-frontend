import React from 'react'

export default function Skeleton({ className, width, height, radius }) {

    const style = {
        width,
        height,
        borderRadius: radius
    }

  return (
    <div className={`${className} skeleton`} style={style}></div>
  )
}
