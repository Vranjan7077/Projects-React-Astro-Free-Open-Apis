import { Link, useParams } from "react-router-dom";
import useMealDetail from "../hooks/useMealDatail";
import TmdbMealMenuCard from "../components/cards/TmdbMealMenuCard";

const TmdbMealMenuPage = () => {
  const { mealId } = useParams();
  const { loading, error, mealDetails } = useMealDetail(mealId);

  if (loading) {
    return <p className="success">Loading...</p>;
  }

  if (error) {
    return <p className="error">Error: {error.message}</p>;
  }

  if (!mealDetails) {
    return <p>No meal details found.</p>;
  }

  return (
    <main className="wrapper tmdbdetailPage">
      <section className="wrapper--tmdbrandom">
        <div className="tmdbrandom">
          <h3 className="tmdbrandom__heading">{mealDetails.strMeal}</h3>
        </div>
        <TmdbMealMenuCard meal={mealDetails} />
      </section>
      <Link to="/" className="back-to-home">
        Back to Home 🏠
      </Link>
      <hr />
    </main>
  );
};

export default TmdbMealMenuPage;
