import "./App.css";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
// import img from "../../images/fullsize-profile.jpg";
import profileimg from "../../images/about-me-pic.jpeg";
import project1 from "../../images/kinnectMe-Screenshot.png";
import project2 from "../../images/beanThere-screenshot.jpeg";
import project3 from "../../images/YOUMOVE-screenshot.png";

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
            <div className="about-me-picture">
              <img
                src={profileimg}
                className="profile-pic"
                alt="profile picture"
              ></img>
            </div>
            <div className="about-me-description">
              <p>
                In April 2022, I decided to make a career switch to something
                completely out of my comfort zone:{" "}
                <span id="dark-green-text">software engineering</span>. Coming
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
            {/* <div className="technologies-container">
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
                    href="https://docs.google.com/document/d/1FFaP4AEnJZJRAhQFZkcRp98DiBTKDQKup-kJj9Hg_TE/edit?usp=sharing"
                    className="resume-link"
                    target="_blank"
                  >
                    resume
                  </a>
                  .
                </p>
              </div>
            </div> */}
          </div>
          <div className="projects-container">
            <h2>Previous Projects</h2>
            <div className="individual-project-container project-1">
              <div className="project-image-container">
                <img src={project1} className="project-image"></img>
              </div>
              <div className="project-side-container">
                <div className="project-description">
                  <h3>kinnectMe</h3>
                  <p>
                    An online directory of user created events, where users can
                    connect with others through shared events. Once a user signs
                    up and logs in to the app, they will be able to attend
                    events that are created by other users in their area, or
                    they can create their own events for other users to attend.
                    Those who want to know more about an event can comment on
                    the event details page to connect with the creator of the
                    event, as well as others who are planning on attending
                  </p>
                </div>
                <div className="project-technologies">
                  {" "}
                  <h4>Technologies Used</h4>
                </div>
              </div>
            </div>
            <div className="individual-project-container project-2">
              <div className="project-image-container">
                <img src={project2} className="project-image"></img>
              </div>
              <div className="project-side-container">
                <div className="project-description">
                  {" "}
                  <h3>BeanThere</h3>
                  <p>
                    An online directory used for discovering your local cafe
                    scene! It is specifically catered to students or those who
                    work from home and are looking for great workspaces (and
                    caffeine!) in their area. Once you have signed up and logged
                    in, you will be able to find cafes in your area by using the
                    search bar thanks to the YELP Fusion API. After clicking on
                    the cafe of your choice, you will have access to more cafe
                    details as well as reviews left by other students and
                    WFH'ers. You can even create a review of your own to help
                    others decide if that workspace fits their needs. Is there
                    reliable wifi and lots of outlets? Can you bring your fury
                    friend or sit out on the patio? Do they cater to any dietary
                    restrictions? Let your friends on Bean There know!
                  </p>
                </div>
                <div className="project-technologies">
                  {" "}
                  <h4>Technologies Used</h4>
                </div>
              </div>
            </div>
            <div className="individual-project-container project-3">
              <div className="project-image-container">
                <img src={project3} className="project-image"></img>
              </div>
              <div className="project-side-container">
                <div className="project-description">
                  {" "}
                  <h3>YOUMOVE</h3>
                  <p>
                    A workout planner app that allows users to plan out and make
                    changes to their workouts. Each user has their own account
                    by logging in through Google - once they have logged in,
                    they are able to create workouts, as well as add exercises
                    to those specific workouts. Users are able to edit or delete
                    the exercises they add to their workouts, as well as delete
                    entire workouts altogether. This application is mobile
                    responsive.
                  </p>
                </div>
                <div className="project-technologies">
                  <h4>Technologies Used</h4>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
