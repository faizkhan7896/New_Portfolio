import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  CgSoftwareDownload,
  CgSoftwareUpload,
  CgWebsite,
} from "react-icons/cg";
import {
  BsApp,
  BsApple,
  BsGithub,
  BsGooglePlay,
  BsLink,
  BsLink45Deg,
  BsMenuApp,
  BsProjector,
} from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="purple">
        <strong className="purple">{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {!!props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ }}
          >
            {props.store == "Google" ? <BsGooglePlay /> : <BsApple />}&nbsp;
            {"See"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
