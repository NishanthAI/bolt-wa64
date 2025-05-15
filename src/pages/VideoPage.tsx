import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoRow from '../components/VideoRow';
import { getVideoById, getRelatedVideos } from '../services/videoService';
import { Video } from '../types';
import { ThumbsUp, ThumbsDown, Plus, Share, ChevronDown } from 'lucide-react';

const VideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    if (videoId) {
      // Get video details
      getVideoById(videoId).then(setVideo);
      
      // Get related videos
      getRelatedVideos(videoId).then(setRelatedVideos);
    }
  }, [videoId]);
  
  if (!video) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Video Player */}
      <VideoPlayer 
        videoId={video.id}
        title={video.title}
        src={video.videoUrl}
        poster={video.coverImage}
      />
      
      {/* Video Info */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
              <span className="mr-3">{video.releaseYear}</span>
              <span className="mr-3 border border-gray-600 px-1">{video.rating}</span>
              <span className="mr-3">{video.duration}</span>
              <span className="mr-3">Quality: {video.quality}</span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                <Plus size={18} />
                <span>My List</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-transparent border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                <ThumbsUp size={18} />
                <span>Rate</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-transparent border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                <Share size={18} />
                <span>Share</span>
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-md p-4">
              <div className="flex items-start justify-between">
                <div className="pr-8">
                  <div className="mb-2">
                    <span className="text-green-500 font-semibold mr-2">98% Match</span>
                  </div>
                  
                  <p className={`text-gray-300 ${!showDetails && 'line-clamp-2'}`}>
                    {video.description}
                  </p>
                </div>
                
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
              
              {showDetails && (
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">
                      <span className="text-gray-500">Cast:</span> {video.cast.join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">
                      <span className="text-gray-500">Director:</span> {video.director}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">
                      <span className="text-gray-500">Genres:</span> {video.genres.join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="mt-8">
            <VideoRow title="More Like This" videos={relatedVideos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPage;