import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
      setQuery('');
    }
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="text-black px-2 py-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="ml-2 bg-blue-500 px-3 py-1 text-white">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
