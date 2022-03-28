import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { ORGANIC_PROJECTS } from "../../Constants";
import { BLOCKCHAIN_PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-header">
          <strong className="purple">Recent Work</strong>
        </h1>
        <p style={{ color: "grey" }} className="blockquote">
          These projects are focused on expanding my skill sets. <br />
          Please note, some platforms are proprietary.
        </p><br/><br/>

      <h3 className="project-heading"><strong>Web3 & Blockchain Projects</strong></h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {BLOCKCHAIN_PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>

          <br/><br/>

          <h3 className="project-heading"><strong>Proprietary, Non-Profit, & Fun Projects</strong></h3>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ORGANIC_PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
