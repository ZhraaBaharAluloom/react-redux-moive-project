import React from 'react';

// styles
import './style.css';

// Components
// import HomeFilter from './HomeFilter';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrenddingMovies';
import ControlledCarousel from './Carousel';


const Home = () => (
  <>
    {/* <HomeFilter/> */}
    <ControlledCarousel />
    <PopularMovies />
    <TrendingMovies/>
  </>
)
export default Home;