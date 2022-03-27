import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Experience from "../Resume/Experience";
// import Particle from "../Particle";
import pdf from "../../assets/EPM_Resume.pdf";
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
        <center>Download the full resume below (2 pages)</center>
        <br />
        <br />

        <span>
          <center>
            <h1>Experience & Education</h1>
          </center>
        </span>
        <Experience />
        <br />
        <br />
        <br />
        <span>
          <center>
            <h1>Download the full resume below (2 pages)</h1>
          </center>
        </span>
        <Row className="resume">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
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
