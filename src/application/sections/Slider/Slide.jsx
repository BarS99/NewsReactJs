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
            srcSet={`${props.slide.image_960} 960w, ${props.slide.image_1440} 1440w, ${props.slide.image_1920} 1920w`}
          />
          <source
            srcSet={`${props.slide.image_480} 480w, ${props.slide.image_720} 720w`}
          />
          <img src={`${props.slide.image_1920}`} alt="Robert Lewandowski" />
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
              <FontAwesomeIcon icon={faUser} aria-hidden="true" />
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
