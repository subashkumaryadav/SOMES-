import React from "react";
import Layout from "../../components/layout/Layout";
import "./styles.css";
import { Link } from "react-scroll";
import Gallery from "../../components/gallery/Gallery.js";
const Home = () => {
  return (
    <Layout title={"Home-SOMES"}>
      <div className="header-container">
        <div className="header-content">
          <h1>
            Mech <span>Makes</span> My <span>Mind</span>
          </h1>
          <p>And My Mind Makes Machine</p>
          <button>
            <Link
              to="about"
              duration={150}
              smooth={true}
              offset={-100}
              className="text-white text-decoration-none"
            >
              Learn More
            </Link>
          </button>
        </div>
        <div className="header-image-container">
          <img
            src="/image/gallery/hero-img.jpg"
            alt=""
            className="header-image"
          />
          <img src="/image/gallery/wheel.svg" alt="" className="wheel" />
        </div>
      </div>
      <hr />
      {/* About us section */}

      <div className="row about-container" id="about">
        <div className="col-lg-7 about-content">
          <h1>About-Us</h1>
          <p>
            The{" "}
            <strong>SOCIETY OF MECHANICAL ENGINEERING STUDENTS (SOMES)</strong>{" "}
            is the non-political and non-profitable organisation of Department
            of Mechanical Engineering, Purwanchal Campus. Established in 2013,
            SOMES has been uplifting the educational experience at Purwanchal
            Campus through engaging events, impactful training programs, and
            strong connections with alumni and the administration. The
            organisation aims to create an environment that fosters innovation,
            leadership qualities, and prepares students for successful career in
            mechanical engineering.
          </p>
        </div>
        <div className="col-lg-4 about-image">
          <img
            src="/image/gallery/campus-image.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <hr />
      {/* MESSAGE FROM PRESIDENT */}

      <div className="row  president-msg-container">
        <div className="col-lg-7  president-msg">
          <h1>Message From President</h1>

          <p>
            Warm greetings, myself Anil Dangi, current president at{" "}
            <strong>SOMES</strong>, Hailing from the beautiful region of Jumla,
            I bring with me a unique perspective and a deep appreciation for the
            rich cultural diversity that exists within our campus community. The
            atmosphere of Purwanchal Campus has played a significant role in
            shaping my journey and igniting my love for mechanical engineering.
            At SOMES, we strive to create a vibrant community where members can
            excel in their knowledge, skills, and overall professional
            development in mechanical engineering. We believe in the power of
            sharing what we know, and I am committed to fostering an inclusive
            environment that values diverse backgrounds and experiences. Thank
            you for being a part of SOMES, and I am excited to embark on this
            remarkable journey with all of you.
          </p>
        </div>
        <div className="col-lg-4 president-image">
          <img
            src="/image/members/President.jpg"
            alt=""
            className="img-fluid president-img"
          />
        </div>
      </div>

      {/* <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="/image/members/President.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Hello</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="/image/members/President.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Hello</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="/image/members/President.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Hello</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <hr />
      <h1 className="d-flex justify-content-center crousel-content">
        Some Glimpses Of Mech-Camp
      </h1>
      <Gallery />
      <hr />
    </Layout>
  );
};

export default Home;
