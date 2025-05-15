import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchVideos } from '../services/videoService';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import { Search as SearchIcon } from 'lucide-react';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(!!initialQuery);
  
  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setSearched(true);
    
    searchVideos(query).then(results => {
      setSearchResults(results);
      setIsLoading(false);
    });
  };
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search</h1>
      
      {/* Search Form */}
      <form onSubmit={onSubmit} className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies, TV shows, actors..."
            className="w-full bg-gray-800 border border-gray-700 py-3 px-4 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <div className="absolute left-4 top-3.5 text-gray-400">
            <SearchIcon size={20} />
          </div>
          <button
            type="submit"
            className="absolute right-3 top-2.5 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      
      {/* Results */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : searched ? (
        <>
          {searchResults.length > 0 ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Search Results ({searchResults.length})</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchResults.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl mb-2">No results found for "{searchQuery}"</p>
              <p className="text-gray-400">Try adjusting your search terms or browse our categories</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p>Search for your favorite movies, TV shows, actors, or directors</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;