import React from 'react';
import PropTypes from 'prop-types';


// Hooks
// import { POPULAR_MOVIES } from '../hooks/APIs';
// import useMoviesFetch from '../hooks/useMoviesFetch';


const PopularMovies = ({selectedMoviesType}) => {
console.log("🚀 ~ file: PopularMovies.jsx ~ line 11 ~ PopularMovies ~ selectedMoviesType", selectedMoviesType)

    
    return (
        <>
             <h1>Popular Movies</h1>
            {selectedMoviesType.map(movie => <p key={movie.id}>{movie.title}</p>)}
        </>
    );
};

PopularMovies.propTypes = {
    selectedMoviesType:  PropTypes.arrayOf(PropTypes.object).isRequired   

  }
  
export default PopularMovies;