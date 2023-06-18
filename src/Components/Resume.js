import React from "react";
import "./Resume.css";
import Iframe from 'react-iframe'

const Resume = () => {
  return (
    <div id="resume">
      <Iframe id="MyResume" src="./SmritiKumariFullStack.pdf"></Iframe>
      {/* <iframe id="MyResume" src="./SmritiKumariFullStack.pdf"></iframe> */}
    </div>
  );
};

export default Resume;
