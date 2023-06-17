import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alfaiz Khan </span>
            from <span className="purple"> India.</span>
            <br />I have completed my graduation in
            <span className="purple">
              {" "}
              BCA (Bachelor of Computer Applications){" "}
            </span>
            from Makhanlal Chaturvedi National University of Journalism and
            Communication, Bhopal
            <br />
            Additionally, I am currently employed as a software developer at
            <span className="purple"> Technorizen Software Solutions </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Basketball
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Learning
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Alfaiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
