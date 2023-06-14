import React from "react";
import "./About.css";
import Socials from "./Socials";
import aboutImg from "../Images/smriti.png";
import MySkills from "./MySkills";
import SkillFrontend from "./SkillFrontend";
import SkillBackend from "./SkillBackend";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  //   const element = <FontAwesomeIcon icon={faEnvelope} />

  // ReactDOM.render(element, document.body)
  return (
    <>
      <section id="about">
        <div class="about-grid-container">
          <div class="about-item1">
            <h2>About&nbsp;me</h2>
          </div>
          <div class="about-item2">
            <div className="aboutPhoto"></div>
            <div class="title">
              <h3>Web Developer</h3>
              {/* Socials Component */}
              <Socials />
            </div>
          </div>
          <div class="about-item4">
            <p>
              I am a third-year student at CCET, pursuing a Bachelor's degree in
              Computer Science and Engineering. I'm passionate about web
              development and have a strong foundation in programming languages,
              data structures, and algorithms. My main focus lies in leveraging
              my technical skills and enthusiasm to contribute to web
              development projects. <br />
              <br />
              Throughout my academic journey, I've worked on numerous projects
              that have honed my skills in Full Stack Development. I love taking
              on challenges and solving problems through critical thinking.
              Being an active learner, I'm constantly seeking opportunities to
              expand my knowledge and stay up-to-date with the latest
              technologies. <br />
              <br />
              In my spare time, I enjoy building personal projects and learning
              new things. I'm also a big fan of music and movies.
            </p>
          </div>
          <div class="about-item5">
            {/* blank */}
            </div>
          <div class="about-item6">
            
          </div>
        </div>

        {/* EXPERIENCE */}
        <div class="resume" id="resume">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3 class="text-center">WORK EXPERIENCE</h3>
                <ul class="timeline">
                  <li>
                    <h4>
                      Facebook PR Head<span> - 2023</span>
                    </h4>
                    <p>
                      Prepared over 100 social media posts and implemented
                      social media strategies to increase engagement and reach
                      new audiences. <br />
                      Built and maintained relationships with relevant media
                      outlets and HRs.
                      <br />
                      <b>Company</b> - Training and Placement Cell, CCET
                      <br />
                      <b>Duration</b> - 5 mos [01/2023 - Present]
                      <br />
                      {/* <b>Location</b> - Colima, México
                      <br /> */}
                    </p>
                  </li>
                  <li>
                    <h4>
                      Treasurer<span> - 2018</span>
                    </h4>
                    <p>
                      Plan and manage annual budgets, track expenses, and
                      investigate discrepancies to maintain optimal controls.{" "}
                      <br />
                      Prepared and presented financial reports to inform senior
                      management and board of directors.
                      <br />
                      <b>Company</b> - CCET ACM-W Student Chapter
                      <br />
                      <b>Duration</b> - 10 mos [08/2022 - Present,]
                      <br />
                      {/* <b>Location</b> - Colima, México
                      <br /> */}
                    </p>
                  </li>
                  <li>
                    <h4>
                      Web Developer<span> - 2021</span>
                    </h4>
                    <p>
                      Built using HTML, CSS, and JavaScript to develop the CCET
                      ACM website for both mobile and desktop platforms. <br />
                      Assembled and addressed technical and design requirements,
                      integrating user-facing and front-end elements to maintain
                      web presence effectiveness.
                      <br />
                      <b>Company</b> - CCET Website Team
                      <br />
                      <b>Duration</b> - 1 yr 9 mos [Sep 2021 - Present]
                      <br />
                      {/* <b>Location</b> - Colima, México
                      <br /> */}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <h3 class="text-center">EDUCATION</h3>
                <ul class="timeline">
                  <li>
                    <h4>
                      Bachelor of Engineering in Computer Science{" "}
                      <span> - Present</span>
                    </h4>
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incidunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquid ex ea commodi consequat. */}
                      <br />
                      <b>Institute</b> - Chandigarh College of Engineering and
                      Technology (Degree Wing)
                      <br />
                      <b>Session</b> - 2020 - 2024
                      <br />
                      {/* <b>Grades</b> - 8.43/10
                      <br /> */}
                      <b>CGPA</b> - 8.43
                      <br />
                    </p>
                  </li>
                  <li>
                    <h4>
                      12th CBSE - Non-Medical<span> - 2020</span>
                    </h4>
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incidunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquid ex ea commodi consequat. */}
                      <br />
                      <b>Institute</b> - Government Model Senior Secondary
                      School Sector 32-C, Chandigarh
                      <br />
                      <b>Session</b> - 2020
                      <br />
                      <b>Grades</b> - 84.6
                      <br />
                    </p>
                  </li>
                  <li>
                    <h4>
                      10th CBSE<span> - 2018</span>
                    </h4>
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incidunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquid ex ea commodi consequat. */}
                      <br />
                      <b>Institute</b> - Kendriya Vidyalaya, Sector 31
                      Chandigarh
                      <br />
                      <b>Session</b> - 2018
                      <br />
                      <b>Grades</b> - 92.6
                      <br />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
