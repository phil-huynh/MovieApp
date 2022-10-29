import { useAxios } from "~/lib/axios";
import { AxiosMovies } from "./types";

export const useGetTrendingMovies = (
  mediaType: string = "movie",
  timeWindow: string = "day"
) => {
  const { response, loading, error }: AxiosMovies = useAxios({
    method: "GET",
    url: `/trending/${mediaType}/${timeWindow}`,
  });
  console.log("from api call", response)
  return { trendingMovies: response?.results, loading, error };
};
