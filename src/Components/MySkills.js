import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <>
      <div class="skills">
        <h3>Programming Languages</h3>
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
                  <span>BOOTSTRAP</span>
                </div>
                <div class="progress-line">
                  <span class="bootstrap"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div class="progress-line">
                    <span class="javascript"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>C PROGRAMMING</span>
                    </div>
                    <div class="progress-line">
                      <span class="c"></span>
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
