import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Author = (props) => {
  return (
    <address className="author">
      <div className="author__icon">
        <FontAwesomeIcon icon={faUser} aria-hidden="true" />
      </div>
      <div className="author__name">{props.author}</div>
    </address>
  );
};

export default Author;
