import './App.css'
import responseMovies from "./mocks/with-result.json"
import noResults from "./mocks/no-result.json"

function App() {
  const movies = responseMovies.Search // lugar de las peliculas
  const hasMovies = movies?.length > 0 // mostrar peliculas si movies(search) > 0
  
  
  
  return (
    <div className='page'>
      <header >
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input type="text" name="" id="" placeholder='Avengers, Star Wars, Crepusculo' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} atl={movie.Title} />
                    </li>

                  ))
                }
              </ul>
            ) : (
              <p> No se encontraron resultados de la busqueda</p>
            )
        }
      </main>
    </div>
  )
}

export default App
