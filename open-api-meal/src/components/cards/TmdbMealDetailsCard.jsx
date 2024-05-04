/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TmdbMealDetailsCard = ({
  data,
  height,
  width,
  isFilterCard,
  className,
  showLink,
}) => {
  const formatTags = (tags) => (tags ? tags.split(",").join(", ") : "");

  if (isFilterCard) {
    return (
      <li className={className}>
        <Link to={`/meals/meal/${data.idMeal}`}>
          <img
            className=""
            src={data?.strMealThumb}
            alt="Meal Image"
            height={250}
            width={250}
            loading="lazy"
          />
          <div className="content">
            <h3>{data?.strMeal}</h3>
          </div>
        </Link>
      </li>
    );
  }

  const content = (
    <div className="tmdbrandom-content">
      <img
        src={data.strMealThumb}
        alt="Meal Image"
        height={height}
        width={width}
        loading="lazy"
      />
      <span>
        <h3>{data.strMeal}</h3>
        {data.strInstructions && <p>{data.strInstructions}</p>}
        <ul>
          <li>
            <strong>Category: </strong>
            {data.strCategory}
          </li>
          <li>
            <strong>Area: </strong>
            {data.strArea}
          </li>
          {data.strTags && (
            <li>
              <strong>Tags: </strong>
              {formatTags(data.strTags)}
            </li>
          )}
        </ul>
      </span>
    </div>
  );

  return showLink ? (
    <div className={`tmdbsearch--meal ${className}`}>
      <Link to={`/meals/meal/${data.idMeal}`}>
        <>{content}</>
      </Link>
    </div>
  ) : (
    <>{content}</>
  );
};

export default TmdbMealDetailsCard;
