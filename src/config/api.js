export default {
  base: import.meta.env.VITE_APP_TMDB_API,
  key: import.meta.env.VITE_APP_TMDB_API_KEY,

  endpoints: {
    movies: {
      upcoming: "/movie/upcoming",
    },
  },
};
