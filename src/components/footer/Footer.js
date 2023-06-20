import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <h1 className="text-center"> Explore More</h1>
      <div className="social-media my-5">
        <Link
          to="https://www.facebook.com/somesioepcdharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>

        <Link
          to="https://www.instagram.com/aimes.ioe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="row my-5 mx-5">
        {/* this col is for contacts */}
        <div className="col-lg-6 col-sm-6">
          <div className="row footer-contacts">
            <div className="col-lg-6 col-sm-6">
              <h2>President</h2>
              <p>Mr.Anil Dangi</p>
              <p>
                <FaEnvelope /> Royalak297@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> 9863450956
              </p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <h2> Vice President</h2>
              <p>Mr.Suraj Bhusal</p>
              <p>
                <FaEnvelope /> bhusalsuraj1009@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> 9746413683
              </p>
            </div>
          </div>
        </div>
        {/* this col is for map */}
        <div className="col-lg-6 col-sm-6 my-4 div_map">
          {
            <iframe
              className="img-fluid map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.917467843463!2d87.2923586!3d26.792861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b606ce89f9%3A0x7423e72f8e139e05!2sPurwanchal%20Engineering%20Campus(ERC)!5e0!3m2!1sen!2snp!4v1687102715794!5m2!1sen!2snp"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        </div>
      </div>
      <h2 className="text-center end-content">
        Society of Mechanical Engineering Students ERC
      </h2>
    </footer>
  );
};

export default Footer;
