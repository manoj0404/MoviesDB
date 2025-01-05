import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/api';
import MovieCard from '../components/MoviesCard';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;
