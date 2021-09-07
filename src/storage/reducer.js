export function setUser(user) {
  return {
    type: 'user/add',
    payload: user,
  };
}

export function authStatus(status) {
  return {
    type: 'auth/status',
    payload: status,
  };
}

export function setGenres(genre) {
  return {
    type: 'genre/set',
    payload: genre,
  };
}

export function fetchFilteredMovies(_movies) {
  return {
    type: 'movies/fetch',
    payload: _movies,
  };
}

export function fetchActors(actors) {
  return {
    type: 'actors/fetch',
    payload: actors,
  };
}

export function setSearch(search){
  return {
    type: 'search/set',
    payload: search
  }
}

export function setPage(pageNumber){
  return {
    type: 'page/set',
    payload: pageNumber
  }
}

export function setSortBy(sortBy){
  return {
    type: 'sortBy/set',
    payload: sortBy
  }
}

const initValue = {
  user: {},
  search: '',
  isAuthenticated: false,
  movies: [],
  actors: [],
  moviesFilter: {
    genre: 0,
    sort_by: 'popularity.desc',
    page: 1
  },
};

function reducer(state = initValue, action) {
  switch (action.type) {
    case 'user/add':
      return { ...state, user: action.payload };
    case 'auth/status':
      return { ...state, isAuthenticated: action.payload };
    case 'genre/set':
      return { ...state, moviesFilter: { ...state.moviesFilter, genre: action.payload } };
    case 'movies/fetch':
      return { ...state, movies: action.payload };
    case 'actors/fetch':
      return { ...state, actors: action.payload };
    case 'search/set':
      return { ...state, search: action.payload };
    case 'page/set':
      return { ...state, moviesFilter: { ...state.moviesFilter, page: action.payload } };
    case 'sortBy/set':
      return { ...state, moviesFilter: { ...state.moviesFilter, sort_by: action.payload } };
    default:
      return state;
  }
}

export default reducer;
