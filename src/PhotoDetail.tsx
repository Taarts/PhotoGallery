import React from 'react'
import { useParams } from 'react-router-dom'
import gallery from './gallery.json'
import { PhotoList } from './PhotoList'
import { CategoryList } from './CategoryList'
import { parseMutationArgs } from 'react-query/types/core/utils'

export function PhotoDetail() {
  const params = useParams<{
    elements: 'pandas' | 'miniatures'
    photoIndex: string
  }>()

  return (
    <div>
      <h2>{gallery[params.elements!].title}</h2>
      <p>{gallery[params.elements!].description}</p>
      <img
        src={
          gallery[params.elements!].photos[Number(params.photoIndex)].imageURL
        }
        alt={gallery[params.elements!].title}
      />
    </div>
  )
}
