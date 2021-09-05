import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { GenreContext } from '../hooks/useContex';
import useMoviesFetch from '../hooks/useMoviesFetch';


const  SingleMoviePage = () => {
    const {movieId} = useParams()
    const {filteredMovies} = useContext(GenreContext)
    const movie = filteredMovies?.results?.find(_movie => _movie.id === +movieId)
    const {title, original_language, overview, poster_path, release_date} = movie && movie

    const {data: actors, isLoaded } = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US/cast`)
    console.log("🚀 ~ file: SignleMovie.jsx ~ line 15 ~ SingleMoviePage ~ actors", actors)
    if(!isLoaded) return <p> Loading ... </p>
return (
        <>
      <p>{title}</p>
      <p>{original_language}</p>
      <p>{overview}</p>
      <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`} alt={title} />
      <p>{release_date}</p>
      </>
      )
}


SingleMoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string, original_language: PropTypes.string,
 overview: PropTypes.string, poster_path: PropTypes.string, release_date: PropTypes.string,
  }).isRequired,
}

export default SingleMoviePage