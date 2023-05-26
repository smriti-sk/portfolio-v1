import React, {useRef, useEffect} from "react";
import "./Nav.css";

const Nav = () => {
  // const wrapper = document.querySelector('.site-wrapper');
  // const burger = document.querySelector('nav .burger');
  const siteWrapper = useRef(null);
  const burger = useRef(null);

  if (burger.current){
    burger.current.addEventListener('click', () => {
      siteWrapper.current.classNameList.remove('no-animation');
      document.body.classNameList.toggle('mobile-open');
    });
  }

  return (
    <>
      <div ref={siteWrapper} className="siteWrapper no-animation">
        <div className="mobile-nav">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">My Projects</a>
            <a href="#">Contact me</a>
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
                <a href="#">Home</a>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link blue">
                <a href="#">About me</a>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link indigo">
                <a href="#">My Projects</a>
                <div className="underline">
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
              <div className="link pink">
                <a href="#">Contact me</a>
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
