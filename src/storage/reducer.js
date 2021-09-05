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

const initValue = {
  user: {},
  isAuthenticated: false,
  moviesFilter: {
    genre: 0,
    movies: [],
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
      return { ...state, moviesFilter: { ...state.moviesFilter, movies: action.payload || null } };
    default:
      return state;
  }
}

export default reducer;
