import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCards from "./BookCards";
import { BOOKS } from "../../Constants";

function Books() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-header">
          <strong className="purple">Book Recommendations</strong>
        </h1>
        <p style={{ color: "grey" }} className="blockquote">
          These books are considered heavy reading. <br />I hope you enjoy this
          selection!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {BOOKS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <BookCards
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

export default Books;
