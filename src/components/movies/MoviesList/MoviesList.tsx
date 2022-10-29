import React from "react";
import styles from "./MoviesList.module.css";
import { Link } from "react-router-dom";
import { TrendingMovie, useGetTrendingMovies } from "~/support/services/movies";
import { useSelectionContext } from "~/context/SelectionContext";


export const MoviesList: React.FC = () => {

  const { trendingMovies }  = useGetTrendingMovies();
  const { setId } = useSelectionContext();

  return (
    <div className={styles.moviesList}>
      {trendingMovies?.map((movie: TrendingMovie) => (
        <Link to="/details" key={movie.id}>
          <div className={styles.movie} aria-label={movie.title} onClick={()=>setId(movie.id)}>
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              title={movie.title}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
