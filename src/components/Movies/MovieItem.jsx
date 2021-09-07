import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// APIs
import { imageApi } from '../hooks/APIs';


const MovieItem = ({movie}) => {
  const {title, id , poster_path} = movie
  return(
    <>
      <Link to={`/movies/${id}`} className='card' title={title} vote={movie.vote_average}> 
        <img src={imageApi(poster_path, 'low')} variant='top' alt='poster' />
      </Link>
    </>
  )
  
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    
  }).isRequired,
}

export default MovieItem