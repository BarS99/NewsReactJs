import React from "react";
import Slide from "./Slide";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container container--xl container--full">
        <Slide />
      </div>
      <div className="slider__pagination">
        <div className="slider__pagination-item"></div>
        <div className="slider__pagination-item slider__pagination-item--active"></div>
        <div className="slider__pagination-item"></div>
        <div className="slider__pagination-item"></div>
      </div>
    </section>
  );
};

export default Slider;
