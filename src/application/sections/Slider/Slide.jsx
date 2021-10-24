import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
  return (
    <article className="slider__slide">
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
          <div className="badge badge--secondary">Sport</div>
          <address className="author">
            <div className="author__icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="author__name">Krzysztof Stanowski</div>
          </address>
          <h2 className="slider__title">Robert Lewandowski's new record!</h2>
          <div className="slider__text text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            justo ligula. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Duis eu sem in enim laoreet fermentum id ut lacus. Aenean
            vel lorem sed quam porta aliquam. Vestibulum ut gravida orci.
            Integer finibus ex laoreet quam iaculis, at placerat quam blandit.
            Sed at magna magna. Etiam libero dolor, rhoncus ut quam vitae,
            maximus scelerisque purus.
          </div>
        </div>
      </div>
    </article>
  );
};

export default Slide;
