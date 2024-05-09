/* eslint-disable react/prop-types */
import "./_BasicDetailsCard.scss";
import RenderSection from "../Other/RenderSection";
import PokemonBasicDetails from "./PokemonBasicDetails";
import { Link } from "react-router-dom";

const PokemonDetails = ({ data }) => {
  return (
    <RenderSection className="section--basic-card section">
      <div className="section--basic-card__details">
        <span className="d-flex">
          <p>{data.name.toLowerCase()}</p>
          <p>#{data.id}</p>
        </span>
        <Link to={`/pokemon/${data.name}/encounters`}>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            height={475}
            width={475}
            loading="lazy"
          />
        </Link>
      </div>
      <PokemonBasicDetails data={data} />
    </RenderSection>
  );
};

export default PokemonDetails;
