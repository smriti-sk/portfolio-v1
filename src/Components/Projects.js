import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section id="Projects">
        <h2>My Projects</h2>
        <main class="page-content">
          <div class="card">
            <div class="content">
              <h2 class="project-title">Expense&nbsp;Tracker</h2>
              <p class="copy">
                Monitor your spending, view transaction history, and maintain a
                healthy financial balance
              </p>
              <a
                className="project-link"
                href="https://smriti-sk.github.io/Expense-Tracker-App/"
              >
                <button class="btn">View Project</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="project-title">Portfolio&nbsp;Website</h2>
              <p class="copy">
                Build my own portfolio website from scratch including all the
                relevant content using React.js, Bootstrap.
              </p>
              <a
                className="project-link"
                href="https://github.com/smriti-sk/smritikumari"
              >
                <button class="btn">View Project</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="project-title">Video Conferencing App</h2>
              <p class="copy">Video Chat App with React.js and WebRTC</p>
              <a
                className="project-link"
                href="https://github.com/smriti-sk/video-conferencing-app"
              >
                <button class="btn">View Project</button>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="project-title">Tic&nbsp;Tac&nbsp;Toe</h2>
              <p class="copy">
                The classic Tic-Tac-Toe game for free offline with two players
                using Python and tkinter library.
              </p>
              <a
                className="project-link"
                href="https://github.com/smriti-sk/TicTacToe-python"
              >
                <button class="btn">View Project</button>
              </a>
            </div>
          </div>

          <div class="card">
            <div class="content">
              <h2 class="project-title">Youtube Clone - Frontend</h2>
              <p class="copy">
                YouTube clone website using HTML, CSS, JavaScript.
              </p>
              <a
                className="project-link"
                href="https://github.com/smriti-sk/Youtube-Clone-frontend"
              >
                <button class="btn">View Project</button>
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Projects;
