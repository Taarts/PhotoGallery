import React from 'react'
import { Link, useParams } from 'react-router-dom'
import gallery from './gallery.json'
import { PhotoDetail } from './PhotoDetail'
import { CategoryList } from './CategoryList'

export function PhotoList() {
  const params = useParams<{
    elements: 'physical art' | 'pottery'
    photoIndex: string
    para: string
  }>()
  console.log(params)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <section>
        <h3>{gallery[params.elements!].title}</h3>
        <div>
          {gallery[params.elements!].photos.map((photo, index) => {
            return (
              <div className="cardOne" key={index}>
                <Link to={`./${index}`} key={index}>
                  <img
                    className="cardImage"
                    src={photo.imageURL}
                    width="100%"
                  />
                  <div className="text-placement">{photo.title}</div>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
