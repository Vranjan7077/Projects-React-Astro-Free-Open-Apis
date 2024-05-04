const NasaHeader = () => {
  return (
    <header>
      <div>
        <img
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
          alt=""
          height={50}
          width={50}
        />
        <p>
          {"{"}NASA APIs{"}"}
        </p>
      </div>
      <p>
        Welcome to the NASA API portal. The objective of this site is to make
        NASA data, including imagery, eminently accessible to application
        developers. This catalog focuses on broadly useful and user friendly
        APIs and does not hold every NASA API.
      </p>
    </header>
  );
};

export default NasaHeader;
