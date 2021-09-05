import React from 'react';
import HomeFilter from './HomeFilter';

// Components
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrenddingMovies';


const Home = () => (
  <>
    <HomeFilter/>
    <PopularMovies />
    <TrendingMovies/>
  </>
)
export default Home;