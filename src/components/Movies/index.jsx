import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchFilteredMovies } from '../../storage/reducer';

// Hooks
import { API_KEY, POPULAR_MOVIES } from '../hooks/APIs';
import useMoviesFetch from '../hooks/useMoviesFetch';

// Components
import MovieItem from './MovieItem';

const MovieList = () => {
  const genre = useSelector(state => state.moviesFilter.genre)
   const dispatch = useDispatch()

   let isLoaded = false; 
   let Movies =[]
   let filteredMovies =[];
   ({data: filteredMovies, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${API_KEY}&language=en-US&page=1&with_watch_monetization_types=flatrate`));
   ({data: Movies, isLoaded} = useMoviesFetch(POPULAR_MOVIES));
  const filteredMovieList =  filteredMovies?.results?.map(movie => <MovieItem movie={movie} key={movie.id}/> )
  const MoviesList =  Movies?.results?.map(movie => <MovieItem movie={movie} key={movie.id}/> )
  console.log("🚀 ~ file: index.jsx ~ line 23 ~ MovieList ~ MoviesList", MoviesList)

  dispatch(fetchFilteredMovies(Movies))

  if(!isLoaded) return <p>Loading ...</p>
    return(
      <>
        <h1>Movies Page</h1>
      {genre === 0?  filteredMovieList : MoviesList }
     </>

    )
}

export default MovieList;