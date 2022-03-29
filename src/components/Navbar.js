import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
// import DarkMode from "../DarkMode"
// import useLocalStorage from 'use-local-storage'


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" rel="noopener noreferrer">
          <strong>EmilyPMendez.com</strong><br/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
                { /* // <center>
                //   <div className="dark-mode" data-theme={theme}>
                //     <button onClick={switchTheme}>
                //       Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                //     </button>
                //   </div>
                // </center> */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <FaProjectDiagram style={{ marginBottom: "2px" }} /> View
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <RiFilePaper2Line style={{ marginBottom: "2px" }} /> View Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/books"
                href="/books"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <IoBookSharp style={{ marginBottom: "2px" }} /> Book
                Recommendations
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
