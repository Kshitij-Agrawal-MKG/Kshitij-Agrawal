import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Trackem"
              description="Trackem AI based car bike tracking system  uses YOLO v8 and OpenCV for real-time vehicle detection and license plate recognition, integrating with criminal databases. It sends alerts via Gmail and Telegram APIs, enhancing surveillance efficiency"
              ghLink="https://github.com/Kshitij-Agrawal-MKG/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Automatic Image Captioning"
              description="This project aims to develop a Deep Learning application that merges cutting-edge techniques in computer vision and natural language processing. The system takes images as inputs and generates human-readable descriptions."
              ghLink="https://github.com/Kshitij-Agrawal-MKG/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gemini"
              description="Welcome to the Gemini repository! This project introduces a cutting-edge Streamlit web application powered by Google's Generative AI model, Gemini Pro. With Gemini, users can effortlessly obtain insightful answers to their questions through an interactive interface."
              ghLink="https://github.com/Kshitij-Agrawal-MKG/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hand Gesture Recognition"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Kshitij-Agrawal-MKG/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Spam Email Detection"
              description="Spam detection is crucial in filtering out unwanted or unsolicited messages, such as emails or text messages. It involves employing machine learning algorithms to analyze message content and identify patterns associated with spam. This repository offers a Python script utilizing various machine learning models for classifying spam messages from ham messages."
              ghLink="https://github.com/Kshitij-Agrawal-MKG/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Speech Summarizer"
              description="This tool is designed to transcribe and summarize speech or audio files efficiently."
              ghLink="https://github.com/Kshitij-Agrawal-MKG/speech-summarizer" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
