import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { asyncState } from "../../constants/common";
import formatDate from "../../lib/date";
import { getImageUrl } from "../../services/tmdb";
import MovieCard from "./components/MovieCard";
import { fetchMovies, getMovies, getMoviesStatus } from "./moviesSlice";

const MoviesList = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const status = useSelector(getMoviesStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="text-left">
      <h2>Upcoming Movies</h2>
      {status === asyncState.pending ? (
        <ul className="loading--horizontal">
          {Array.from({ length: 5 }).map((_, index) => (
            <li className="text-left">
              <Loading key={index} height={250} width={150} />
              <Loading
                key={index}
                height={20}
                width="80%"
                style={{ marginTop: "0.5rem" }}
              />
              <Loading
                key={index}
                height={20}
                width="60%"
                style={{ marginTop: "0.5rem" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="card__container flex">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
