import React from "react";
import { Link } from "react-router-dom";
import Date from "../../components/Date/Date";
import Author from "../../components/Author/Author";

const ArticleBox = (props) => {
  return (
    <article
      className={`article-box${
        props.article.text.length ? "" : " article-box--no-text"
      }`}
    >
      <Link
        to={`/article/${props.article.id}-${props.article.paginator}`}
        title={props.article.title}
        className="article-box__inner"
      >
        <div className="article-box__image">
          <img
            srcSet={`${props.article.image_560} 560w, ${props.article.image_1120} 1120w`}
            sizes={`(max-width: 560px) 560w, 1120w`}
            src={props.article.image_1120}
            alt={props.article.title}
          />
        </div>
        <div className="article-box__content">
          <Date date={props.article.date} />
          <div
            className="badge"
            style={{ backgroundColor: props.article.badge_color }}
          >
            {props.article.badge}
          </div>
          <Author author={props.article.author} />
          <h3 className="article-box__title">{props.article.title}</h3>
          <div className="article-box__text text">{props.article.text}</div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleBox;
