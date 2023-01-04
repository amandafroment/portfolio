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
                    connect with others through events. Users can sign in,
                    create their own event, or attend events near them. Users
                    that want to know more about an event can comment on the
                    event details page to connect with the host or other
                    attendees.
                  </p>
                  <p>
                    #Features: JWT for authentication, CRUD operations, mobile
                    responsive design.
                  </p>
                  <p>#Technologies: React.js, Express.js, Node.js, MongoDB</p>
                  <p>
                    <a>Explore kinnectMe</a> || <a>View the code</a>{" "}
                  </p>
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
                    An online directory used for discovering local cafe scenes
                    specifically catered to students or those who work from home
                    and are looking for great workspaces (and caffeine!) in
                    their area. A user can sign up and review cafes they have
                    been to according to the working conditions. They can also
                    favourite cafes and see other user's reviews.
                  </p>
                  <p>
                    #Features: Yelp Fusion API, CRUD operations, mobile
                    responsive design.
                  </p>
                  <p>#Technologies: HTML, CSS, JS, Django, PostgreSQL</p>
                  <p>
                    <a>Explore BeanThere</a> || <a>View the code</a>{" "}
                  </p>
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
                    A health-focused app that allows users to plan and make
                    changes to their workouts. Each user has their own account
                    by logging in through Google - once they have logged in,
                    they are able to create workouts, as well as add exercises
                    to those specific workouts. Users are able to edit or delete
                    the exercises they add to their workouts, as well as delete
                    entire workouts altogether.
                  </p>
                  <p>
                    #Features: Google Oauth, CRUD operations, mobile responsive
                    design.
                  </p>
                  <p>#Technologies: CSS, Node.js, Express.js, MongoDB</p>
                  <p>
                    <a>Explore YOUMOVE</a> || <a>View the code</a>{" "}
                  </p>
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
