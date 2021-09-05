export const  API_KEY = `9c1bd422dc4c265552caa0ce7241a530`;

export const TRENDING_MOVIES= `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const POPULAR_MOVIES= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
export const GENRES= `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const POPULARITY= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`
export const TOP_RATED= `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const UPCOMING= `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const RELEASED_DATE= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&page=1&with_watch_monetization_types=flatrate`

   