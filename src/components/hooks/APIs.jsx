// store
import { useSelector } from "react-redux";

export const  API_KEY = `9c1bd422dc4c265552caa0ce7241a530`;

export function discoveries(){
  const filters = useSelector(state => state.moviesFilter)
  let DISCOVERIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`;
  Object.keys(filters).forEach(key => {

    if(key === 'genre' && filters[key] !== 0) {
      DISCOVERIES += `&with_genres=${filters[key]}`;
    };

    if(key === 'sort_by') {
      DISCOVERIES += `&sort_by=${filters[key]}`;
    };
    // possible values for sort:
    // popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, 
    // primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, 
    // vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc

    if(key === 'page') {
      DISCOVERIES += `&page=${filters[key]}`;
    };

  })
  return DISCOVERIES;
}

// trailer videos
export function movieTrailer(id){
  const TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  return TRAILER;
}

export function youtubePlayer(key){
  const BASE_YOUTUBE = 'https://www.youtube.com/embed/';
  return BASE_YOUTUBE + key;
}

// images
export function imageApi(src, quality){
  const BASE_IMAGE = 'https://image.tmdb.org/t/p/';
  const qualityLevel = {
    low: 200,
    normal: 500,
    high: 1280
  }
  return `${BASE_IMAGE}/w${qualityLevel[quality]}${src}`
}

// Movies
export const TRENDING_MOVIES= `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const POPULAR_MOVIES= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const GENRES= `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const TOP_RATED= `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const NOW_PLAYING= `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const UPCOMING= `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

// Actors
export const ACTORS= `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
