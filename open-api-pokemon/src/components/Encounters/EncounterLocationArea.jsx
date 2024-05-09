import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RenderSection from "../Other/RenderSection";
import usePokemonLocations from "../../hooks/usePokemonLocations";
import usePokemon from "../../hooks/usePokemon";
import "./_Encounters.scss";

const EncounterLocationArea = () => {
  const { name } = useParams();
  const { location, isLoading, error } = usePokemonLocations(name);
  const { getPokemonImage } = usePokemon();
  const [pokemonImages, setPokemonImages] = useState({});

  useEffect(() => {
    const fetchPokemonImages = async () => {
      if (location && location.pokemon_encounters) {
        const images = {};
        for (const encounter of location.pokemon_encounters) {
          try {
            const imageUrl = await getPokemonImage(encounter.pokemon.name);
            images[encounter.pokemon.name] = imageUrl;
          } catch (error) {
            console.error("Failed to fetch Pokémon image:", error);
          }
        }
        setPokemonImages(images);
      }
    };
    fetchPokemonImages();
  }, [location, getPokemonImage]);

  return (
    <>
      {isLoading && <p className="container">Loading...</p>}
      {error && <p className="not-found container">Error: {error}</p>}
      <main className="container">
        <RenderSection className="section--location-area section">
          <h1>
            Location Area :{" "}
            {location && location.name && location.name.replace(/-/g, " ")}
          </h1>
          <div>
            {location &&
              location.pokemon_encounters &&
              location.pokemon_encounters.map((encounter, index) => (
                <article key={index}>
                  <span className="d-flex">
                    <p>{encounter.pokemon.name}</p>
                  </span>
                  {pokemonImages[encounter.pokemon.name] && (
                    <Link
                      to={`/pokemon/${encounter.pokemon.name}`}
                      title={`View Details for ${encounter.pokemon.name.toLowerCase()}`}
                    >
                      <img
                        src={pokemonImages[encounter.pokemon.name]}
                        alt={encounter.pokemon.name}
                        height={475}
                        width={475}
                        loading="lazy"
                      />
                    </Link>
                  )}
                  {encounter.version_details.length > 0 && (
                    <ul>
                      {encounter.version_details.map(
                        (versionDetail, vIndex) => (
                          <li key={vIndex}>
                            <Link
                              to={`/location-area/${
                                versionDetail.version.url
                                  .split("/")
                                  .slice(-2)[0]
                              }`}
                              key={index}
                              title={`Details for ${String(
                                versionDetail.version.name
                              ).toLowerCase()}`}
                            >
                              {versionDetail.version.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </article>
              ))}
          </div>
        </RenderSection>
        <hr />
        {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
      </main>
    </>
  );
};

export default EncounterLocationArea;
