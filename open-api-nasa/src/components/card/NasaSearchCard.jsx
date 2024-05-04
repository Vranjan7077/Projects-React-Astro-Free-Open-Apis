/* eslint-disable react/prop-types */
import moment from "moment";

const NasaSearchCard = ({ item }) => {
  const placeholderUrl = `https://via.placeholder.com/934x436?text=Image+Not+Found`;

  return (
    <li className="card">
      {item.imageUrl ? (
        <img
          alt=""
          src={item.imageUrl}
          height={480}
          width={680}
          loading="lazy"
          className="card-image"
        />
      ) : (
        <img
          alt="Placeholder"
          src={placeholderUrl}
          height={480}
          width={680}
          loading="lazy"
          className="card-image"
        />
      )}
      <div className="card-content">
        {item.data && item.data[0] && (
          <>
            <h2>{item.data[0].title}</h2>
            <p>
              <i className="far fa-calendar"></i>{" "}
              {moment(item.data[0].date_created).format("MMMM D, YYYY")}
            </p>
            {item.data[0].description && (
              <p className="description">{item.data[0].description}</p>
            )}
            {item.data[0].keywords && (
              <ul className="keywords">
                {item.data[0].keywords.map((keyword, i) => (
                  <li key={i}>{keyword.trim()}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </li>
  );
};

export default NasaSearchCard;
