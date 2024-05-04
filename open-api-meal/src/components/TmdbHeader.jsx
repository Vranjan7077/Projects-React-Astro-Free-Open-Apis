const TmdbHeader = () => {
  return (
    <>
      <header>
        <h1>Welcome to TheMealDB</h1>
        <p>
          <img
            src="https://www.themealdb.com/images/meal-icon.png"
            alt=""
            height={200}
            width={200}
            loading="lazy"
          />
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world. We also offer a free recipe API for anyone wanting
          to use it, with additional features for subscribers.
          <img
            src="https://www.themealdb.com/images/meal-icon.png"
            alt=""
            height={200}
            width={200}
            loading="lazy"
          />
        </p>
      </header>
    </>
  );
};

export default TmdbHeader;
