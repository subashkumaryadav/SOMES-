import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-primary slide w-80 container"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src="/image/gallery/vintageJeep.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ width: "1140px", height: "450px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="/image/gallery/camera.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: "1140px", height: "450px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/image/gallery/jeep.jpg"
              className="d-block w-100"
              style={{ width: "1140px", height: "450px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Gallery;
