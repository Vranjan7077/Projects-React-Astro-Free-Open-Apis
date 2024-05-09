/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
  };

  const getPokemonList = async () => {
    setLoading(true);
    try {
      const data = await fetchData(
        `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
      );
      const pokemonWithImages = await Promise.all(
        data.results.map(async (poke) => {
          const pokemonData = await fetchData(poke.url);
          return {
            ...poke,
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemonList([...pokemonList, ...pokemonWithImages]);
      setOffset(offset + limit);
    } catch (error) {
      setError("Something went wrong while fetching Pokémon list...", error);
    } finally {
      setLoading(false);
    }
  };

  const getPokemonDetails = async (name) => {
    setLoading(true);
    try {
      const data = await fetchData(`${API_BASE_URL}/pokemon/${name}`);
      setPokemonDetails(data);
    } catch (error) {
      setError("Something went wrong while fetching Pokémon details...", error);
    } finally {
      setLoading(false);
    }
  };

  const getEvolutionChain = async (name) => {
    setLoading(true);
    try {
      const speciesData = await fetchData(
        `${API_BASE_URL}/pokemon-species/${name}`
      );
      const evolutionChainUrl = speciesData.evolution_chain.url;
      const evolutionChainData = await fetchData(evolutionChainUrl);
      const chain = await extractEvolutionChain(evolutionChainData.chain);
      setEvolutionChain(chain);
    } catch (error) {
      setError(
        "Something went wrong while fetching evolution chain details...",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const extractEvolutionChain = async (chain) => {
    let evolutionChain = [];
    evolutionChain.push({
      name: chain.species.name,
      image: await getPokemonImage(chain.species.name),
    });

    for (const evolution of chain.evolves_to) {
      evolutionChain.push({
        name: evolution.species.name,
        image: await getPokemonImage(evolution.species.name),
      });
      if (evolution.evolves_to.length > 0) {
        for (const subEvolution of evolution.evolves_to) {
          evolutionChain.push({
            name: subEvolution.species.name,
            image: await getPokemonImage(subEvolution.species.name),
          });
        }
      }
    }
    return evolutionChain;
  };

  const getPokemonImage = async (name) => {
    try {
      const data = await fetchData(`${API_BASE_URL}/pokemon/${name}`);
      return data.sprites.other["official-artwork"].front_default;
    } catch (error) {
      console.error("Failed to fetch Pokémon image:", error);
      return null;
    }
  };

  const loadMore = () => {
    if (!loading) {
      getPokemonList();
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return {
    loading,
    error,
    pokemonList,
    pokemonDetails,
    evolutionChain,
    getPokemonDetails,
    getEvolutionChain,
    loadMore,
    getPokemonImage
  };
};

export default usePokemon;
