import React from "react";
import "./Header.css";
import profilePhoto from "../Images/smriti.png";

const Header = () => {
  return (
    <>
      <section className="main-content">
        <div className="container">
          <div className="grid-container">
            <div className="item1">
              <h2>Smriti&nbsp;Kumari</h2>
            </div>
            <div className="item2">
              <img src={profilePhoto} alt="profile photo" id="profilePhoto" />
            </div>

            <div className="item3">A bit about me</div>

            <div className="item4">
              Full Stack Developer with a passion for building innovative and
              user-friendly web applications. Skilled in a variety of front-end
              and back- end technologies, including HTML, CSS, JavaScript,
              React.js, Bootstrap, Node.js, API development, SQL, and Database
              management.
            </div>
            <div className="item5">blank</div>
            <div className="item6">
              <div className="cta-container">
                <div className="cta cta-1">Resume</div>
                <div className="cta cta-2">About me</div>
                <div className="cta cta-3">My Skills</div>
                <div className="cta cta-4">My Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
