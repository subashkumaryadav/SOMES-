import React from "react";
import Layout from "../../components/layout/Layout";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import "./styles.css";

const Events = () => {
  return (
    <Layout title={"Events-SOMES"}>
      <div className="video-container  col-lg-5 ">
        <video src="/video/driftmud.mp4" autoPlay loop muted></video>
        <div className="overlay"></div>

        <div className="video-content ">
          <h2 className="text-sm text-lg">Mech-Camp 2.0</h2>
        </div>
      </div>
      <hr />
      <div className="mech-camp-content container">
        <h1 className="text-center">Mech-Camp 2.0</h1>
        <p>
          Welcome to the thrilling world of mechanical engineering! The annual
          programme MECH CAMP 2.0 organized by the Society Of Mechanical
          Engineering Society (SOMES) is an eagerly anticipated event that
          brings together passionate individuals, aspiring engineers, and
          industry professionals to celebrate the wonders of this dynamic field.
          With gears turning and innovations abounding, the camp serves as a
          platform for mechanical engineering enthusiasts to explore, learn, and
          connect with like-minded individuals.{" "}
        </p>
      </div>
      <hr />
      <div className="event-heaing text-center">
        <h1>Our Events</h1>
      </div>
      <div className="card-row"></div>
      <MDBCardGroup>
        <div className="row">
          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/presentation.jpg"
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>
                  Research Idea Presentation Competition
                </MDBCardTitle>
                <MDBCardText>
                  "Presenting a research idea concisely and effectively to
                  capture the interest and support of the audience."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/demonstration.jpg"
                alt="..."
                position="top"
                height="320px"
              />
              <MDBCardBody>
                <MDBCardTitle>Project Demonstration</MDBCardTitle>
                <MDBCardText>
                  "Showcasing the functionality, features, and outcomes of a
                  project through a live demonstration."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/talk.jpg"
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Innovation Talk</MDBCardTitle>
                <MDBCardText>
                  "Informative discussion that explores groundbreaking ideas,
                  and creative solutions to inspire positive change."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/3d.jpg"
                alt="..."
                position="top"
                height="320px"
              />
              <MDBCardBody>
                <MDBCardTitle>3D Modelling Competition</MDBCardTitle>
                <MDBCardText>
                  "Competitive event showcasing skills by creating
                  three-dimensional digital models using specialized software."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/art.jpg"
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Junk Art Competition</MDBCardTitle>
                <MDBCardText>
                  "Artistic expression that involves creating recycled
                  materials, transforming trash into treasures."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/robo.jpg"
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Robo Soccer</MDBCardTitle>
                <MDBCardText>
                  "Autonomous robots playing soccer, showcasing AI and robotics
                  skills."
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 g-3">
            <MDBCard>
              <MDBCardImage
                src="/image/project/fifa.jpg"
                alt="..."
                height="320px"
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>FIFA Championship</MDBCardTitle>
                <MDBCardText>
                  "Global virtual tournament showcasing gaming skills in FIFA.""
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </MDBCardGroup>
    </Layout>
  );
};

export default Events;
