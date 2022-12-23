import React from 'react'
import { CategoryList } from './categoryList'
// import { PhotoList } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'
import gallery from './gallery.json'

type CategoryListProps = {
  title: string
  description: string
  photo: [string]
}

export function App() {
  const categoryFromData = Object.keys(gallery).map(
    (element) => (
      <CategoryList title={element} />
      
      // <CategoryList title={element.object.title} description={element.pandas.description}/>
    ),
    []
  )

  const objectsFromData = Object.values(gallery).map(
    (element) => (
      <PhotoDetail title={element.object.title} description={element.pandas.description} photos={element.photos}/>

  return (
    <div>
      <h1>Things I like</h1>
      <h2>A photo gallery</h2>
      <main>{categoryFromData}</main>
      <footer></footer>
    </div>
  )
}
