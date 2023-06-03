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
              title="Wyzant - Find a tutor"
              description="The Wyzant App makes it easy for parents and students to instantly connect with expert tutors for in-person and online lessons. As the world’s leading tutoring network, we help more students in more places than anyone else. We’re dedicated to helping everyone achieve their personal and academic goals and provide a yearly college scholarship contest through our website."
              demoLink="https://apps.apple.com/us/app/wyzant-find-tutors-for-homework/id1042081370"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Innclude - Event managment"
              description="Include is an event platform where you can create private events between you and users in your phone directory. You can also create events that the entire city can see and you can interact with other users."
              demoLink="https://apps.apple.com/tr/app/innclude/id1460835077?l=tr&platform=iphone"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              demoLink=""
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CodeMode"
              description="It is an online platform for students to take the tests and teachers to create those tests - all examinations covered. CodeMode provides students insight into their preparation and performance using advance data analysis. Students can see their strength and weakness by subject and topics, compare themselves at national and international level, understand their improvement over a period of time, find test taking pattern, access wide variety of practice tests and get a clear picture on speed as well as accuracy. The more you practice, more you will know about yourself and better you will become - that is a how CodeMode helps you."
              demoLink="https://play.google.com/store/apps/details?id=com.perfectice"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Almedad Annateq المداد الناطق"
              description="Mushaf Almedad Annateq has new idea for reading arabic that using the color coding system."
              demoLink="https://apps.apple.com/us/app/almedad-annateq-%D8%A7%D9%84%D9%85%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B7%D9%82/id1644702380"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FAME - Connect Online"
              description="We are connecting people. Someone a Girlfriend or just a friend or a contact inside the bank world, or an investor. People share their interest with others and connect. You make a profile. Write your information and when you login you can choose between private/business. If you chose private you enter the groups where other people are. this is speed meeting. 60 seconds you talk with 5 others. After 60 seconds you get a popup. Where it stands. Do you wanna connect with this person. Yes/no"
              demoLink="https://apps.apple.com/app/1606940095"
              store="Apple"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
