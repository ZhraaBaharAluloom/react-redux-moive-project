import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const  MovieItem = ({movie}) => {
  const {title, id} = movie
  return(
    <>
  <Link to={`/movies/${id}`}>{title}</Link >

  </>
  )
  
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    
  }).isRequired,
}

export default MovieItem