import React from 'react'
import { CategoryList } from './CategoryList'
// import { PhotoList } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'
import gallery from './gallery.json'
import { Routes, Route } from 'react-router-dom'

export function App() {
  let title = ''
  const categoryFromData = Object.entries(gallery).map(
    (element) => (title = element[0])
  )

  return (
    <div className="wrapper">
      <header>
        <h1>Things I like</h1>
        <h2>A photo gallery</h2>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<CategoryList title={title} />}></Route>
          <Route path="pandas" element={<pandas />}></Route>
          <Route path="*" element={<p>404: Not Found</p>}></Route>
        </Routes>
        {categoryFromData}
      </main>
      <footer></footer>
    </div>
  )
}
