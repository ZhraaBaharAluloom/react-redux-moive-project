import React from 'react';


// Components
import ControlledCarousel from './Carousel';
import ListOfMovies from './listOfMovies';

// API links
import { TOP_RATED, POPULAR_MOVIES, TRENDING_MOVIES, NOW_PLAYING, UPCOMING } from '../hooks/APIs';


const Home = () => {
  console.log()
  return(
  <>
    <ControlledCarousel />
    <div style={{margin: '0 10%'}}>
      <ListOfMovies typeOfCategory={POPULAR_MOVIES} listTitle='Popular Movies' />
      <ListOfMovies typeOfCategory={TRENDING_MOVIES} listTitle='Trending Movies' />
      <ListOfMovies typeOfCategory={TOP_RATED} listTitle='Top Rated Movies' />
      <ListOfMovies typeOfCategory={NOW_PLAYING} listTitle='Now Playing Movies' />
      <ListOfMovies typeOfCategory={UPCOMING} listTitle='Upcoming Movies' />
    </div>
  </>
)}
export default Home;