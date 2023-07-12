import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { MDBCol, MDBRow, MDBModal, MDBModalBody } from "mdb-react-ui-kit";

const Gal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
  return (
    <Layout title={"Gallery-SOMES"}>
      <div className="gallery-title">
        <h1 className="text-center">MechCamp 2.0 Gallery</h1>
      </div>
      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/jeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            onClick={() => openModal("/image/gallery/jeep.jpg")}
          />

          <img
            src="/image/gallery/camera.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
            onClick={() => openModal("/image/gallery/camera.jpg")}
          />
          <img
            src="/image/gallery/fifa.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/fifa.jpg")}
            alt="Boat on Calm Water"
          />
          <img
            src="/image/gallery/trio.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/trio.jpg")}
            alt="Boat on Calm Water"
          />
          <img
            src="/image/gallery/roboball.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/roboball.jpg")}
            alt="Boat on Calm Water"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/lamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/lamp.jpg")}
            alt="Mountains in the Clouds"
          />

          <img
            src="/image/gallery/vintageJeep.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/vintageJeep.jpg")}
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/fifa2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/fifa2.jpg")}
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/mechcamp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/mechcamp.jpg")}
            alt="Wintry Mountain Landscape"
          />
          <img
            src="/image/gallery/football.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/football.jpg")}
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src="/image/gallery/ouch.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/ouch.jpg")}
            alt="Waves at Sea"
          />

          <img
            src="/image/gallery/dragon.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/dragon.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/tt.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/tt.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/group.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/group.jpg")}
            alt="Yosemite National Park"
          />
          <img
            src="/image/gallery/slide.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            onClick={() => openModal("/image/gallery/slide.jpg")}
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>
      </MDBRow>
      <MDBModal show={modalOpen} onHide={closeModal}>
        <MDBModalBody>
          {selectedImage && (
            <>
              <button onClick={closeModal} className="btn btn-primary">
                Close
              </button>

              <img src={selectedImage} className="w-100" alt="Zoomed" />
            </>
          )}
        </MDBModalBody>
      </MDBModal>
    </Layout>
  );
};

export default Gal;
