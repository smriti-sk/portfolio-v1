import React from "react";
import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <>
      <ul className="social-links">
        <li className="link">
          <a
            className=" contact-img"
            href="https://www.linkedin.com/in/smritikumari20/"
            alt="linkedin"
          >
            <FontAwesomeIcon
              className="fonticon"
              icon={faLinkedin}
              size="xl"
              style={{ color: "#005eff" }}
            />
          </a>
        </li>
        <li className="link">
          <a className=" contact-img" href="https://github.com/smriti-sk" alt="github">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#000000" }}
            />
          </a>
        </li>
        <li className="link">
          <a
            className=" contact-img"
            href="https://twitter.com/_smritikumari"
            alt="twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              style={{ color: "#009dff" }}
            />
          </a>
        </li>
        <li className="link">
          <a
            className=" contact-img"
            href="mailto:smriti20v30@gmail.com"
            alt="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
