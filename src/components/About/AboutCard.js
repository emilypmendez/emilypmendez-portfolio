import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="blue">Emily Portalatin-Mendez </span>
            from <span className="blue"> New York, USA.</span> I am a software
            developer who loves to transform ideas into reality using code. I am
            a motivated designer and developer with experience creating custom
            websites with ReactJs, JavaScript, HTML5, CSS3.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">🎶 Playing Music</li>
            <li className="about-activity">📚 Reading & Writing</li>
            <li className="about-activity">🎥 Watching Movies</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
