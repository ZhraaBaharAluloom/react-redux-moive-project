import React from 'react';

// Store
import { useDispatch } from 'react-redux';
import { fetchActors } from '../../storage/reducer';

// Hooks
import { ACTORS } from '../hooks/APIs';
import useMoviesFetch from "../hooks/useMoviesFetch"

// Components
import ActorsItem from "./ActorsItem"

const  Actors = () => {
 const dispatch = useDispatch()

const {data: actors, isLoaded} = useMoviesFetch(ACTORS)

dispatch(fetchActors(actors))

if(!isLoaded) return <p>Loading</p>
return(
    <>
        <h1>Actors</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {actors.results.map(actor => <ActorsItem actor={actor}  key={actor.id}/>)}
        </div>
    </>
)

}


export default Actors