import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Slide = (props) => {
  return (
    <article
      data-index={props.index}
      className={`slider__slide${
        props.index === 0 ? " slider__slide--active" : ""
      }`}
    >
      <div className="slider__background">
        <picture>
          <source
            media="(min-width: 576px)"
            srcSet="examples/lewandowski-960.jpg 960w, examples/lewandowski-1440.jpg 1440w, examples/lewandowski-1920.jpg 1920w"
          />
          <source srcSet="examples/lewandowski-480.jpg 480w, examples/lewandowski-720.jpg 720w" />
          <img src="examples/lewandowski-480.jpg" alt="Robert Lewandowski" />
        </picture>
      </div>
      <div className="slider__content">
        <div className="container container--xl">
          <div
            className="badge"
            style={{ backgroundColor: props.slide.badge_color }}
          >
            {props.slide.badge}
          </div>
          <address className="author">
            <div className="author__icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="author__name">{props.slide.author}</div>
          </address>
          <h2 className="slider__title">{props.slide.title}</h2>
          <div className="slider__text text">{props.slide.text}</div>
        </div>
      </div>
    </article>
  );
};

export default Slide;
