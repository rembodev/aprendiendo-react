import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'
import { useEffect, useState, useRef } from 'react'



function useSearch() {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMovies({search: newSearch})

  }

  const handleSort = () => {
    setSort(!sort)
  }


  useEffect(() => {
    console.log('new getMovies receiver')
  }, [getMovies])

  return (
    <div className='page'>
      <header >
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} type="text" name="" id="" placeholder='Avengers, Star Wars, Crepusculo' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{
        loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
