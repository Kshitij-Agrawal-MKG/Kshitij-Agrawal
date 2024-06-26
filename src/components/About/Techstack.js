import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaBrain } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiMysql,
  SiVaadin,
  SiStreamlit,
} from "react-icons/si";

import { computerVision, azure } from "../../Assets/icons";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{fontSize: '25%'}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div style={{fontSize: '25%'}}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <div style={{fontSize: '25%'}}>Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoIosChatboxes  />
        <div style={{fontSize: '25%'}}>Natural Language Processing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={computerVision} style={{width: '50px', height: '50px'}}/>
        <div style={{fontSize: '25%'}}>Computer Vision</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div style={{fontSize: '25%'}}>Pytorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div style={{fontSize: '25%'}}>Tensorflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div style={{fontSize: '25%'}}>Scikit Learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div style={{fontSize: '25%'}}>Keras</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div style={{fontSize: '25%'}}>Numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div style={{fontSize: '25%'}}>Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={azure} style={{width: '50px', height: '50px'}}/>
        <div style={{fontSize: '25%'}}>Microsoft Azure</div>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{fontSize: '25%'}}>git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <div style={{fontSize: '25%'}}>Open Cv</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div style={{fontSize: '25%'}}>My Sql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVaadin />
        <div style={{fontSize: '25%'}}>Vaadin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <div style={{fontSize: '25%'}}>Streamlit</div>
      </Col>
    </Row>
  );
}

export default Techstack;
