import React, { useState, useEffect } from 'react';
import { User, Bell, Video, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getWatchHistory } from '../services/userService';
import { Video as VideoType } from '../types';
import VideoCard from '../components/VideoCard';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('preferences');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [watchHistory, setWatchHistory] = useState<VideoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
    'Drama', 'Fantasy', 'Horror', 'Musical', 'Mystery', 'Romance',
    'Sci-Fi', 'Thriller', 'Western'
  ];
  
  useEffect(() => {
    if (user) {
      setPreferences(user.preferences || []);
      
      // Get watch history
      setIsLoading(true);
      getWatchHistory().then(history => {
        setWatchHistory(history);
        setIsLoading(false);
      });
    }
  }, [user]);
  
  const togglePreference = (genre: string) => {
    if (preferences.includes(genre)) {
      setPreferences(preferences.filter(p => p !== genre));
    } else {
      setPreferences([...preferences, genre]);
    }
    // This would normally save to backend, but for demo we'll just update the local state
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>
        
        <button 
          onClick={logout}
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-800 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('preferences')}
            className={`py-4 font-medium flex items-center space-x-2 border-b-2 px-1 ${activeTab === 'preferences' ? 'border-red-600 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <User size={18} />
            <span>Preferences</span>
          </button>
          
          <button
            onClick={() => setActiveTab('history')}
            className={`py-4 font-medium flex items-center space-x-2 border-b-2 px-1 ${activeTab === 'history' ? 'border-red-600 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <Video size={18} />
            <span>Watch History</span>
          </button>
          
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-4 font-medium flex items-center space-x-2 border-b-2 px-1 ${activeTab === 'notifications' ? 'border-red-600 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="pb-8">
        {activeTab === 'preferences' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Content Preferences</h2>
            <p className="text-gray-400 mb-4">Select your favorite genres to get better recommendations:</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => togglePreference(genre.toLowerCase())}
                  className={`py-2 px-4 rounded-md transition-colors ${
                    preferences.includes(genre.toLowerCase()) 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Watch History</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
              </div>
            ) : watchHistory.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {watchHistory.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p>Your watch history is empty</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Notifications</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">New content available</h3>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                <p className="text-gray-400 mt-1">Season 2 of "Cosmic Odyssey" is now available!</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Continue watching reminder</h3>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                <p className="text-gray-400 mt-1">You're halfway through "The Last Kingdom". Continue watching?</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Recommendation based on your watch history</h3>
                  <span className="text-xs text-gray-400">3 days ago</span>
                </div>
                <p className="text-gray-400 mt-1">We think you'll like "Dark Matter" based on your preferences.</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                Mark all as read
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;