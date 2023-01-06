import React from 'react'
import { Link, useParams } from 'react-router-dom'
import gallery from './gallery.json'
import { PhotoDetail } from './PhotoDetail'
import { CategoryList } from './CategoryList'

export function PhotoList() {
  const params = useParams<{
    elements: 'pandas' | 'miniatures'
    photoIndex: string
  }>()
  console.log(params)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <section>
        <h2>{gallery[params.elements!].title}</h2>
        <div>
          {gallery[params.elements!].photos.map((photo, index) => {
            return (
              <Link to={`./${index}`} key={index}>
                <img src={photo.imageURL} width="100%" />
                <div>{photo.title}</div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
