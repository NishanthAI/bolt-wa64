import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideos } from '../services/videoService';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import { ChevronDown } from 'lucide-react';

const BrowsePage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const navigate = useNavigate();
  
  const genres = [
    'All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
    'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'
  ];
  
  const years = ['All', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  
  useEffect(() => {
    setIsLoading(true);
    
    const params: any = {
      limit: 50
    };
    
    if (category && category !== 'all') {
      params.category = category;
    }
    
    if (selectedGenre !== 'all') {
      params.genre = selectedGenre;
    }
    
    if (selectedYear !== 'all') {
      params.year = selectedYear;
    }
    
    getVideos(params).then(data => {
      setVideos(data);
      setIsLoading(false);
    });
  }, [category, selectedGenre, selectedYear]);
  
  const handleCategoryChange = (newCategory: string) => {
    navigate(`/browse/${newCategory}`);
  };
  
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const getCategoryName = (): string => {
    if (!category) return 'All Content';
    
    const categoryMap: {[key: string]: string} = {
      'movies': 'Movies',
      'shows': 'TV Shows',
      'documentaries': 'Documentaries',
      'kids': 'Kids'
    };
    
    return categoryMap[category] || 'All Content';
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">{getCategoryName()}</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={category || 'all'}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="all">All Categories</option>
            <option value="movies">Movies</option>
            <option value="shows">TV Shows</option>
            <option value="documentaries">Documentaries</option>
            <option value="kids">Kids</option>
          </select>
          
          <button 
            onClick={toggleFilters}
            className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-md px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            <span>Filters</span>
            <ChevronDown 
              size={18} 
              className={`ml-2 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {isFilterOpen && (
        <div className="bg-gray-800 rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2 text-sm">Genre</label>
            <div className="flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre.toLowerCase())}
                  className={`text-sm py-1 px-3 rounded-full transition-colors ${
                    selectedGenre === genre.toLowerCase() 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2 text-sm">Release Year</label>
            <div className="flex flex-wrap gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year.toLowerCase())}
                  className={`text-sm py-1 px-3 rounded-full transition-colors ${
                    selectedYear === year.toLowerCase() 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No videos found matching your criteria</p>
          <button 
            onClick={() => {
              setSelectedGenre('all');
              setSelectedYear('all');
            }}
            className="mt-4 text-red-600 hover:text-red-500 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowsePage;