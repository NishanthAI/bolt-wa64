export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  coverImage: string;
  videoUrl: string;
  duration: string;
  releaseYear: number;
  rating: string;
  genres: string[];
  cast: string[];
  director: string;
  match?: number;
  quality: string;
  category?: string;
  progress?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: string[];
}