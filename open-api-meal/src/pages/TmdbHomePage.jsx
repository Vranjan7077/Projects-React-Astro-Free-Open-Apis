import useRandomMealData from "../hooks/useRandomMealData";
import TmdbRandom from "../components/TmdbRandom";
import TmdbSearch from "../components/TmdbSearch";
import TmdbFilter from "../components/TmdbFilter";
import { useMealFilterData, useSearchMealData } from "../hooks/useTmdbHook";

const TmdbHomePage = () => {
  const { meal, loading, error, fetchMeal } = useRandomMealData();
  const {
    data: searchResults,
    isLoading,
    isError,
    fetchData: searchMeal,
  } = useSearchMealData();
  const {
    data: filterResults,
    isLoading: isLoaded,
    isError: isErr,
    fetchData: filterData,
  } = useMealFilterData();

  return (
    <>
      <main className="wrapper">
        <TmdbRandom
          fetchMeal={fetchMeal}
          meal={meal}
          loading={loading}
          error={error}
        />
        <hr />
        <TmdbSearch
          searchResults={searchResults}
          error={isError}
          loading={isLoading}
          searchMeal={searchMeal}
        />
        <hr />
        <TmdbFilter
          isLoaded={isLoaded}
          isErr={isErr}
          filterData={filterData}
          filterResults={filterResults}
        />
        <hr />
      </main>
    </>
  );
};

export default TmdbHomePage;
