import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import wyzant from "../../Assets/Projects/wyzant.png";
import include from "../../Assets/Projects/include.png";
import codemode from "../../Assets/Projects/codemode.png";
import speedMeeting from "../../Assets/Projects/speedMeeting.png";
import ShhParty from "../../Assets/Projects/ShhParty.png";
import manerasanu from "../../Assets/Projects/manerasanu.png";
import Arabic from "../../Assets/Projects/Arabic.png";
import synchrony from "../../Assets/Projects/synchrony.png";
import allfit from "../../Assets/Projects/allfit.png";
import user from "../../Assets/Projects/user.png";
import driver from "../../Assets/Projects/driver.png";

import viceseo from "../../Assets/Projects/viceseo.png";
import bikedoctor_provider from "../../Assets/Projects/bikedoctor_provider.png";
import bikedoctor_user from "../../Assets/Projects/bikedoctor_user.png";
import mumtreprenuors from "../../Assets/Projects/mumtreprenuors.png";
import bin_bin from "../../Assets/Projects/bin_bin.png";

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
              imgPath={wyzant}
              isBlog={false}
              title="Wyzant - Find a tutor"
              description="The Wyzant App makes it easy for parents and students to instantly connect with expert tutors for in-person and online lessons. As the world’s leading tutoring network, we help more students in more places than anyone else. We’re dedicated to helping everyone achieve their personal and academic goals and provide a yearly college scholarship contest through our website."
              demoLink="https://apps.apple.com/us/app/wyzant-find-tutors-for-homework/id1042081370"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codemode}
              isBlog={false}
              title="CodeMode"
              description="It is an online platform for students to take the tests and teachers to create those tests - all examinations covered. CodeMode provides students insight into their preparation and performance using advance data analysis. Students can see their strength and weakness by subject and topics, compare themselves at national and international level, understand their improvement over a period of time, find test taking pattern,."
              demoLink="https://play.google.com/store/apps/details?id=com.perfectice"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShhParty}
              isBlog={false}
              title="ShhParty App"
              description="ShhParty App is a novel web and mobile platform that not only recreates a Silent Party virtually, but allows DJs to share their creative music, grow an audience and make an income (selling tickets and collecting tips). ShhPartyers (app users), can attend the ShhParty right from their mobile device and dance/sing along in the safety and comfort of their homes or in person at the ShhParty venue."
              demoLink="https://play.google.com/store/apps/details?id=com.shhparty&hl=en_US&gl=US"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={include}
              isBlog={false}
              title="Innclude - Event managment"
              description="Include is an event platform where you can create private events between you and users in your phone directory. You can also create events that the entire city can see and you can interact with other users."
              demoLink="https://apps.apple.com/tr/app/innclude/id1460835077?l=tr&platform=iphone"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arabic}
              isBlog={false}
              title="Almedad Annateq المداد الناطق"
              description="Mushaf Almedad Annateq has new idea for reading arabic that using the color coding system."
              demoLink="https://apps.apple.com/us/app/almedad-annateq-%D8%A7%D9%84%D9%85%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B7%D9%82/id1644702380"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedMeeting}
              isBlog={false}
              title="FAME - Connect Online"
              description="We are connecting people. Someone a Girlfriend or just a friend or a contact inside the bank world, or an investor. People share their interest with others and connect. You make a profile. Write your information and when you login you can choose between private/business. If you chose private you enter the groups where other people are. this is speed meeting. 60 seconds you talk with 5 others. After 60 seconds you get a popup. Where it stands. Do you wanna connect with this person. Yes/no"
              demoLink="https://apps.apple.com/app/1606940095"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manerasanu}
              isBlog={false}
              title="Manere Sanus"
              description="We offer a health concept for 0-112 years and make sure that you are supported and challenged correctly, qualitatively, according to the latest sports science findings, no matter what state of health you are in at the moment. We are a recognized and certified service provider for rehabilitation sports according to §44 SGB. In addition to rehab sports, you can do something preventive for your health with us and try out and practice our range of popular sports."
              demoLink="https://play.google.com/store/apps/details?id=com.manere.sanus"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synchrony}
              isBlog={false}
              title="Synchrony App"
              description="Plataforma online para coordinar tres grupos de personas: médico, biólogo y paciente en un proceso de reproducción asistida. El paciente estará conectado a través de una app desde su móvil que le avisará de cuando tiene que tomar la medicación. El médico y el biólogo tendrán acceso a la plataforma web donde introducirán los datos médicos de la pacientes."
              demoLink="https://play.google.com/store/apps/details?id=com.synchrony.android.app"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allfit}
              isBlog={false}
              title="All fit - Fitness App"
              description="With the AllFit (FitOL) application, you will now save time and have the chance to exercise in the nearest Fitness Halls. Using the map of the mobile application, you will be able to narrow down the fitness salons in each region of the city and take advantage of the services offered by those salons. By downloading the application, registering and reading the QR code shown to you at the entrance of the desired salon, you will enter and start your time."
              demoLink="https://play.google.com/store/apps/details?id=com.all_fit"
              store="Google"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user}
              isBlog={false}
              title="3T- Request a ride"
              description="Experience the unbeatable combination of affordability and passenger safety with 3T, the leading taxi app that revolutionizes your transportation experience. As the only company that provides comprehensive insurance for passengers during their trip, 3T ensures your peace of mind while offering the most competitive prices in the market."
              demoLink="https://play.google.com/store/apps/details?id=com.taxi_user"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="3T Driver"
              description="Join the 3T Driver community and experience a new level of earning potential and driver support. As a valued driver on our platform, we prioritize your success by offering an excellent work environment, continuous communication, and ensuring the highest percentage of income goes directly to you."
              demoLink="https://play.google.com/store/apps/details?id=com.RN_3T_Driver"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viceseo}
              isBlog={false}
              title="Viceseo (Recruitment Managing Platform)"
              description="WITH OUR IOS APP IT IS A SIMPLE, FAST, AND EASY TO MANAGE YOUR ACCOUNT AND NEW DRIVERS! • KEEP YOUR CANDIDATES AND HIRING TEAM WITHIN REACH WITH OUR MOBILE APP. • REDUCE TIME TO HIRE AND EASILY MANAGE NEW CDL DRIVERS • PROVIDES STATISTICS FOR HOW MANY POTENTIAL DRIVERS YOUR COMPANY RECEIVED DAY-MONTH-YEAR"
              demoLink="https://apps.apple.com/us/app/viceseo/id1601840773"
              store="Apple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mumtreprenuors}
              isBlog={false}
              title="Mumtrepreneurs"
              description="The business coach will be running several courses so there will be a group inside the app that people can join relevant to that course. The group should be like a mobile Facebook group page. A feed you can scroll down on, comment in and interact in."
              demoLink="https://play.google.com/store/apps/details?id=com.mumtrepreneurs"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikedoctor_provider}
              isBlog={false}
              title="Mr. Bike Doctor"
              description="We offer a wide variety of services from basic servicing to repairs. Get access to experienced and certified professional bike mechanics right at your doorstep with required tools, genuine spare parts and an affordable price. The possibilities are endless, just download our App, register and request for a service. It is as simple as that!!"
              demoLink="https://play.google.com/store/apps/details?id=com.bike_doctor"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikedoctor_user}
              isBlog={false}
              title="Mr. Bike Doctor (Provider)"
              description="Mr. Bike is the best doorstep Bike service & repair App providing all types of services to over a million vehicle owners. Register with us and get access to service/repair request right on your mobile. You can accept requests on the go, provide the necessary repair/service and collect your fees through the App. Expand your business by downloading our App and registering in a few easy steps and get started."
              demoLink="https://play.google.com/store/apps/details?id=com.bike_doctor_provider"
              store="Google"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bin_bin}
              isBlog={false}
              title="Binbin Recycle"
              description="Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot. Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot"
              demoLink="https://play.google.com/store/apps/details?id=com.bin_recycle"
              store="Google"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
