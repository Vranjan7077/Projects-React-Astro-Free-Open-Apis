/* eslint-disable react/prop-types */
import TmdbMealDetailsCard from "./TmdbMealDetailsCard";

const TmdbCard = ({
  data,
  height,
  width,
  isFilterCard,
  className,
  showLink,
}) => {
  return (
    <TmdbMealDetailsCard
      data={data}
      height={height}
      width={width}
      isFilterCard={isFilterCard}
      className={className || ""}
      showLink={showLink}
    />
  );
};

export default TmdbCard;
