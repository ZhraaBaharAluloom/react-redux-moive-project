import React from 'react';
import PropTypes from 'prop-types';


const  MovieItem = ({movie}) => {
  const {title} = movie
  return(
    <>
  <p>{title}</p>

  </>
  )
  
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
    
  }).isRequired,
}

export default MovieItem