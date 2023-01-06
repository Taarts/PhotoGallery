import React from 'react'
import gallery from './gallery.json'
import { Link } from 'react-router-dom'

type CategoryListProps = {
  title: string
}

const categories = Object.entries(gallery).map((element) => (
  <div className="CategoryList">
    <h3>
      <Link to={`/${element[0]}`}>{element[1].title}</Link>
    </h3>
    <img src={element[1].photos[0].imageURL} alt={element[0]} />
    <p>{element[1].description}</p>
    <hr />
  </div>
))
export function CategoryList(props: CategoryListProps) {
  return <div className="CategoryList">{categories}</div>
}
