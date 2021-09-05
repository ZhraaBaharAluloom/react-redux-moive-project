import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const  MovieItem = ({movie}) => {
  const {title, id} = movie
  return(
    <>
    <p>  <Link to={`/movies/${id}`}>{title}</Link>
</p>

  </>
  )
  
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number
    
  }).isRequired,
}

export default MovieItem