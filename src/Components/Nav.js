import React, {useState, useRef, useEffect} from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
// import Contact from "./Contact";
// import Home from "./Home";
// import About from "./About";
// import Projects from "./Projects";

const Nav = () => {
  const wrapper = document.querySelector('.site-wrapper');
  const burger = document.querySelector('nav .burger');

    // if(burger.current){
    //   burger.current.addEventListener('click', () => {
    //     wrapper.current.classList.remove('no-animation');
    //     wrapper.current.classNameList.remove('no-animation');
    //     document.body.classNameList.toggle('mobile-open');
    //   });
    // }
 
  return (
    <>
      <div ref={wrapper} className="siteWrapper no-animation">
        <div className="mobile-nav">
          <div className="links">
            <ul>
              <li><Link to="/Home">Home</Link></li>
               <li><Link to="/About">About me</Link></li>
              <li><Link to="/Projects">My Projects</Link></li> 
              <li><Link to="/Contact">Contact</Link></li>
          </ul>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="logo">
              <span>S</span><span>m</span><span>r</span><span>i</span><span>t</span><span>i</span>
              <span>&nbsp;K</span><span>u</span><span>m</span><span>a</span><span>r</span><span>i</span>
            </div>
            <div className="links">
              <div className="link teal">
                <Link to="/">Home</Link>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link blue">
              <Link to="/About">About me</Link>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link indigo">
              <Link to="/Projects">My Projects</Link>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link pink">
              <Link to="/Contact">Contact</Link>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
            </div>
            <div ref={burger} className="burger">
              <div className="close">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;