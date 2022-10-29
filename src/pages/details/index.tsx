import { MovieDetails } from "~/components/movies/MovieDetails";
import styles from "./details.module.css";

export default function Details() {
  return (
    <div className={styles.detailsContainer}>
      <MovieDetails />
    </div>
  );
}