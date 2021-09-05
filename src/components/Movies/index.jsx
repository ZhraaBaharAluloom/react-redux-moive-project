import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchFilteredMovies } from '../../storage/reducer';

// Hooks
import { API_KEY } from '../hooks/APIs';
import useMoviesFetch from '../hooks/useMoviesFetch';

// Components
import MovieItem from './MovieItem';

const MovieList = () => {
  const genre = useSelector(state => state.moviesFilter.genre)
   const dispatch = useDispatch()
  const {data: filteredMovies, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${API_KEY}&language=en-US&page=1&with_watch_monetization_types=flatrate`)
  const filteredMovieList =  filteredMovies?.results?.map(movie => <MovieItem movie={movie} key={movie.id}/> )

  dispatch(fetchFilteredMovies(filteredMovies))

  if(!isLoaded) return <p>Loading ...</p>
    return(
      <>
        <h1>Movies Page</h1>
       {filteredMovieList}
   </>

    )
}

export default MovieList;