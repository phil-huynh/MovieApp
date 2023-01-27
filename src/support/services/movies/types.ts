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


export interface CurrentMovie {
  id: number;
  setId:(id: number) => void;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Collection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface CurrentMovieDetails {
adult: boolean;
backdrop_path: string | null;
belongs_to_collection: Collection | null;
budget: number;
genres: Genre[];
homepage: string | null;
id: number;
imdb_id: string | null;
original_language: string;
original_title: string;
overview: string | null;
popularity: number;
poster_path: string | null;
production_companies: ProductionCompany[];
production_countries: ProductionCountry[];
release_date: string;
revenue: number;
runtime: number;
spoken_languages: Language[];
status: string;
tagline: string | null;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
}

export interface AxiosMovieDetails {
  response: CurrentMovieDetails;
  loading: boolean;
  error: AxiosError | undefined;
}