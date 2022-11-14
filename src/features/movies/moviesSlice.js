import { toastError } from "../../lib/toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUpComingMovies } from "../../services/movies.services";
import { asyncState } from "../../constants/common";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const upcomingMovies = await fetchUpComingMovies();

    return upcomingMovies;
  } catch (error) {
    toastError(error.response.data.status_message);
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = asyncState.fulfilled;

      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = asyncState.pending;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = asyncState.rejected;

      state.error = action.error.message;
    });
  },
});

export const getMovies = ({ movies }) => movies.movies;
export const getMoviesStatus = ({ movies }) => movies.status;

export default movieSlice.reducer;
