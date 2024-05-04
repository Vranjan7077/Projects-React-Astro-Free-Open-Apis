/* eslint-disable react/prop-types */

import TmdbMealMenuCard from "../components/cards/TmdbMealMenuCard";

const TmdbRandom = ({ meal, loading, error, fetchMeal }) => {
  const handleGetMeal = () => {
    fetchMeal();
  };

  return (
    <section className="wrapper--tmdbrandom">
      <div className="tmdbrandom">
        <h3 className="tmdbrandom__heading">Feeling Hungry ?</h3>
        <h3 className="tmdbrandom__subheading">
          Get a random meal by clicking below
        </h3>
        <button className="button-primary" onClick={handleGetMeal}>
          Get Meal 🍔
        </button>
      </div>
      <>
        {loading && <p className="success">Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {meal && <TmdbMealMenuCard meal={meal} />}
      </>
    </section>
  );
};

export default TmdbRandom;
