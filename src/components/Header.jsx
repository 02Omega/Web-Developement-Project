import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../services/api'; // Import Axios instance for API calls

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        // Fetch search results from the backend
        const { data } = await api.get('/listings/search', {
          params: { query: searchQuery },
        });
        // Navigate to the search results page with the results passed as state
        navigate('/search-results', { state: { results: data.listings } });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Real Estate Platform" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                         bg-blue-500 text-white p-2 rounded-full"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link 
              to="/host" 
              className="text-gray-700 hover:text-gray-900"
            >
              Become a Host
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
