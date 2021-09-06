import React, {useState} from 'react';
import useMoviesFetch from '../hooks/useMoviesFetch';
import { API_KEY } from '../hooks/APIs';


// Components
import HomeFilter from './HomeFilter';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrenddingMovies';
import ControlledCarousel from './Carousel';


const Home = () => {
  const [option, setOption] = useState("")
  const handleOptionsClick = (name) => {
    setOption(name)
  }

  const {data: selectedMoviesType, isLoaded } = useMoviesFetch(`https://api.themoviedb.org/3/movie/${option}?api_key=${API_KEY}&language=en-US&page=1`)

  const selectedMoviesList = option !== "" && 
  selectedMoviesType?.results?.map(_movie => <p key={_movie.id}>{_movie.title}</p>)
  
     
     
  if (!isLoaded) return <p> Loading ... </p>
  return(
  <>
    <ControlledCarousel />
    <HomeFilter option={option}
    handleOptionsClick={handleOptionsClick} 
    />
    {
      option !== "" ? selectedMoviesList
      :
      <>
      <PopularMovies />
      <TrendingMovies/>
      </>
    }
    
  </>
)}
export default Home;