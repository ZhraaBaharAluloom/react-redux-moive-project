import React from 'react';


// Hooks
import { imageApi } from '../hooks/APIs';
import useMoviesFetch from '../hooks/useMoviesFetch';

const ListOfMovies = ({ typeOfCategory, listTitle }) => {
  const {data: importedMovies, isLoaded} = useMoviesFetch(typeOfCategory)
  if(!isLoaded) return <p> Loading ... </p>
  return (
    <>
      <h1 className='headers'>{listTitle}</h1>
      <div className='cards'>
        {importedMovies.results.map(movie => {
          const movieName = movie.original_title || movie.original_name;
          return (
            <div key={movie.id} className='card' title={movieName} vote={movie.vote_average}>
              <img src={imageApi(movie.poster_path, 'low')} variant='top' alt='poster' />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ListOfMovies;