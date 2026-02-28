import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'
import { useRef } from 'react'

function App() {

  const {movies} = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const {query} = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log({query})
  }


  return (
    <div className='page'>
      <header >
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" name="" id="" placeholder='Avengers, Star Wars, Crepusculo' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
