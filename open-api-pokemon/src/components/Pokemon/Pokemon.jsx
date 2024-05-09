/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Pokemon = ({ pokemonList }) => {
  return (
    <ul className="container--home">
      {pokemonList.map((poke, index) => (
        <li key={index}>
          <Link to={`pokemon/${poke.name}`}>
            <img
              src={poke.image}
              alt={poke.name}
              width={264}
              height={204}
              loading="lazy"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pokemon;
