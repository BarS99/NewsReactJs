import React from "react";
import ArticleBox from "./ArticleBox";

const ArticleList = (props) => {
  return (
    <div className="article-list">
      {props.articles.map((article) => {
        return <ArticleBox article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
