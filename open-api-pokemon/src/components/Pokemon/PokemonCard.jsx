/* eslint-disable react/prop-types */
import "./_PokemonCard.scss";
import PokemonEvolutionChain from "../Evolution/PokemonEvolutionChain";
import PokemonStats from "../BasicDetails/PokemonStats";
import PokemonDetails from "../BasicDetails/PokemonDetails";

const PokemonCard = ({ data, evolutionChain }) => {
  return (
    <>
      <PokemonDetails data={data} />
      <PokemonStats data={data} />
      <PokemonEvolutionChain evolutionChain={evolutionChain} />
    </>
  );
};

export default PokemonCard;
