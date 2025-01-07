import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MoviesDB
        </Link>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/top-rated" className="hover:text-blue-400">Top Rated</Link>
          <Link to="/upcoming" className="hover:text-blue-400">Upcoming</Link>
        </nav>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 text-black rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
