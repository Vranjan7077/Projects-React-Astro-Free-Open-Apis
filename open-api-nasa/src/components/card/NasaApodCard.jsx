/* eslint-disable react/prop-types */

const NasaApodCard = ({ data }) => {
  const placeholderUrl = `https://via.placeholder.com/934x436`;

  return (
    <section className="nasa-card">
      {data?.media_type === "image" ? (
        data?.hdurl && (
          <img
            src={data?.hdurl || placeholderUrl}
            alt=""
            width={934}
            height={436}
            loading="lazy"
          />
        )
      ) : data?.media_type === "video" ? (
        data?.url && (
          <iframe
            src={`${data?.url}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&showinfo=1&autohide=1&wmode=opaque`}
            title="NASA Video"
            width={885}
            height={436}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        )
      ) : (
        <img
          src={placeholderUrl}
          alt=""
          width={934}
          height={436}
          loading="lazy"
        />
      )}

      {(data?.title || data?.date) && (
        <div>
          {data?.title && <h2>{data.title}</h2>}
          {data?.date && (
            <p>
              <i className="far fa-calendar"></i>
              {data.date}
            </p>
          )}
        </div>
      )}

      {data?.explanation && <p>{data.explanation}</p>}

      {data?.copyright && (
        <p>
          <i className="fa-regular fa-copyright"></i>
          {data?.copyright}
        </p>
      )}
    </section>
  );
};

export default NasaApodCard;
