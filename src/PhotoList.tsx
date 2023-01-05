import React from 'react'
import { CategoryList } from './CategoryList'
import { PhotoDetail } from './PhotoDetail'
import gallery from './gallery.json'
import { Link } from 'react-router-dom'

type PhotoListType = {
  element: string
}

export function PhotoList(props: string) {
  const pictures = Object.entries(gallery).map((element) => (
    <div className="PhotoList">
      <h2>
        <Link to={`/${element[0]}`} />
        {element[1].title}
      </h2>
      <p>{element[1].description}</p>
      <img src={element[1].photos[0].imageURL} alt={element[0]} />
    </div>
  ))
  return <div className="PhotoList">{pictures}</div>
}
