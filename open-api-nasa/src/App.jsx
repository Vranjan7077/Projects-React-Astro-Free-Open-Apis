import useNasaApodData from "./hooks/useNasaApodData";
import useNasaImageVideoData from "./hooks/useNasaImageVideoData";
import NasaHeader from "./components/NasaHeader";
import NasaApod from "./components/NasaApod";
import NasaImgVideo from "./components/NasaImgVideo";

const App = () => {
  const { data, loading, error, fetchData } = useNasaApodData();
  const { searchResults, isLoading, searchImageOrVideo } =
    useNasaImageVideoData();

  return (
    <>
      <NasaHeader />
      <main className="nasa-container">
        <NasaApod
          data={data}
          loading={loading}
          error={error}
          fetchData={fetchData}
        />
        <hr />
        <NasaImgVideo
          searchResults={searchResults}
          isLoading={isLoading}
          searchImageOrVideo={searchImageOrVideo}
        />
        <hr />
      </main>
    </>
  );
};

export default App;
