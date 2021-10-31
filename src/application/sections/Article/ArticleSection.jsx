import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { API } from "../../../static/definitions";

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [paginator, setPaginator] = useState(1);
  const [loader, setLoader] = useState(true);

  function fetchArticles() {
    if (paginator === false) return;
    setLoader(() => true);
    fetch(`${API}/articles${paginator}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        if (response.length === 0) {
          setPaginator(() => false);
          setLoader(() => false);
        } else {
          setTimeout(() => {
            setArticles((prevState) => [...prevState, ...response]);
            setPaginator((prevState) => prevState + 1);
            setLoader(() => false);
          }, 1500);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="article-section">
      <div className="container container--xl">
        <h2 className="article-section__title">World</h2>
        <ArticleList articles={articles} />
        {loader ? (
          <div id="article-loader" className="article-loader">
            <div className="article-loader__spinner"></div>
          </div>
        ) : (
          ""
        )}
        {paginator && !loader && (
          <div className="text-center mt-md">
            <button className="btn btn-primary" onClick={fetchArticles}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
