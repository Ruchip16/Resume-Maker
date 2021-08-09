import React, { useState } from "react";
import { BlogData } from "./blogImg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import "../css/LandingPage.css";

function BlogSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {BlogData.map((blog, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index == current && (
              <div>
                <img
                  src={blog.image}
                  alt="blog image"
                  style={{ width: "50vw", borderRadius: "20px" }}
                />
                <div className="title">
                  <h3 style={{ textAlign: "center" }}>{blog.title}</h3>
                  <span>Author</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BlogSlider;
