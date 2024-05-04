/* eslint-disable react/prop-types */
import NasaSearch from "./NasaSearch";

const NasaImgVideo = ({ searchResults, isLoading, searchImageOrVideo }) => {
  return (
    <>
      <div className="nasa--img-vid">
        <section className="nasa-container--img-vid">
          <h2>
            NASA Image and Video Library: API to access the NASA Image and Video
            Library site at images.nasa.gov
          </h2>
          <p>
            Use this API to access the NASA Image and Video Library site at{" "}
            <a href="https://images.nasa.gov/#/">images.nasa.gov</a>. For the
            latest documentation, please go{" "}
            <a href="https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf">
              here
            </a>
            . The images.nasa.gov API is organized around REST, has
            predictable/resource­-oriented URLs and uses HTTP response codes to
            indicate API errors. This API uses built-­in HTTP features such as
            HTTP authentication and HTTP verbs, which are understood by many
            off-­the-­shelf HTTP clients. Please note that JSON is returned by
            all API responses, including errors. Each of the endpoints described
            below also contains example snippets which use the curl
            command­-line tool, Unix pipelines, and the python command­-line
            tool to output API responses in an easy­ to ­read format.
          </p>
        </section>
        <NasaSearch
          searchResults={searchResults}
          isLoading={isLoading}
          searchImageOrVideo={searchImageOrVideo}
        />
      </div>
    </>
  );
};

export default NasaImgVideo;
