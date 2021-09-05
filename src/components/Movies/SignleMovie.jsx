import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import useMoviesFetch from '../hooks/useMoviesFetch';

const imgPath = `https://www.themoviedb.org/t/p/w440_and_h660_face`
const  SingleMoviePage = () => {
    //  Movie Id
     const {movieId} = useParams()
    //  getting the list of filtered movies from the store
     const filteredMovies = useSelector(state => state.moviesFilter.movies.results)

     // mapping over filtered movies and find the movie that its id === to the pressed id
     const movie = filteredMovies?.find(_movie => _movie.id === +movieId)
    //  destructure movie items
    //  fetching actors and similar movies that belong to this movie
    const {data: actors, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US/cast`)
    const {data: similarMovies} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movie?.id}/similar?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US&page=1`)
    
    if(!isLoaded) return <p>Loading ...</p>
    const director = actors?.crew?.find(_crew => _crew.job === "Director")
    const {title, original_language, overview, poster_path, release_date, vote_count} = movie
  return(
    <>
  {!isLoaded? 
   <p>Loading ...</p>:
   <>
  <p>{title}</p>
  <p>{original_language}</p>
  <p>{overview}</p>
  <img  src={`${imgPath}${poster_path}`} alt={title}/>
  <p>{release_date}</p>
  <p>Votes: {vote_count}</p>
  <hr />

  {/* Actors List */}
  <ul><h1>Actors: </h1>
      {actors.cast.slice(0, 5).map(actor => <li key={actor.id}>{actor.name}<img src={`${imgPath}${actor.profile_path}`} alt={actor.name}/></li>)}
  </ul>
  <hr />

 {/* Director Name */}
 <h1>Director:{director.name} </h1> 
  <img src={`${imgPath}${director.profile_path}`}  alt={director.name}/>

<br/>
 {/* Related Movies */}
<h1>Related Movies</h1>
{similarMovies?.results?.slice(0, 5).map(_similarMovie => <li key={_similarMovie.id}>{_similarMovie.title}<img src={`${imgPath}${_similarMovie.poster_path}`} alt={_similarMovie.title}/></li>)}
 </> }
  </>
  )
  
}


export default SingleMoviePage