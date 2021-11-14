import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { dateParser } from "../../../static/definitions";

const Date = (props) => {
  return (
    <time data-time={dateParser(props.date)} className="date">
      <div className="date__icon">
        <FontAwesomeIcon icon={faClock} aria-hidden="true" />
      </div>
      <div className="date__caption">{props.date}</div>
    </time>
  );
};

export default Date;
