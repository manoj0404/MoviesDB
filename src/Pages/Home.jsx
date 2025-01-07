import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MoviesCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <h2 className="text-3xl text-center text-white mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
