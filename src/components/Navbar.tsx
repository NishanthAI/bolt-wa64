import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, Search, User, Menu, X, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  isTransparent: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-black/95'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Film size={28} className="text-red-600" />
            <span className="text-xl font-bold">StreamFlix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-red-500 transition-colors">Home</Link>
            <Link to="/browse" className="text-sm font-medium hover:text-red-500 transition-colors">Browse</Link>
            <Link to="/browse/movies" className="text-sm font-medium hover:text-red-500 transition-colors">Movies</Link>
            <Link to="/browse/shows" className="text-sm font-medium hover:text-red-500 transition-colors">TV Shows</Link>
          </nav>

          {/* Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm w-40 focus:w-56 transition-all duration-300 focus:outline-none"
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search size={16} />
              </button>
            </form>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-sm font-bold">{user?.name.charAt(0).toUpperCase()}</span>
                  </div>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700">Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-red-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-red-700 transition-colors">Sign In</Link>
            )}

            {isAuthenticated && (
              <button className="relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 py-4 px-4`}>
        <nav className="flex flex-col space-y-4 mb-4">
          <Link to="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/browse" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Browse</Link>
          <Link to="/browse/movies" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Movies</Link>
          <Link to="/browse/shows" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>TV Shows</Link>
        </nav>
        
        <form onSubmit={handleSearch} className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm w-full focus:outline-none"
          />
          <button type="submit" className="absolute right-3 top-2.5">
            <Search size={16} />
          </button>
        </form>

        {isAuthenticated ? (
          <div className="flex flex-col space-y-2">
            <Link to="/profile" className="flex items-center space-x-2 text-sm" onClick={() => setIsMenuOpen(false)}>
              <User size={16} />
              <span>Profile</span>
            </Link>
            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-sm">
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium block text-center" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;