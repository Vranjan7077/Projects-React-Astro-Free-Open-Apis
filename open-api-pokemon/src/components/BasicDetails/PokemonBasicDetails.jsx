/* eslint-disable react/prop-types */
import "./_BasicDetailsCard.scss";
import RenderList from "../Other/RenderList";

const PokemonBasicDetails = ({ data }) => {
  return (
    <div className="section--basic-card__list">
      <div className="details">
        <RenderList
          title="Types"
          items={data.types.map((type) => type.type.name)}
        />
        <RenderList
          title="Abilities"
          items={data.abilities.map((item) => item.ability.name)}
        />
        <RenderList
          title="Moves"
          items={data.moves.slice(0, 10).map((move) => move.move.name)}
        />
      </div>
    </div>
  );
};

export default PokemonBasicDetails;
