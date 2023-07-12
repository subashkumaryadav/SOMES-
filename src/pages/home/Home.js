import React from "react";
import Layout from "../../components/layout/Layout";
import "./styles.css";
import { Link } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery.js";
import Anil from "../../data/assets/members/ANIL.jpg";
import hod from "../../data/assets/members/hod.jpg";
const Home = () => {
  return (
    <Layout title={"Home-SOMES"}>
      <div className="header-container">
        <div className="header-content">
          <h1>
            Mech <span>Makes</span> My <span>Mind</span>
          </h1>
          <p>And My Mind Makes Machine!!!</p>
          <button>
            <a href="#about" className="text-white text-decoration-none">
              Learn More
            </a>
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
          <img src={Anil} alt="" className="img-fluid president-img" />
          <h5 className="text-center">Mr. Anil Dangi</h5>
          <h6 className="text-center text-muted">PRESIDENT of SOMES</h6>
        </div>
      </div>
      <hr />
      <div className="row  hod-msg-container">
        <div className="col-lg-7  hod-msg">
          <h1>Message From HOD</h1>

          <p>
            Students, I am thrilled to announce MechCamp, the grand event
            organized by the Mechanical Society (SOMES) in our department.
            MechCamp is a unique opportunity for mechanical engineering
            enthusiasts to showcase their skills, exchange ideas, and ignite
            their passion for the field. With engaging workshops, technical
            sessions, guest lectures by industry experts, and hands-on
            activities, MechCamp promises an unforgettable learning experience.
            SOMES, our esteemed Mechanical Society, plays a vital role in
            organizing MechCamp and creating a supportive community for
            mechanical engineering students. By participating in SOMES, you can
            enhance your academic journey through competitions, seminars, and
            industry interactions. Our department takes pride in providing a
            comprehensive curriculum led by experienced faculty members. With
            state-of-the-art labs and cutting-edge research facilities, we
            ensure that you receive a well-rounded education and stay at the
            forefront of mechanical engineering advancements. Make the most of
            the resources available to you, engage in research projects,
            internships, and industry collaborations. MechCamp is just one of
            the avenues we offer to foster your growth and keep you updated with
            the latest developments in the field. I encourage you to actively
            participate in MechCamp and seize this extraordinary opportunity.
            Together, let's ignite our passion, expand our horizons, and make
            significant contributions to the world of mechanical engineering.
          </p>
        </div>
        <div className="col-lg-4 hod-image">
          <img src={hod} alt="" className="img-fluid hod-img" />
          <h5 className="text-center">PROF. ROSHAN GHIMIRE</h5>
          <h6 className="text-center text-muted">
            HOD of Mechanical Department
          </h6>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="image/project/material.svg"
                height="320px"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Study Materials</h5>
                <p className="card-text">
                  All notes available with youtube links.
                </p>
                <Link to="/notes" class="btn btn-primary">
                  Go
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="/image/project/event.svg"
                height="320px"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">MechCamp 2.0</h5>
                <p className="card-text">
                  Grand Event that SOMES organizes annually.
                </p>
                <Link to="/events" class="btn btn-primary">
                  Go
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="/image/project/alumni.svg"
                alt=""
                height="320px"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Alumni</h5>
                <p className="card-text">Form for Mechanical Pass-Outs.</p>
                <Link to="/alumni" class="btn btn-primary">
                  Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
