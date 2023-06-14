import React, { useState, useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Main.css";
import "./NewNav.css";
import logo from "../Images/SKlblacknobg.png";

const NewNav = () => {
    
    const [btnState, setBtnState] = useState(false);
    const links = document.querySelector('.nav-links li');

    function handleClick() {
      setBtnState((btnState) => !btnState);
    }

    let toggleNavClass = btnState? ' open': '';
    let toggleLinkClass = btnState? ' fade': '';
    let toggleHamburgerClass = btnState? ' toggle': '';

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo Image" />
        </div>
        <div className={`hamburger${toggleHamburgerClass}`} onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links${toggleNavClass}`}> 
          <li ref={links} className={`${toggleLinkClass}`}>
            <NavLink className="nav-link" to="">Home</NavLink>
          </li>
          <li ref={links} className={`${toggleLinkClass}`}>
          <NavLink className="nav-link" to="/about">About me</NavLink>
          </li>
          <li ref={links} className={`${toggleLinkClass}`}>
          <NavLink className="nav-link" to="/projects">Skills</NavLink>
          </li>
          <li ref={links} className={`${toggleLinkClass}`}>
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </li>
          <li ref={links} className={`${toggleLinkClass}`}>
          <NavLink className="nav-link" to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewNav;
