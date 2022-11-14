export default {
  base: import.meta.env.VITE_APP_TMDB_API,
  key: import.meta.env.VITE_APP_TMDB_API_KEY,
  image: import.meta.env.VITE_APP_TMDB_IMAGE_URL,
  endpoints: {
    movies: {
      upcoming: "/movie/upcoming",
      trending: "/movie/trending",
    },
    search: {
      keyword: "/search/multi",
    },
  },
};
