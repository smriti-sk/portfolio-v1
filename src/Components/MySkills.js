import React from "react";
import "./MySkills.css";
import SkillFrontend from "./SkillFrontend";
import SkillBackend from "./SkillBackend";

const MySkills = () => {
  return (
    <>
      <section id="myskills">
        <h2>My Skills</h2>
        <div className="skill-container">
          <div class="skill-1">
            <SkillFrontend />
          </div>
          <div class="skill-2">
            <SkillBackend />
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
