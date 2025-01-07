import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setMovie(movieResponse.data);

      const castResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(castResponse.data.cast.slice(0, 10)); // Limit to 10 cast members
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl text-white">{movie.title}</h1>
      <p className="text-gray-400">{movie.overview}</p>
      <h2 className="text-2xl text-white mt-6">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {cast.map((actor) => (
          <div key={actor.id} className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-white mt-2">{actor.name}</p>
            <p className="text-gray-400 text-sm">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleMovies;
