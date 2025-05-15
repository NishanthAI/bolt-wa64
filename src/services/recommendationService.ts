import { Video } from '../types';
import { getVideos } from './videoService';

// Simulated AI recommendation engine
export const getRecommendedVideos = async (userPreferences: string[]): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get all videos
  const allVideos = await getVideos({ limit: 999 });
  
  // Apply recommendation algorithm
  const scoredVideos = allVideos.map(video => {
    // Calculate a match score based on genre overlap
    const genreOverlap = video.genres.filter(genre => 
      userPreferences.includes(genre)
    ).length;
    
    // More recent videos get a slight boost
    const recencyBoost = (new Date().getFullYear() - video.releaseYear) < 2 ? 10 : 0;
    
    // Calculate final score (higher is better)
    const score = (genreOverlap * 30) + recencyBoost;
    
    // Add match percentage
    const matchPercentage = Math.min(Math.round(score + 65), 99);
    
    return {
      ...video,
      match: matchPercentage
    };
  });
  
  // Sort by score (descending) and take the top 10
  return scoredVideos
    .sort((a, b) => (b.match || 0) - (a.match || 0))
    .slice(0, 10);
};