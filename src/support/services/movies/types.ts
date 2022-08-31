import { AxiosError } from "axios";

export interface TrendingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TrendingMovies {
  page: number;
  results: TrendingMovie[];
  total_pages: number;
  total_results: number;
}

export interface AxiosMovies {
  response: TrendingMovies;
  loading: boolean;
  error: AxiosError | undefined;
}
