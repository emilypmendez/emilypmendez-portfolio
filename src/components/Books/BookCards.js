import React from "react";
import Card from "react-bootstrap/Card";

function BookCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text className="purple">
          <em>{props.technologyUsed}</em>
        </Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default BookCards;
