import { Video } from '../types';

// Mock video data
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Cosmic Odyssey',
    description: 'A team of astronauts embarks on a perilous journey to the edge of our solar system, where they discover an ancient alien artifact that could change humanity forever.',
    thumbnail: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 15m',
    releaseYear: 2023,
    rating: 'PG-13',
    genres: ['sci-fi', 'adventure', 'drama'],
    cast: ['Emma Stone', 'Ryan Gosling', 'Idris Elba'],
    director: 'Denis Villeneuve',
    match: 97,
    quality: '4K UHD',
    category: 'trending'
  },
  {
    id: '2',
    title: 'The Last Kingdom',
    description: 'In a medieval fantasy world, a young warrior must reclaim his birthright and unite warring kingdoms against an ancient evil threatening to engulf the land in darkness.',
    thumbnail: 'https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/7907646/pexels-photo-7907646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '1h 58m',
    releaseYear: 2022,
    rating: 'PG-13',
    genres: ['fantasy', 'action', 'adventure'],
    cast: ['Tom Hardy', 'Anya Taylor-Joy', 'Oscar Isaac'],
    director: 'Christopher Nolan',
    match: 85,
    quality: 'HD',
    category: 'trending'
  },
  {
    id: '3',
    title: 'Urban Legends',
    description: 'A gritty crime drama following a determined detective as she unravels a web of corruption in her city while hunting a notorious serial killer inspired by urban legends.',
    thumbnail: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 5m',
    releaseYear: 2023,
    rating: 'R',
    genres: ['crime', 'thriller', 'mystery'],
    cast: ['Viola Davis', 'Daniel Kaluuya', 'Jodie Comer'],
    director: 'David Fincher',
    match: 92,
    quality: '4K UHD',
    category: 'trending'
  },
  {
    id: '4',
    title: 'Whispering Pines',
    description: 'In a seemingly idyllic small town, a newcomer uncovers dark secrets as residents begin experiencing terrifying visions tied to the mysterious forest surrounding them.',
    thumbnail: 'https://images.pexels.com/photos/1739250/pexels-photo-1739250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/5089154/pexels-photo-5089154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '1h 50m',
    releaseYear: 2022,
    rating: 'R',
    genres: ['horror', 'mystery', 'thriller'],
    cast: ['Florence Pugh', 'Robert Pattinson', 'Toni Collette'],
    director: 'Ari Aster',
    match: 88,
    quality: 'HD',
    category: 'trending'
  },
  {
    id: '5',
    title: 'Quantum Paradox',
    description: 'A brilliant physicist discovers a way to travel between parallel realities, but each jump causes fractures in the multiverse, threatening the existence of all dimensions.',
    thumbnail: 'https://images.pexels.com/photos/6072/dark-black-and-white-industry-factory.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/10046833/pexels-photo-10046833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 22m',
    releaseYear: 2023,
    rating: 'PG-13',
    genres: ['sci-fi', 'thriller', 'drama'],
    cast: ['John David Washington', 'Zendaya', 'Oscar Isaac'],
    director: 'Alex Garland',
    match: 95,
    quality: '4K UHD',
    category: 'new'
  },
  {
    id: '6',
    title: 'Lost in Time',
    description: 'After a freak accident, a woman finds herself trapped in a time loop, reliving the same day over and over as she tries to solve the mystery behind her predicament.',
    thumbnail: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '1h 47m',
    releaseYear: 2022,
    rating: 'PG-13',
    genres: ['sci-fi', 'mystery', 'romance'],
    cast: ['Brie Larson', 'Lakeith Stanfield', 'Awkwafina'],
    director: 'Rian Johnson',
    match: 91,
    quality: 'HD',
    category: 'trending'
  },
  {
    id: '7',
    title: 'Eternal Echoes',
    description: 'An immortal being who has lived through centuries of human history begins to question their purpose when they fall in love with a terminally ill artist.',
    thumbnail: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 10m',
    releaseYear: 2023,
    rating: 'PG-13',
    genres: ['romance', 'drama', 'fantasy'],
    cast: ['Dev Patel', 'Saoirse Ronan', 'Daniel Kaluuya'],
    director: 'Greta Gerwig',
    match: 89,
    quality: '4K UHD',
    category: 'new'
  },
  {
    id: '8',
    title: 'Neon Revolution',
    description: 'In a cyberpunk future dominated by megacorporations, a hacker and a street-smart rebel team up to lead an uprising against the oppressive technocratic regime.',
    thumbnail: 'https://images.pexels.com/photos/5480755/pexels-photo-5480755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 20m',
    releaseYear: 2023,
    rating: 'R',
    genres: ['sci-fi', 'action', 'cyberpunk'],
    cast: ['John Boyega', 'Karen Fukuhara', 'Steven Yeun'],
    director: 'Jordan Peele',
    match: 93,
    quality: '4K UHD',
    category: 'new'
  },
  {
    id: '9',
    title: 'Shadow Kingdom',
    description: 'A disgraced warrior must reclaim her honor by venturing into a cursed realm to defeat an ancient evil that threatens to plunge the world into eternal darkness.',
    thumbnail: 'https://images.pexels.com/photos/258424/pexels-photo-258424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '2h 5m',
    releaseYear: 2022,
    rating: 'PG-13',
    genres: ['fantasy', 'action', 'adventure'],
    cast: ['Lupita Nyong\'o', 'Henry Golding', 'Michelle Yeoh'],
    director: 'James Wan',
    match: 86,
    quality: 'HD',
    category: 'trending'
  },
  {
    id: '10',
    title: 'Dark Matter',
    description: 'After a particle accelerator experiment goes wrong, a physicist gains the ability to manipulate dark matter, drawing the attention of shadowy government agencies.',
    thumbnail: 'https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/6331040/pexels-photo-6331040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    duration: '1h 55m',
    releaseYear: 2023,
    rating: 'PG-13',
    genres: ['sci-fi', 'action', 'thriller'],
    cast: ['John Cho', 'Gemma Chan', 'Jonathan Majors'],
    director: 'Chloe Zhao',
    match: 90,
    quality: '4K UHD',
    category: 'new'
  }
];

// Store all videos in localStorage for use in continue watching
localStorage.setItem('allVideos', JSON.stringify(mockVideos));

// Get videos with optional filters
export const getVideos = async (options: {
  category?: string;
  genre?: string;
  year?: string;
  limit?: number;
} = {}): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredVideos = [...mockVideos];
  
  if (options.category) {
    filteredVideos = filteredVideos.filter(
      video => video.category === options.category
    );
  }
  
  if (options.genre) {
    filteredVideos = filteredVideos.filter(
      video => video.genres.includes(options.genre!)
    );
  }
  
  if (options.year) {
    filteredVideos = filteredVideos.filter(
      video => video.releaseYear.toString() === options.year
    );
  }
  
  return filteredVideos.slice(0, options.limit || filteredVideos.length);
};

// Get a single video by ID
export const getVideoById = async (id: string): Promise<Video | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const video = mockVideos.find(v => v.id === id);
  return video || null;
};

// Get a featured video for the homepage hero
export const getFeaturedVideo = async (): Promise<Video> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Always return the first video as featured
  return mockVideos[0];
};

// Get related videos based on a video's genres
export const getRelatedVideos = async (videoId: string): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const video = await getVideoById(videoId);
  
  if (!video) return [];
  
  return mockVideos
    .filter(v => v.id !== videoId && v.genres.some(g => video.genres.includes(g)))
    .slice(0, 10);
};

// Search videos by title, description, cast, etc.
export const searchVideos = async (query: string): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const searchTerm = query.toLowerCase();
  
  return mockVideos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm) ||
    video.genres.some(g => g.toLowerCase().includes(searchTerm)) ||
    video.cast.some(c => c.toLowerCase().includes(searchTerm)) ||
    video.director.toLowerCase().includes(searchTerm)
  );
};