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

const initValue = {
  user: {},
  isAuthenticated: false,
  moviesFilter: {
    genre: 0,
    movies: [],
    actors: [],
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
      return { ...state, moviesFilter: { ...state.moviesFilter, movies: action.payload || [] } };
    case 'actors/fetch':
      return { ...state, moviesFilter: { ...state.moviesFilter, actors: action.payload || [] } };
    default:
      return state;
  }
}

export default reducer;
