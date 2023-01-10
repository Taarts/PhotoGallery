import React from 'react'
import { Link, useParams } from 'react-router-dom'
import gallery from './gallery.json'
import { PhotoList } from './PhotoList'
import { CategoryList } from './CategoryList'
import { parseMutationArgs } from 'react-query/types/core/utils'

export function PhotoDetail() {
  const params = useParams<{
    elements: 'physical art' | 'pottery'
    photoIndex: string
    para: string
  }>()

  return (
    <div>
      <section>
        <nav>
          <Link to="/">Home</Link>
          <Link to={`/${params.elements}`}>Back</Link>
        </nav>
        <div id="detailImage">
          <h2>{gallery[params.elements!].title}</h2>
          <img
            src={
              gallery[params.elements!].photos[Number(params.photoIndex)]
                .imageURL
            }
            alt={gallery[params.elements!].title}
          />
          <p>
            {gallery[params.elements!].photos[Number(params.photoIndex)].para}
          </p>{' '}
        </div>
        {/* <p>{gallery[params.elements!].para}</p> */}
      </section>
    </div>
  )
}
