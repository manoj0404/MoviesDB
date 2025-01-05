import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-sm">Rating: {movie.vote_average}</p>
        <Link to={`/movie/${movie.id}`} className="text-blue-400">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
