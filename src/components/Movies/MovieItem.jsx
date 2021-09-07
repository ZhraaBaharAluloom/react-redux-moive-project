import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const  MovieItem = ({movie}) => {
  const {title, id , poster_path} = movie
  return(
    <>
        <div> 
          <Link to={`/movies/${id}`}>{title}</Link>
          <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt={title}/>
        </div>


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