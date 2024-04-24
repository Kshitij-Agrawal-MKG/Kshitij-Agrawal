import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn,FaPhone } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionately in love with programming, I've acquired a solid coding foundation✨
              <br />
              <br />I'm fluent in classics languages like
              <i>
                <b className="purple"> Python, Java </b>along with other fundamental <b className="purple">AI skills</b> 
              </i>
              <br />
              <br />
              My primary focus revolves around the development of &nbsp;
              <i>
                <b className="purple">AI technology </b> products and associated domains{" "}
                
              </i>
              <br />
              <br />
              I also leverage my passion for developing products by applying 
               <b className="purple"> Natural Language Processing, Computer Vision, Generative AI</b> and
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning Algorithms
                </b>
              </i>
              &nbsp; wherever feasible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="tel:7877598110"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaPhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:kshitijagrawal53@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kshitij-agrawal-319b36293/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://github.com/Kshitij-Agrawal-MKG"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> 
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
