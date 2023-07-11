import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaFacebook, FaPhone,FaVoicemail } from "react-icons/fa";
import './committee.css';
const Committee = () => {
  return <Layout title={"Committee-SOMES"}>
     <div id='model3'>
        <h1 className='model-title'>Team Model 3</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={200} height={200} src=""/>
            <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <FaFacebook />
                  <FaPhone />
                  <FaVoicemail />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={"Member2"}/>
            <div className="description">
                <h1>Omar Nadir</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <FaFacebook />
                  <FaPhone />
                  <FaVoicemail />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={"Member3"}/>
            <div className="description">
                <h1>Khaled MAHER</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <FaFacebook />
                  <FaPhone />
                  <FaVoicemail />
                </div>
            </div>
          </div>
        </div>
    </div>
  </Layout>;
};

export default Committee;

