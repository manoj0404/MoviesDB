import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Navbar from './components/Navbar';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/Upcoming';
import SingleMovie from './Pages/SingleMovies';
 import SearchResults from './Pages/SerachResults';
 import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
};

export default App;
