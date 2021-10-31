import React, { useState, useEffect } from "react";
import Slide from "./Slide";

const Slider = () => {
  const [slides, setSlides] = useState([
    {
      image_480: "examples/lewandowski-480.jpg",
      image_720: "examples/lewandowski-720.jpg",
      image_960: "examples/lewandowski-960.jpg",
      image_1440: "examples/lewandowski-1440.jpg",
      badge: "Sport",
      badge_color: "green",
      author: "Krzysztof Stanowski",
      title: "Robert Lewandowski's new record!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
      justo ligula. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Duis eu sem in enim laoreet fermentum id ut lacus. Aenean
      vel lorem sed quam porta aliquam. Vestibulum ut gravida orci.
      Integer finibus ex laoreet quam iaculis, at placerat quam blandit.
      Sed at magna magna. Etiam libero dolor, rhoncus ut quam vitae,
      maximus scelerisque purus.`,
    },
    {
      image_480: "examples/lewandowski-480.jpg",
      image_720: "examples/lewandowski-720.jpg",
      image_960: "examples/lewandowski-960.jpg",
      image_1440: "examples/lewandowski-1440.jpg",
      badge: "Sport",
      badge_color: "green",
      author: "Krzysztof Stanowski",
      title: "Robert Lewandowski's new record 2!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
      justo ligula. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Duis eu sem in enim laoreet fermentum id ut lacus. Aenean
      vel lorem sed quam porta aliquam. Vestibulum ut gravida orci.
      Integer finibus ex laoreet quam iaculis, at placerat quam blandit.
      Sed at magna magna. Etiam libero dolor, rhoncus ut quam vitae,
      maximus scelerisque purus.`,
    },
  ]);

  useEffect(() => {
    const sliderHandler = new SliderHandler("slider");
  }, []);

  return (
    <div className="container container--xl container--full">
      <section className="slider" id="slider">
        <div className="slider__track">
          {slides.map((slide, index) => {
            return <Slide key={index} index={index} slide={slide} />;
          })}
        </div>
        {slides.length > 1 && (
          <div className="slider__pagination">
            {slides.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={`slider__pagination-item${
                    index === 0 ? " slider__pagination-item--active" : ""
                  }`}
                ></div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

class SliderHandler {
  constructor(id = null, props = {}) {
    this.slider = document.getElementById(id);
    if (this.slider === undefined || this.slider === null) return null;

    this.props = {
      autoplay: true,
      autoplaySpeed: 4000,
      transition: 1000,
      ...props,
    };

    this.track = this.slider.querySelector(".slider__track");
    this.slides = this.init();
    this.pagination = this.slider.querySelectorAll(".slider__pagination-item");
    this.autoplay = this.props.autoplay ? this.startAutoplay() : null;

    this.bindEvents();
  }

  bindEvents = () => {
    this.pagination.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.goToSlide(index);
      });
    });
  };

  init = () => {
    this.slider.classList.add("slider--initialized");
    const slides = this.slider.querySelectorAll(".slider__slide");

    if (slides.length) {
      slides.forEach((slide) => {
        slide.style.transition = `opacity ${this.props.transition}ms`;
      });

      return slides;
    } else return null;
  };

  goToSlide = (index) => {
    if (
      index > this.slides.length - 1 ||
      this.slides[index].classList.contains("slider__slide--active") ||
      this.slider.classList.contains("slider__slide--block")
    )
      return;

    clearTimeout(this.autoplay);
    this.slider.classList.add("slider__slide--block");

    this.slides.forEach((slide, index) => {
      slide.classList.remove("slider__slide--active");
      this.pagination[index].classList.remove(
        "slider__pagination-item--active"
      );
    });
    this.slides[index].classList.add("slider__slide--active");
    this.pagination[index].classList.add("slider__pagination-item--active");

    setTimeout(() => {
      this.slider.classList.remove("slider__slide--block");
      this.autoplay = this.startAutoplay();
    }, this.props.transition);
  };

  startAutoplay = () => {
    return setTimeout(() => {
      let index =
        parseInt(
          this.slider
            .querySelector(".slider__slide--active")
            .getAttribute("data-index")
        ) + 1;

      if (index > this.slides.length - 1) index = 0;

      this.goToSlide(index);
    }, this.props.autoplaySpeed);
  };
}

export default Slider;
