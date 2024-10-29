import React, { useState, useEffect } from 'react';
import HeroList from '../components/HeroList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

function HomePage() {
  const [heroes, setHeroes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const heroesPerPage = 10;

  const fetchHeroes = async () => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/search/${searchQuery}`);
      const data = await response.json();

      // Log the fetched data
      console.log(`Fetched search results for "${searchQuery}":`, data);

      if (data.length > 0) {
        setHeroes(data);
        setTotalResults(data.length);
      } else {
        setHeroes([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error('Error fetching heroes:', error);
      setHeroes([]);
    }
    setLoading(false);
  };

  // Fetch heroes on search query change
  useEffect(() => {
    if (searchQuery) {
      fetchHeroes();
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">SuperHero Explorer</h1>
      <SearchBar setSearchQuery={handleSearch} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <HeroList
          heroes={heroes.slice(
            (currentPage - 1) * heroesPerPage,
            currentPage * heroesPerPage
          )}
        />
      )}
      <Pagination
        totalHeroes={totalResults}
        heroesPerPage={heroesPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
