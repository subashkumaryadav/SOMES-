import React from "react";
import Layout from "../../components/layout/Layout";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const Gal = () => {
  return (
    <Layout>
      <div className="gallery-title">
        <h1 className="text-center">MechCamp 2.0 Gallery</h1>
      </div>
      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/jeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="/image/gallery/camera.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/fifa.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="/image/gallery/trio.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="/image/gallery/roboball.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/lamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="/image/gallery/vintageJeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/fifa2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/mechcamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/football.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/ouch.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="/image/gallery/dragon.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/tt.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/group.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/slide.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>
      </MDBRow>
    </Layout>
  );
};

export default Gal;
