import React, { useState } from "react";
import { BlogData } from "./blogImg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import SearchIcon from "@material-ui/icons/Search";
import "../css/LandingPage.css";

function BlogSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");
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
    <div className="col">
      <div className="searchbar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search a keyword"
          style={{
            width: "40vw",
            backgroundColor: "rgb(48,109,159,0.5)",
            borderRadius: "10px",
            height: "2rem",
            border: "none",
          }}
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />

        <div className="slider">
          <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
          <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
          {BlogData.filter((blog) => {
            if (searchTerm == "") {
              return blog;
            } else if (
              blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return blog;
            }
          }).map((blog, index) => {
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
                      style={{
                        width: "50vw",
                        height: "30vw",
                        borderRadius: "20px",
                      }}
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
      </div>
    </div>
  );
}

export default BlogSlider;
