import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // const [state, handleSubmit] = useForm("xpzeevnd");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  return (
    <>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 id="contact-h2" >CONTACT</h2>

            <div className="links">
              <ul id="social-links">
                <li className="link">
                  <a
                    className=" contact-img"
                    href="https://www.linkedin.com/in/smritikumari20/"
                    alt="linkedin"
                  >
                    <FontAwesomeIcon
                      className="fonticon"
                      icon={faLinkedin}
                      size="2xl"
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </li>
                <li className="link">
                  <a className=" contact-img" href="https://github.com/smriti-sk" alt="github">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      style={{ color: "#ffffff" }}
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
                      size="2xl"
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </li>
                <li className="link">
                  <a
                    className=" contact-img"
                    href="mailto:smriti20v30@gmail.com"
                    alt="email"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2xl"
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form action="https://formspree.io/f/xpzeevnd" method="POST">
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Email id:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button className="submit-btn" type="submit" >Send</button>
              {/* <button type="submit" disabled={state.submitting}>
        Submit
      </button> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
