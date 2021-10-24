import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/articles?")
      .then((response) => response.json())
      .then((response) => {
        setArticles((prevState) => response);
      })
      .catch((error) => console.log("No articles found!"));
  }, []);

  return (
    <section className="article-section">
      <div className="container container--xl">
        <h2 className="article-section__title">World</h2>
        <ArticleList articles={articles} />
        <div id="article-loader" className="article-loader">
          <div className="article-loader__spinner"></div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
