import { Video } from '../types';

// Get user watch history (from localStorage in this demo)
export const getWatchHistory = async (): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Get all videos
  const allVideos: Video[] = JSON.parse(localStorage.getItem('allVideos') || '[]');
  
  // Get watch history from localStorage
  const watchHistory = Object.keys(localStorage)
    .filter(key => key.startsWith('video-progress-'))
    .map(key => ({
      id: key.replace('video-progress-', ''),
      progress: parseFloat(localStorage.getItem(key) || '0')
    }))
    .filter(item => item.progress > 0);
  
  // Map IDs to actual video objects
  const historyVideos = watchHistory
    .map(item => {
      const video = allVideos.find(v => v.id === item.id);
      return video ? { ...video, progress: item.progress } : null;
    })
    .filter(Boolean) as Video[];
  
  return historyVideos;
};

// Update user preferences - in a real app, this would call an API
export const updateUserPreferences = async (preferences: string[]): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would update the backend
  // For this demo, we just log to console
  console.log('Updated user preferences:', preferences);
};