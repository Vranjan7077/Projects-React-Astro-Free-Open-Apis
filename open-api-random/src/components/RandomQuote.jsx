import useRandomQuote from "../hooks/useRandomQuote";

const RandomQuote = () => {
  const { quote, loading, error, fetchQuote } = useRandomQuote();

  return (
    <div className="center">
      <button className="button-primary" onClick={fetchQuote}>
        Get Quote 📗
      </button>
      {loading && <p className="success">Loading...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      {!loading && !error && quote && (
        <>
          <article>
            <div className="quote">
              <i className="fa fa-quote-left fa-pull-left"></i>
              {quote.text}
              <i className="fa fa-quote-right fa-pull-right"></i>
              {quote.author && (
                <div className="quote--content">
                  <p className="author">
                    <img
                      src="/author-placeholder.jpeg"
                      alt="Author"
                      height={20}
                      width={20}
                      loading="lazy"
                    />
                    {quote.author}
                  </p>
                  {quote.tags && (
                    <ul>
                      {quote.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default RandomQuote;
