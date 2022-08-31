import React from "react";

import styles from "./MoviesList.module.css";

import { TrendingMovie, useGetTrendingMovies } from "~/support/services/movies";

export const MoviesList: React.FC = () => {
  const { trendingMovies } = useGetTrendingMovies();

  return (
    <div className={styles.moviesList}>
      {trendingMovies?.map((movie: TrendingMovie) => (
        <div className={styles.movie} key={movie.id} aria-label={movie.title}>
          <img
            alt="movie.title"
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            title="movie.title"
          />
        </div>
      ))}
    </div>
  );
};
