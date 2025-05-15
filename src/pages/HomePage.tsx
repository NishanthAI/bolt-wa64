import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoRow from '../components/VideoRow';
import { Video } from '../types';
import { getVideos, getFeaturedVideo } from '../services/videoService';
import { useAuth } from '../context/AuthContext';
import { getRecommendedVideos } from '../services/recommendationService';

const HomePage: React.FC = () => {
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);
  const [trendingVideos, setTrendingVideos] = useState<Video[]>([]);
  const [newReleases, setNewReleases] = useState<Video[]>([]);
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);
  const [continueWatching, setContinueWatching] = useState<Video[]>([]);
  
  const { isAuthenticated, user } = useAuth();
  
  useEffect(() => {
    // Get featured video
    getFeaturedVideo().then(setFeaturedVideo);
    
    // Get trending videos
    getVideos({ category: 'trending', limit: 10 }).then(setTrendingVideos);
    
    // Get new releases
    getVideos({ category: 'new', limit: 10 }).then(setNewReleases);
    
    // Get continue watching list from localStorage
    if (isAuthenticated) {
      const allVideos = JSON.parse(localStorage.getItem('allVideos') || '[]');
      const watchHistory = Object.keys(localStorage)
        .filter(key => key.startsWith('video-progress-'))
        .map(key => ({
          id: key.replace('video-progress-', ''),
          progress: parseFloat(localStorage.getItem(key) || '0')
        }))
        .filter(item => item.progress > 0);
        
      const continueWatchingVideos = watchHistory
        .map(item => {
          const video = allVideos.find((v: Video) => v.id === item.id);
          return video ? { ...video, progress: item.progress } : null;
        })
        .filter(Boolean)
        .slice(0, 10);
      
      setContinueWatching(continueWatchingVideos);
    }
    
  }, [isAuthenticated]);
  
  useEffect(() => {
    // Get AI recommendations for authenticated users
    if (isAuthenticated && user?.preferences) {
      getRecommendedVideos(user.preferences).then(setRecommendedVideos);
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      {/* Featured Hero */}
      {featuredVideo && <VideoCard video={featuredVideo} featured />}
      
      {/* Content Rows */}
      <div className="container mx-auto -mt-10">
        {isAuthenticated && continueWatching.length > 0 && (
          <VideoRow title="Continue Watching" videos={continueWatching} />
        )}
        
        {isAuthenticated && recommendedVideos.length > 0 && (
          <VideoRow title="Recommended For You" videos={recommendedVideos} />
        )}
        
        <VideoRow title="Trending Now" videos={trendingVideos} />
        <VideoRow title="New Releases" videos={newReleases} />
        
        {/* Additional categories can be added here */}
      </div>
    </div>
  );
};

export default HomePage;