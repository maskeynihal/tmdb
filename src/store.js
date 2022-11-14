import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import moviesReducer from "./features/movies/moviesSlice";
import searchKeywordReducer from "./features/search/searchSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    searchKeywords: searchKeywordReducer,
  },
});
