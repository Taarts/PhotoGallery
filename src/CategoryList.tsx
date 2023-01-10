import React from 'react'
import gallery from './gallery.json'
import { Link } from 'react-router-dom'

type CategoryListProps = {
  title: string
}

const categories = Object.entries(gallery).map((element) => (
  <div>
    <h3>
      <Link to={`/${element[0]}`}>{element[1].title}</Link>
    </h3>
    <Link to={`/${element[0]}`}>
      <img src={element[1].photos[0].imageURL} alt={element[0]} />
    </Link>
    <p>{element[1].description}</p>
  </div>
))
export function CategoryList(props: CategoryListProps) {
  return <div className="CategoryList">{categories}</div>
}
