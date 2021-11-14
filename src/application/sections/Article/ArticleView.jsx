import React from "react";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import { API } from "../../../static/definitions";
import Date from "../../components/Date/Date";
import Author from "../../components/Author/Author";

const ArticleView = () => {
  const { params } = useMatch("article/:id-:paginator");
  const navigate = useNavigate();
  const [article, setArticle] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const abortC = new AbortController();

    setTimeout(() => {
      fetch(`${API}/articles${params.paginator}`, { signal: abortC.signal })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch the data!");
          }
        })
        .then((response) => {
          const article = response.find(
            (item) => item.id === parseInt(params.id)
          );

          setArticle(article);
          setLoader(() => false);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
          } else {
            console.log(error.name);
          }
        });
    }, 1000);

    return () => {
      abortC.abort();
    };
  }, [params.paginator, params.id]);

  return (
    <div className="container container--xl">
      {article && (
        <article className="article-view mt-md mb-md">
          <div className="article-view__image">
            <img
              srcSet={`../${article.image_560} 560w, ../${article.image_1120} 1120w`}
              sizes={`(max-width: 560px) 560w, 1120w`}
              src={`../${article.image_1120}`}
              alt={article.title}
            />
          </div>
          <Date date={article.date} />
          <div
            className="badge"
            style={{ backgroundColor: article.badge_color }}
          >
            {article.badge}
          </div>
          <Author author={article.author} />
          <h1 className="article-view__title">{article.title}</h1>
          {article.text_view.length && (
            <div className="article-view__text text">{article.text_view}</div>
          )}
          <div className="text--center mt-md">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn-primary"
            >
              Previous page
            </button>
          </div>
        </article>
      )}
      {loader ? (
        <div id="article-loader" className="article-loader">
          <div className="article-loader__spinner"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ArticleView;
