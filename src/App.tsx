import React from 'react'
import { CategoryList } from './CategoryList'
// import { Pandas } from './pages/pandas'
import gallery from './gallery.json'
import { Routes, Route, Link } from 'react-router-dom'
import { PhotoList } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'

export function App() {
  let title = ''
  const categoryFromData = Object.entries(gallery).map(
    (element) => (title = element[0])
  )

  return (
    <div className="wrapper">
      <header>
        <Link to="/">
          <h1>Things I like</h1>
        </Link>
        <h2>A photo gallery</h2>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<CategoryList title={title} />}></Route>
          <Route path="/:elements" element={<PhotoList />} />
          <Route path="/:elements/:photoIndex" element={<PhotoDetail />} />
          <Route path="*" element={<p>404: Not Found</p>}></Route>
        </Routes>
      </main>
      <footer>by Amheiser</footer>
    </div>
  )
}
