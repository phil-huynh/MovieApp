import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "//api.themoviedb.org/3/";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    config.headers = {};
  }

  config.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2UzMzVjOTk2Y2FiMmMxOTUxYjMzZjVlM2Q5MDI2NyIsInN1YiI6IjYzZDM0OWNkNWEwN2Y1MDA4MmYzZDg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16bXpOGSqDHBtTOmMpNOY3fh0DXPFxghJkvzwQdv4RQ";

  config.headers.Accept = "application/json";

  return config;
});

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse["data"]>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

// "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWY5OGEwMzkzYzkzNzQzOTY2OGEwMzRkNmE0Nzg0NyIsInN1YiI6IjYyZjVlZDIxYzNiZmZlMDA4Nzc2YWMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nTUOKf816xCF3--SDrkvVqLf8i6_2hIgeSAC44vAR0M";