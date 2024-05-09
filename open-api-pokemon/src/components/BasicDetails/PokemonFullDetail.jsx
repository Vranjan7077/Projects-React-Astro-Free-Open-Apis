/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import PokemonCard from "../Pokemon/PokemonCard";

const PokemonFullDetail = () => {
  const { name } = useParams();
  const {
    pokemonDetails,
    evolutionChain,
    loading,
    error,
    getPokemonDetails,
    getEvolutionChain,
  } = usePokemon();
  useEffect(() => {
    getPokemonDetails(name);
    getEvolutionChain(name);
  }, [name]);

  return (
    <main className="container">
      {loading && <p className="container">Loading...</p>}
      {error && <p className="not-found container">Error: {error}</p>}
      {pokemonDetails && (
        <PokemonCard data={pokemonDetails} evolutionChain={evolutionChain} />
      )}
    </main>
  );
};

export default PokemonFullDetail;
