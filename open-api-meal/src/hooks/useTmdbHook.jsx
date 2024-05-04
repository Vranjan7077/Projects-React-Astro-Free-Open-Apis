import useFetchData from "./useFetchData";
import { TMDB_SEARCH_URL, TMDB_FILTER_URL } from "../utils/constants";

export const useSearchMealData = () => {
  return useFetchData(TMDB_SEARCH_URL);
};

export const useMealFilterData = () => {
  return useFetchData(TMDB_FILTER_URL);
};
