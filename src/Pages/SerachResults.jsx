import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MoviesCard";
import axios from "axios";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = new URLSearchParams(useLocation().search).get("query"); // Get the query parameter from the URL

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`
        );
        setSearchResults(response.data.results);
      } catch (err) {
        setError("Failed to fetch search results");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]); // Re-run the effect when query changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-white">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-white">{error}</span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center text-white mb-6">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.length === 0 ? (
          <div className="text-white text-center w-full">No movies found</div>
        ) : (
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
