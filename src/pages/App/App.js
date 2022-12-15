import "./App.css";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
// import img from "../../images/fullsize-profile.jpg";
import img from "../../images/about-me-pic.jpeg";

export default function App() {
  return (
    <>
      <main className="App">
        <div className="header-container">
          <h1>
            Hello World, my name is <span className="header-name">Amanda.</span>{" "}
            I am a software developer with a passion for creating eye catching &
            functional web applications for our communities.
          </h1>
          <button className="learn-more">
            <a href="#about-me">Learn More </a>
          </button>
        </div>
        <div className="sections-container">
          <div id="about-me" className="about-me-container">
            <div className="about-me-description">
              <p>
                In April 2022, I decided to make a career switch to something
                completely out of my comfort zone: software engineering. Coming
                from a mental health education background and already running my
                own personal training business, this step into a new space was a
                bit daunting, yet it felt like the perfect fit.
              </p>
              <p>
                Software engineering fills that creative itch I have, while also
                giving me the opportunity to work on collaborative & diverse
                teams. Creating web applications allows me to still help the
                communities around me by providing engaging & useful online
                spaces.
              </p>
            </div>
            <div className="about-me-picture">
              <img
                src={img}
                className="profile-pic"
                alt="profile picture"
              ></img>
            </div>
            <div className="technologies-container">
              <div className="technologies-description">
                <p>The technologies I use include: </p>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>Javascript</li>
                  <li>Node.JS & Express.JS</li>
                  <li>MongoDB & Mongoose</li>
                  <li>Python & Django</li>
                  <li>PostgreSQL & MySQL</li>
                  <li>React</li>
                  <li>MERN Stack Applications</li>
                </ul>
                <p>
                  To learn more about me, view my
                  <a
                    href="/Users/amanda/Downloads/Resume%20(14).pdf"
                    className="resume-link"
                  >
                    resume
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="projects-container">project div</div>
          <Footer />
        </div>
      </main>
    </>
  );
}
