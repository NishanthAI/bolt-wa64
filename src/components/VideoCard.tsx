import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (featured) {
    return (
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <img 
          src={video.coverImage} 
          alt={video.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{video.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-green-500 font-semibold">98% Match</span>
              <span>{video.releaseYear}</span>
              <span className="border border-gray-400 px-1 text-sm">{video.rating}</span>
              <span>{video.duration}</span>
            </div>
            <p className="text-gray-300 mb-6 line-clamp-3">{video.description}</p>
            <div className="flex space-x-4">
              <Link to={`/watch/${video.id}`} className="flex items-center bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-300 transition-colors">
                <Play size={20} className="mr-2" />
                Play
              </Link>
              <button className="flex items-center bg-gray-600/80 hover:bg-gray-500/80 px-6 py-2 rounded font-medium transition-colors">
                <Info size={20} className="mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative rounded-md overflow-hidden transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
    >
      <Link to={`/watch/${video.id}`}>
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full aspect-video object-cover"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="font-bold">{video.title}</h3>
            
            <div className="flex items-center space-x-2 mt-2 text-sm">
              <span className="text-green-500">{video.match}% Match</span>
              <span>{video.releaseYear}</span>
              <span className="border border-gray-400 px-1 text-xs">{video.rating}</span>
            </div>
            
            <div className="flex items-center space-x-2 mt-3">
              <button className="p-1.5 bg-white rounded-full text-black hover:bg-gray-300 transition-colors">
                <Play size={16} />
              </button>
              <button className="p-1.5 bg-gray-700/80 rounded-full hover:bg-gray-600/80 transition-colors">
                <Plus size={16} />
              </button>
              <button className="p-1.5 bg-gray-700/80 rounded-full hover:bg-gray-600/80 transition-colors">
                <ThumbsUp size={16} />
              </button>
            </div>
            
            <div className="mt-2 text-xs text-gray-300 line-clamp-2">
              {video.genres.join(' • ')}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default VideoCard;