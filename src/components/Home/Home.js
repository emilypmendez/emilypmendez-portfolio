import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../../assets/emilypmendez.jpg";
// import ContactForm from "./ContactForm";
import Form2 from "./Form2";
import TypeWriter from "./TypeWriter";
import Marquee from "react-fast-marquee";
import MarqueeComponent from "./MarqueeComponent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5}>
              <img src={myImage} className="profile-pic" alt="avatar" />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 3 }} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <span> You've reached</span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Emily Portalatin-Méndez</strong>
              </h1>

              <p className="heading-description blockquote">
                <em>
                  She's quietly confident, naturally curious, and consistently
                  working on improving her coding skills.{" "}
                </em>
                <br />
                {/* My journey as a software developer started nearly 10 years ago,
                I've done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                business, consumer, and general use. */}
              </p>

              <div className="heading-type">
                <TypeWriter className="typeWriter" />
              </div>
              <br />
              <p className="heading-additional-text blockquote">
                I am always looking to contribute to projects with significant
                social impact. I am passionate about using Javascript and
                Animation Libraries to create awesome user experiences. You can
                typically find me reading, listening to music, or exploring the
                internet! <br /> <br /> Leave a message below if you are
                interested in exploring opportunities to work together.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

        <Container>
          <Row>
            <Col md={12} className="home-about-social blockquote">
              <h1>About Her</h1>
              <br />
              <p>
                Award-winning developer with more than 8 years of well-rounded
                experience in business communications, software development,
                object-oriented and user-centered design. Seeking a remote
                position with a top technology firm.
              </p>
              <br />
              <Marquee
                loop={10}
                speed={85}
                delay={2.5}
                pauseOnHover={true}
                pauseOnClick={true}
              >
                <MarqueeComponent />
              </Marquee>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className="home-about-social blockquote">
              <h1 className="project-heading">Let's Get Connected</h1>
              <p>
                {" "}
                Want to get in touch or talk about a project collaboration?
                <br />
                <strong>Looking forward to hearing from you!</strong>
              </p>
              <br />
              <Form2 />
            </Col>
          </Row>
        </Container>

    </section>
  );
}

export default Home;
