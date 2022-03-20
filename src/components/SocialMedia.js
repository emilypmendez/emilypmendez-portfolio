import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/emilypmendez"
          target="_blank"
          rel="noreferrer"
          className="icon-color  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/emilypmendez/"
          target="_blank"
          rel="noreferrer"
          className="icon-color  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.twitter.com/emilypmendez/"
          target="_blank"
          rel="noreferrer"
          className="icon-color home-social-icons"
        >
          <FaTwitter className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:emilypmendez@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-color home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
