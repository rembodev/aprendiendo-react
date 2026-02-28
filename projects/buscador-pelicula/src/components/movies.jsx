function ListOfMovies({ movies }) {
  return (
    <ul>
      {
      movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} atl={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResult() {
  return (
  <p> No se encontraron resultados de la busqueda</p>
  )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0; // mostrar peliculas si movies(search) > 0

  return (
    hasMovies
     ? <ListOfMovies movies={movies} /> 
     : <NoMoviesResult />
    )
}
