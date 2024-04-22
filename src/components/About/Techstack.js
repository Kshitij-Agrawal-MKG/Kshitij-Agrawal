import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiMysql,
  SiMicrosoftsqlserver,
  SiVaadin,
  SiStreamlit,
  SiDash,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

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
        <TbBrandGolang />
        <div style={{fontSize: '25%'}}>ML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{fontSize: '25%'}}>NLP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{fontSize: '25%'}}>CV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <div style={{fontSize: '25%'}}>G AI</div>
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
        <DiPython />
        <div style={{fontSize: '25%'}}>Seaborn</div>
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
        <SiPostgresql />
        <div style={{fontSize: '25%'}}>Postgresql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <div style={{fontSize: '25%'}}>Microsoft Sql Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{fontSize: '25%'}}>Mongo Db</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVaadin />
        <div style={{fontSize: '25%'}}>Vaadin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <div style={{fontSize: '25%'}}>Streamlit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDash />
        <div style={{fontSize: '25%'}}>Dash</div>
      </Col>
    </Row>
  );
}

export default Techstack;
