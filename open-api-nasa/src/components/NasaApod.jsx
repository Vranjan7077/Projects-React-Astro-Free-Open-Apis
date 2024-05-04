/* eslint-disable react/prop-types */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NasaForm from "./NasaForm";
import NasaApodCard from "../components/card/NasaApodCard";

const NasaApod = ({ data, loading, error, fetchData }) => {
  return (
    <>
      <div className="nasa--apod">
        {error || data ? <ToastContainer /> : null}
        <section className="nasa-container--apod">
          <h2>APOD : Astronomy Picture of the Day</h2>
          <p>
            One of the most popular websites at NASA is the{" "}
            <a href="http://apod.nasa.gov/apod/astropix.html">
              Astronomy Picture of the Day.{" "}
            </a>
            In fact, this website is one of the{" "}
            <a href="https://analytics.usa.gov/">most popular websites</a>{" "}
            across all federal agencies. It has the popular appeal of a Justin
            Bieber video. This endpoint structures the APOD imagery and
            associated metadata so that it can be repurposed for other
            applications. In addition, if the concept_tags parameter is set to
            True, then keywords derived from the image explanation are returned.
            These keywords could be used as auto-generated hashtags for twitter
            or instagram feeds; but generally help with discoverability of
            relevant imagery.
          </p>
        </section>
        <NasaForm fetchData={fetchData} />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data && <NasaApodCard data={data} />}
      </div>
    </>
  );
};

export default NasaApod;
