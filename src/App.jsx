import { useState } from 'react'
import './App.css'
import Header from './Header'
import { movies } from './Data'
import Movie from './Movie'
import './css/Movie.css'

function App() {
  return (
    <div>
      <Header />
      <div className='movie-main'>
        {
          movies?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>

    </div>
  )
}

export default App
