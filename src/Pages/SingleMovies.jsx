import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/api';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((response) => setMovie(response.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mt-4"
      />
    </div>
  );
};

export default SingleMovie;
