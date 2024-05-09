/* eslint-disable react/prop-types */
import "./_EvolutionChain.scss";
import { Link } from "react-router-dom";
import RenderSection from "../Other/RenderSection";

const PokemonEvolutionChain = ({ evolutionChain }) => (
  <RenderSection className="section--evolution-chain section">
    <h3>Evolution Chain</h3>
    <ul>
      {evolutionChain &&
        evolutionChain.map(
          (chainItem, index) =>
            chainItem.image && (
              <li key={index}>
                <h3>{chainItem.name}</h3>
                <Link to={`/pokemon/${chainItem.name}`}>
                  <img
                    src={chainItem.image}
                    alt={chainItem.name}
                    loading="lazy"
                    height={250}
                    width={250}
                  />
                </Link>
              </li>
            )
        )}
    </ul>
  </RenderSection>
);

export default PokemonEvolutionChain;
