import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiVercel,
  SiAnaconda,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{ fontSize: "25%" }}>Visual Studio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div style={{ fontSize: "25%" }}>Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div style={{ fontSize: "25%" }}>Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={{ fontSize: "25%" }}>Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div style={{ fontSize: "25%" }}>Jupyter Notebook</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
