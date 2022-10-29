import { useAxios } from "~/lib/axios";
import { AxiosMovieDetails } from "./types";
import { useSelectionContext } from "~/context/SelectionContext"

export const useGetMovieDetails = () => {
  const { id, setId } = useSelectionContext();
  const { response, loading, error }: AxiosMovieDetails = useAxios({
    method: "GET",
    url: `/movie/${id}`,
  });
  console.log("from api call", response)
  return { movie: response, loading, error };
};