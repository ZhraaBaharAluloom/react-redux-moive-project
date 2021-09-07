export const  API_KEY = `9c1bd422dc4c265552caa0ce7241a530`;

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
// export const 

// Movies
export const TRENDING_MOVIES= `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const POPULAR_MOVIES= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const GENRES= `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const TOP_RATED= `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const NOW_PLAYING= `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const UPCOMING= `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

// Actors
export const ACTORS= `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
