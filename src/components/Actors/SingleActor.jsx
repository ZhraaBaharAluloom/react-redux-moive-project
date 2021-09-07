import React from 'react';
import { useParams } from 'react-router';

// Hooks
import useMoviesFetch from "../hooks/useMoviesFetch"
import {API_KEY} from "../hooks/APIs"

const  SingleActorPage = () => {
  const {actorId} = useParams();

  let isLoaded = false;
  let singleActor = {};
  let singleActorMovies = [];

  // Fetched Actor details and a list of movies that the actor participated i
  ({data: singleActor, isLoaded } = useMoviesFetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=en-US`));
  ({data: singleActorMovies, isLoaded } = useMoviesFetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`));

  const {biography, birthday, gender , name, popularity, profile_path, deathday } = singleActor || {};

  if(!isLoaded) return <p>Loading ...</p>;
  return(
  <>
    <h1>Single Actor Page</h1>
    <p>Name: {name}</p>
    <img src={`https://www.themoviedb.org/t/p/w470_and_h470_face${profile_path}`} alt={name}/>
    <p>Birth date: {birthday=== null ? "🤷🏽‍♀️" : birthday}  { deathday === null ? "" : - deathday} </p>
    <p>Gender: {gender === 1 ? "Female" : "Male"}</p>
    <p>Bio: {biography}</p>
    <p>Popularity: {popularity}</p>
    <div>
      <h1>A List of movies that the actor participated in.</h1>
      {singleActorMovies?.cast?.map(movie => <div key={movie?.id}>{movie?.title} as {movie?.character}</div>) }

    </div>
  </>
  )
}


export default SingleActorPage;