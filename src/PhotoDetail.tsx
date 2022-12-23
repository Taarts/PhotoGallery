import React from 'react'

type PhotoProps = {
  title: string
  description: string
  photos: { title: string; imageURL: string }
}

export function PhotoDetail(props: PhotoProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.photos.imageURL} alt={props.title} />
    </div>
  )
}
