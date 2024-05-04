/* eslint-disable react/prop-types */
import TmdbMealDetailsCard from "./TmdbMealDetailsCard";

const TmdbMealMenuCard = ({ meal }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    } else {
      break;
    }
  }

  return (
    <div className="tmdbrandom--meal">
      <div className="container--meal">
        <TmdbMealDetailsCard data={meal} height={450} width={450} />
        <div className="tmdbrandom-content" data-space="5">
          <div>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {meal?.strYoutube && (
            <iframe
              title="videoRecipe"
              src={`https://www.youtube.com/embed/${meal?.strYoutube?.slice(
                -11
              )}`}
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TmdbMealMenuCard;
