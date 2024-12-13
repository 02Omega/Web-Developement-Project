import { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${location}`);
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        placeholder="Enter location" 
        className="p-2 border border-gray-300 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button 
        onClick={handleSearch} 
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
