import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import useMoviesFetch from '../hooks/useMoviesFetch';
import "./Styles.css"

const imgPath = `https://www.themoviedb.org/t/p/w440_and_h660_face`
const  SingleMoviePage = () => {
     const {movieId} = useParams();

     let isLoaded = false;
     let movie = [] ;
     let actors= [];
     let similarMovies = [];
     let trailer=[];
     ({data: movie, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US`));
      ({data: actors, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US/cast`));
      ({data: similarMovies, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movie?.id}/similar?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US&page=1`));
      ({data: trailer, isLoaded} = useMoviesFetch(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=9c1bd422dc4c265552caa0ce7241a530&language=en-US`));
   
      const {title, overview, poster_path, release_date, vote_count, vote_average} =  movie || {};
      const  officialTrailer = trailer !== null ? trailer.results?.find(_trailer => _trailer.official): {};
      const director = actors !== null ? actors.crew?.find(_crew => _crew.job === "Director") : {};
   if(!isLoaded) return <p>Loading ...</p>
  return(
    <>
          {!isLoaded?    <p>Loading ...</p>:
          <div className="single-movie-wrapper">
          <Card style={{  display: "flex" , flexDirection: "row", width: "60%"}}>
          <Card.Img src={`${imgPath}${poster_path}`} alt={title}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            <p>{overview}</p>
          <p>{release_date}</p>
          <p>Votes: {vote_count}</p>
          <p>Rates: {vote_average}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        

          {/* Actors List */}
          <ul><h1>Actors: </h1>
              {actors?.cast?.slice(0, 5).map(actor => <li key={actor.id}> <Link to={`/actors/${actor.id}`}> {actor.name} </Link> <img src={`${imgPath}${actor.profile_path}`} alt={actor.name}/></li>)}
          </ul>
          <hr />

        {/* Director Name */}
        <h1>Director:{director?.name} </h1> 
          <img src={`${imgPath}${director?.profile_path}`}  alt={director?.name}/>

        <br/>
        {/* Related Movies */}
        <h1>Related Movies</h1>
        {similarMovies?.results?.slice(0, 5).map(_similarMovie => <li key={_similarMovie?.id}>{_similarMovie?.title}<img src={`${imgPath}${_similarMovie?.poster_path}`} alt={_similarMovie?.title}/></li>)}
        
       
        <iframe width="420" height="315" title="trailer"
        src={`https://www.youtube.com/embed/${officialTrailer?.key}`}>
          Trailer
        </iframe>
        </div> 
        
        }

  </>
  )
  
}




export default SingleMoviePage