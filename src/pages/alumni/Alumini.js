import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./Form";
import "./Alumini.css";

const Alumni = () => {
  const openLink = (event) => {
    event.preventDefault();
    const url =
      "https://docs.google.com/spreadsheets/d/12VJo5pUWsc20uNZbh9-rXeUOLiJ6h2PfUOFw23FY6TE/edit?resourcekey#gid=1920454552";
    window.open(url, "_blank");
  };

  return (
    <Layout title={"Alumni-SOMES"}>
      <div className="alumini_content">
        <h1>IOE Purwanchal Campus,BME-Alumni Database</h1>
        <p>
          A Campaign for Data collection of IOE- Purwanchal Campus BME Alumni
          body. Initiated by Society of Mechanical Engineering Students(SOMES),
          an active IOE Purwanchal Campus BME students based organization, with
          an aim to build a strong alumni network. Please support us by
          providing the following information.
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
