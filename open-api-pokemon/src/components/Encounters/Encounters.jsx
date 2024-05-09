import "./_Encounters.scss";
import { useParams, Link } from "react-router-dom";
import usePokemonEncounters from "../../hooks/usePokemonEncounters";
import RenderSection from "../Other/RenderSection";

const Encounters = () => {
  const { name } = useParams();
  const { encounters, loading, error } = usePokemonEncounters(name);

  return (
    <>
      {loading && <p className="container">Loading...</p>}
      {error && <p className="not-found container">Error: {error}</p>}

      {encounters.length > 0 && (
        <main className="container">
          <RenderSection className="section--encounter section">
            {encounters.map((encounter, index) => (
              <div className="section--encounter__details" key={index}>
                <Link
                  to={`/location-area/${
                    encounter.location_area.url.split("/").slice(-2)[0]
                  }`}
                  key={index}
                >
                  <h1>{encounter.location_area.name.replace(/-/g, " ")}</h1>
                  <table className="encounter-table">
                    <thead>
                      <tr>
                        <th>Version</th>
                        <th>Encounter Method</th>
                        <th>
                          Min Level{" "}
                          <i
                            className="fa fa-level-down"
                            aria-hidden="true"
                          ></i>
                        </th>
                        <th>
                          Max Level{" "}
                          <i className="fa fa-level-up" aria-hidden="true"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {encounter.version_details.map((versionDetail, index) => (
                        <tr key={index}>
                          <td>{versionDetail.version.name}</td>
                          <td>
                            <ul className="encounter-methods">
                              {versionDetail.encounter_details.map(
                                (encounterDetail, index) => (
                                  <li key={index}>
                                    {encounterDetail.method.name.replace(
                                      /-/g,
                                      " "
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          </td>
                          <td>
                            <ul className="min-levels">
                              {versionDetail.encounter_details.map(
                                (encounterDetail, index) => (
                                  <li key={index}>
                                    {encounterDetail.min_level}
                                  </li>
                                )
                              )}
                            </ul>
                          </td>
                          <td>
                            <ul className="max-levels">
                              {versionDetail.encounter_details.map(
                                (encounterDetail, index) => (
                                  <li key={index}>
                                    {encounterDetail.max_level}
                                  </li>
                                )
                              )}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Link>
              </div>
            ))}
          </RenderSection>
          <hr />
        </main>
      )}
    </>
  );
};

export default Encounters;
