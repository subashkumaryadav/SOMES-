import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./Form";
import "./Alumini.css";

const Alumni = () => {
  const openLink = (event) => {
    event.preventDefault();
    const url =
      "https://docs.google.com/spreadsheets/d/1Z-XhVwVJhmBS59JZf48vlpo75KVpERUT2OlbXQmbI80/edit?resourcekey#gid=1298547366";
    window.open(url, "_blank");
  };

  return (
    <Layout title={"Alumni-SOMES"}>
      <div className="alumini_content">
        <h1>IOE Purwanchal Campus,BME-Alumni Database</h1>
        <p className="mx-5">
          Society of Mechanical Engineering Students (SOMES), a vibrant
          organization comprising students from the IOE Purwanchal Campus BME
          program, has taken the initiative to launch a comprehensive data
          collection campaign for the esteemed alumni body. Our primary
          objective is to establish a robust and interconnected network of
          alumni, fostering a strong sense of community and mutual support. We
          kindly request your assistance by providing us with the following
          information.
        </p>
        <br />
        <p>
          Fill the form below to connect and help other Alumni connect with you.
        </p>
        <button onClick={openLink} className="btn btn-primary">
          View Report
        </button>
      </div>
      <Form />
    </Layout>
  );
};

export default Alumni;
