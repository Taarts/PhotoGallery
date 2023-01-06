import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import gallery from './gallery.json'

export function Home() {
  return (
    <div>
      <h1>Pandas</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link to="pandas">
          <h3>{gallery.pandas.title}</h3>
        </Link>
        <p>{gallery.pandas.description}</p>
        <div>
          <Link to="pandas/">
            <img
              src={gallery.pandas.photos[0].imageURL}
              alt="pandas"
              width="100%"
              alt={gallery.pandas.photos[0].title}
            />
          </Link>
        </div>
      </section>
      <section>
        <Link to="miniatures">
          <h3>{gallery.miniatures.title}</h3>
        </Link>

        <p>{gallery.miniatures.description}</p>
        <div>
          <Link to="miniatures/">
            <img
              src={gallery.miniatures.photos[0].imageURL}
              alt="miniatures"
              width="100%"
              alt={gallery.miniatures.photos[0].title}
            />
          </Link>
        </div>
      </section>
      <Outlet />
    </div>
  )
}
