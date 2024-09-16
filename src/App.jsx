import { useState } from 'react'
import './App.css'
import Header from './Header'
import { movies } from './Data'
import Movie from './Movie'

function App() {
  return (
    <div>
      <Header />
      {
        movies?.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))
      }
    </div>
  )
}

export default App
