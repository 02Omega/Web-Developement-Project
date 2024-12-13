import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-xl">Real Estate</Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/listings" className="text-white">Listings</Link>
        <Link to="/about" className="text-white">About</Link>
      </div>
      <div className="text-white">User Menu</div>
    </nav>
  );
};

export default Navbar;
