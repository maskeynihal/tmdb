import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncState } from "../../constants/common";
import { fetchMovies, getMovies, getMoviesStatus } from "./moviesSlice";

const MoviesList = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const status = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      {status === asyncState.pending ? "Loading..." : null}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
