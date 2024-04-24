import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kshitij Agrawal </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />
            I am currently learning and exploring the world of Artificial Intelligence.
            <br />
            I have pursuing my Bachelor of Technology (B.Tech) in Information Technology at
            SKIT, Jaipur.
            <br />
            <br />
            Apart from programming, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaboration
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kshitij</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
