import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Experience from "../Resume/Experience";
// import Particle from "../Particle";
import pdf from "../../assets/EPM-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <span style={{ paddingTop: 25 }}>
          <center>
            <h1 className="project-header">Experience & Education</h1>
            <center><p className="blockquote">Scroll to download the full resume below (2 pages)</p></center><br/>
          </center>
        </span>
          <Experience/>
        <br />
        <br />
        <span>
          <center>
            <div class="separator">
              <div class="line"></div>
              <h1>Download the full resume (2 pages)</h1>
              <div class="line"></div>
            </div>
            <p className="blockquote">Please take care of this downloadable asset.</p>
          </center>
        </span>
        <Row className="resume">
          <center>
            <Col md={4}>
              <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.6} />
              </Document>
              <Document file={pdf}>
              <Page pageNumber={2} scale={width > 786 ? 1.3 : 0.6} />
            </Document>
            </Col>
          </center>

        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-button"
            rel="noopener noreferrer"
          >
            <AiOutlineDownload />
            &nbsp;&nbsp;Download CV
          </Button>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default ResumeNew;
