import React, { useContext } from 'react';

// Hooks
import { API_KEY } from '../hooks/APIs';
import { GenreContext } from '../hooks/useContex';
import useMoviesFetch from '../hooks/useMoviesFetch';

// Components
import MovieItem from './MovieItem';

const MovieList = () => {
  const [genre] = useContext(GenreContext)   
  const {data: filteredMovies, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${API_KEY}&language=en-US&page=1&with_watch_monetization_types=flatrate`)
  const filteredMovieList =  filteredMovies?.results?.map(movie => <MovieItem movie={movie} key={movie.id}/> )

  if(!isLoaded) return <p>Loading ...</p>
    return(
      <>
        <h1>Movies Page</h1>
       {filteredMovieList}
   </>

    )
}

export default MovieList;