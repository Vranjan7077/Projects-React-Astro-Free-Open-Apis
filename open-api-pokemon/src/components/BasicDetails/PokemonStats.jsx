/* eslint-disable react/prop-types */
import "./_BasicDetailsCard.scss";
import RenderSection from "../Other/RenderSection";

const PokemonStats = ({ data }) => {
  const renderStats = () => (
    <>
      <h3>Stats</h3>
      {data.stats.map((stat, index) => (
        <div key={index} className="stats--details">
          <span>{stat.stat.name}</span>
          <progress value={stat.base_stat} max={100}>
            <div className="progress-bar">
              <span style={{ width: `${stat.base_stat}%` }}>
                {stat.base_stat}
              </span>
            </div>
          </progress>
        </div>
      ))}
    </>
  );
  return (
    <RenderSection className="section--basic-details section">
      <div className="stats">{renderStats()}</div>
    </RenderSection>
  );
};

export default PokemonStats;
