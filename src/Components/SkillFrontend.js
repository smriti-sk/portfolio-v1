import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <>
      <div class="skills">
        <h3>Front-end development</h3>
        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line">
              <span class="html"></span>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line">
                <span class="css"></span>
              </div>
              <div class="bar">
                <div class="info">
                  <span>JavaScript</span>
                </div>
                <div class="progress-line">
                  <span class="javascript"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>React.js</span>
                  </div>
                  <div class="progress-line">
                    <span class="react"></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>BOOTSTRAP</span>
                  </div>
                  <div class="progress-line">
                    <span class="bootstrap"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>C/C++</span>
                    </div>
                    <div class="progress-line">
                      <span class="cpp"></span>
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>PYTHON</span>
                    </div>
                    <div class="progress-line">
                      <span class="python"></span>
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>Git / GitHub</span>
                    </div>
                    <div class="progress-line">
                      <span class="git"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
