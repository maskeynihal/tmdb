import formatDate from "../../../lib/date";
import { getImageUrl } from "../../../services/tmdb";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="card">
      <div className="card__poster">
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} />

        <div className="card__rating">{movie.vote_average}</div>
      </div>
      <div className="card__content">
        <div className="card__title">{movie.title}</div>
        <div className="card__sub-title">{formatDate(movie.release_date)}</div>
      </div>
    </div>
  );
};

export default MovieCard;
