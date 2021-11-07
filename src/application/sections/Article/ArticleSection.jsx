import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { API } from "../../../static/definitions";

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [paginator, setPaginator] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchArticles = (abortC) => {
      if (paginator === null || paginator === false) return;

      setLoader(() => true);

      setTimeout(() => {
        fetch(`${API}/articles${paginator}`, { signal: abortC.signal })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to fetch the data!");
            }
          })
          .then((response) => {
            if (response.length === 0) {
              setArticles((prevState) => [...prevState]);
              setPaginator(() => false);
            } else {
              setArticles((prevState) => [...prevState, ...response]);
            }

            setLoader(() => false);
          })
          .catch((error) => {
            if (error.name === "AbortError") {
            } else {
              console.log(error.name);
            }
          });
      }, 1000);
    };

    const abortC = new AbortController();

    fetchArticles(abortC);

    return () => {
      abortC.abort();
    };
  }, [paginator]);

  return (
    <section className="article-section">
      <div className="container container--xl">
        <h1 className="article-section__title">World</h1>
        <ArticleList articles={articles} />
        {loader ? (
          <div id="article-loader" className="article-loader">
            <div className="article-loader__spinner"></div>
          </div>
        ) : (
          ""
        )}
        {paginator && !loader && (
          <div className="text--center mt-md">
            <button
              className="btn btn-primary"
              onClick={() => {
                setPaginator((prevState) => prevState + 1);
              }}
            >
              Load More
            </button>
          </div>
        )}
        {!paginator && (
          <div className="alert alert--info mt-sm">
            All articles have been loaded!
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
