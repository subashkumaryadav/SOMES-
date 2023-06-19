import React from "react";
import Layout from "../../components/layout/Layout";
import "./styles.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Layout>
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
      {/* <div className="about-container" id="about">
          <div className="about-content">
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
          <div className="about-image ">
            <img
              className="img=fluid"
              src="/image/gallery/campus-image.jpg "
              alt=""
            />
          </div>
        </div> */}
      <div className="row about-container">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="/image/gallery/campus-image.jpg "
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              The{" "}
              <strong>
                SOCIETY OF MECHANICAL ENGINEERING STUDENTS (SOMES)
              </strong>{" "}
              is the non-political and non-profitable organisation of Department
              of Mechanical Engineering, Purwanchal Campus. Established in 2013,
              SOMES has been uplifting the educational experience at Purwanchal
              Campus through engaging events, impactful training programs, and
              strong connections with alumni and the administration. The
              organisation aims to create an environment that fosters
              innovation, leadership qualities, and prepares students for
              successful career in mechanical engineering.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
