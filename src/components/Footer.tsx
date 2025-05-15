import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <Film size={28} className="text-red-600" />
              <span className="text-xl font-bold">StreamFlix</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Your ultimate destination for premium streaming content. Watch unlimited movies, TV shows, and documentaries anytime, anywhere.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-300 font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
                <li><Link to="/browse" className="text-gray-400 hover:text-white text-sm transition-colors">Browse</Link></li>
                <li><Link to="/search" className="text-gray-400 hover:text-white text-sm transition-colors">Search</Link></li>
                <li><Link to="/profile" className="text-gray-400 hover:text-white text-sm transition-colors">Profile</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-300 font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/browse/movies" className="text-gray-400 hover:text-white text-sm transition-colors">Movies</Link></li>
                <li><Link to="/browse/shows" className="text-gray-400 hover:text-white text-sm transition-colors">TV Shows</Link></li>
                <li><Link to="/browse/documentaries" className="text-gray-400 hover:text-white text-sm transition-colors">Documentaries</Link></li>
                <li><Link to="/browse/kids" className="text-gray-400 hover:text-white text-sm transition-colors">Kids</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-300 font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-8">
          <p className="text-gray-500 text-sm text-center">© 2025 StreamFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;