import React from "react";
import styles from "./MovieDetails.module.css";
import { Language, useGetMovieDetails } from "~/support/services/movies";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { DynamicStar } from 'react-dynamic-star';


export const MovieDetails: React.FC = () => {

  const { movie }  = useGetMovieDetails();
  const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
  console.log("Here is the movie's JSON", movie)
  return (
    <div className={styles.outerContainer}>
      {movie ?
      <div className={styles.detailPage}>
        <div className={styles.imageContainer}>
          <Link to="/movies">
            <h5 className={styles.backButton}>
              <FiArrowLeft size={15}/>
              back to list
            </h5>
          </Link>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            title={movie.title}
            className={styles.poster}
          />
        </div>
        <div className={styles.movieInfo}>
          <h4>
            <span className={styles.popularity}>
              {movie.popularity}
            </span>
          </h4>
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
          <div className={styles.genreRow}>
          {movie.genres.map((genre, index) =>
            index != 0 ?
              <span className={styles.genre} key={genre.id}>
                {`, ${genre.name.toUpperCase()}`}
              </span>
            :
              <span className={styles.genre} key={genre.id}>
                {`${genre.name.toUpperCase()}`}
              </span>
          )}
          <span className={styles.divider}>|</span>
          <DynamicStar
            rating={movie.vote_average/2}
            totalStars={5}
            emptyStarColor={"#BFBFBF"}
            height={30}
            width={30}
            className={styles.stars}
            />
          <span className={styles.rating}>
            {`${(movie.vote_average/2).toFixed(2)}/5 (${movie.vote_count})`}
          </span>
          </div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <div className={styles.infoRow}>
            <div className={styles.dataPiece}>
              <div className={styles.label}>Release Date</div>
              <p className={styles.data}>
                {`${months[new Date(movie.release_date).getMonth() -1]} ${new Date(movie.release_date).getDate()}, ${new Date(movie.release_date).getFullYear()}`}
              </p>
            </div>
            <div className={styles.dataPiece}>
              <div className={styles.label}>Runtime</div>
              <p className={styles.data}>
                {`${(movie.runtime - (movie.runtime % 60))/60}hr  ${movie.runtime % 60}min`}
              </p>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.dataPiece}>
              <div className={styles.label}>Budget</div>
              <p className={styles.data}>
                {`$${(movie.budget/1000000).toFixed(1)}M`}
              </p>
            </div>
            <div className={styles.dataPiece}>
              <div className={styles.label}>Original Language</div>
              {movie.spoken_languages.filter((lan: Language) =>{
                return lan.iso_639_1 == movie.original_language
              }).map((lang: Language) => (
                <p className={styles.data} key={lang.name}>{lang.english_name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <Link to="/movies">
          <h5 className={styles.backButtonV2}>
          <FiArrowLeft size={15}/>
            back to list
          </h5>
        </Link>
        <div className={styles.oops}>
          <h1>Oops! You didn't select a movie</h1>
        </div>
      </div>
      }
    </div>
  );
};