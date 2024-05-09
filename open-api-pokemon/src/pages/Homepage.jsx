import usePokemon from "../hooks/usePokemon";
import Pokemon from "../components/Pokemon/Pokemon";
import RenderButton from "../components/Other/RenderButton";

import "./_pages.scss";

const Homepage = () => {
  const { pokemonList, loading, error, loadMore } = usePokemon();

  const handleLoadMore = () => {
    loadMore();
  };

  return (
    <main className="container align">
      {loading && <p className="container">Loading...</p>}
      {error && <p className="not-found container">Error: {error}</p>}
      <hr />
      <Pokemon pokemonList={pokemonList} />
      <hr />
      {!loading && (
        <RenderButton onClick={handleLoadMore} className="load-more-button">
          Load More
        </RenderButton>
      )}
    </main>
  );
};

export default Homepage;
