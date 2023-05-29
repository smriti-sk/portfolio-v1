import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <>
      <div class="skills">
        <h3>Back-end development</h3>
        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>Node.js</span>
            </div>
            <div class="progress-line">
              <span class="nodejs"></span>
            </div>
            <div class="bar">
              <div class="info">
                <span>SQL</span>
              </div>
              <div class="progress-line">
                <span class="sql"></span>
              </div>
              <div class="bar">
                <div class="info">
                  <span>MySQL</span>
                </div>
                <div class="progress-line">
                  <span class="mysql"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>MongoDB</span>
                  </div>
                  <div class="progress-line">
                    <span class="mongodb"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>PHP</span>
                    </div>
                    <div class="progress-line">
                      <span class="php"></span>
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>REST API</span>
                    </div>
                    <div class="progress-line">
                      <span class="rest-api"></span>
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>Data Structures and Algorithms (DSA)</span>
                    </div>
                    <div class="progress-line">
                      <span class="dsa"></span>
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>Cloud Computing</span>
                    </div>
                    <div class="progress-line">
                      <span class="cloud"></span>
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
