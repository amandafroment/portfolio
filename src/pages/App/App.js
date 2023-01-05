import "./App.css";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
// import img from "../../images/fullsize-profile.jpg";
import profileimg from "../../images/about-me-pic.jpeg";
import project1 from "../../images/kinnectMe-Screenshot.png";
import project2 from "../../images/beanThere-screenshot.jpeg";
import project3 from "../../images/YOUMOVE-screenshot.png";
import awsimg from "../../images/AWS.png";
import cssimg from "../../images/CSS.png";
import djangoimg from "../../images/Django.png";
import expressimg from "../../images/Expressjs.png";
import gitimg from "../../images/Git.png";
import herokuimg from "../../images/Heroku.png";
import htmlimg from "../../images/HTML.png";
import jsimg from "../../images/JS.png";
import materialimg from "../../images/Material.png";
import mongodbimg from "../../images/MongoDB.png";
import mongooseimg from "../../images/Mongoose.png";
import nodeimg from "../../images/Node.png";
import postgresqlimg from "../../images/Postgres.png";
import pythonimg from "../../images/python2.png";
import reactimg from "../../images/React.png";
import sqlimg from "../../images/SQL.png";

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
                <span id="dark-green-text">
                  &lt; software engineering /&gt;
                </span>
                . Coming from a mental health education background and already
                running my own personal training business, this step into a new
                space was a bit daunting, yet it felt like the perfect fit.
              </p>
              <p>
                Software engineering fills that creative itch I have, while also
                giving me the opportunity to work on collaborative & diverse
                teams. Creating web applications allows me to still help the
                communities around me by providing engaging & useful online
                spaces.
              </p>
            </div>
          </div>
          <div className="projects-container">
            <div className="technologies-container">
              <h2>Languages && Technologies</h2>
              <div className="technology-section">
                <div className="technology-img-container">
                  <figure>
                    <img src={htmlimg} className="image"></img>
                    <figcaption>HTML</figcaption>
                  </figure>
                  <figure>
                    <img src={cssimg} className="image"></img>
                    <figcaption>CSS</figcaption>
                  </figure>
                  <figure>
                    <img src={jsimg} className="image"></img>
                    <figcaption>Javascript</figcaption>
                  </figure>
                  <figure>
                    <img src={reactimg} className="image"></img>
                    <figcaption>React</figcaption>
                  </figure>
                  <figure>
                    <img src={nodeimg} className="image"></img>
                    <figcaption>Node.js</figcaption>
                  </figure>
                  <figure>
                    <img src={expressimg} className="image"></img>
                    <figcaption>Express.js</figcaption>
                  </figure>
                  <figure>
                    <img src={mongodbimg} className="image"></img>
                    <figcaption>MongoDB</figcaption>
                  </figure>
                  <figure>
                    <img src={mongooseimg} className="image"></img>
                    <figcaption>Mongoose</figcaption>
                  </figure>
                </div>
                <div className="technology-img-container">
                  <figure>
                    <img src={pythonimg} className="image"></img>
                    <figcaption>Python</figcaption>
                  </figure>
                  <figure>
                    <img src={djangoimg} className="image"></img>
                    <figcaption>Django</figcaption>
                  </figure>
                  <figure>
                    <img src={materialimg} className="image"></img>
                    <figcaption>Material UI</figcaption>
                  </figure>
                  <figure>
                    <img src={sqlimg} className="image"></img>
                    <figcaption>SQL</figcaption>
                  </figure>
                  <figure>
                    <img src={postgresqlimg} className="image"></img>
                    <figcaption>PostgreSQL</figcaption>
                  </figure>
                  <figure>
                    <img src={awsimg} className="image"></img>
                    <figcaption>AWS - Amazon Web Services</figcaption>
                  </figure>
                  <figure>
                    <img src={herokuimg} className="image"></img>
                    <figcaption>Heroku</figcaption>
                  </figure>
                  <figure>
                    <img src={gitimg} className="image"></img>
                    <figcaption>Git</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <h2>Previous Projects</h2>
            <div className="individual-project-container project-1">
              <div className="project-image-container">
                <img src={project1} className="project-image"></img>
              </div>
              <div className="project-side-container">
                <div className="project-description">
                  <h3>kinnectMe</h3>
                  <p>
                    A place of connection through kinship: sign in to start
                    creating your own event, or attend other's events based on
                    shared interests! If you have any questions about an event,
                    click into the event to find out more details, as well as
                    ask questions to the host or other people attending.
                  </p>
                  <p>
                    #Features: JWT for authentication, CRUD operations, mobile
                    responsive design.
                  </p>
                  <p>
                    #Technologies: React.js, Express.js, Node.js, MongoDB,
                    Axios.
                  </p>
                </div>
                <div className="project-links-container">
                  <p className="project-links">
                    <a href="https://kinnectme.herokuapp.com/" target="_blank">
                      Explore kinnectMe
                    </a>{" "}
                    ||{" "}
                    <a
                      href="https://github.com/amandafroment/kinnectMe"
                      target="_blank"
                    >
                      Github
                    </a>{" "}
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
                    Do you work from home, but feel like getting out of the
                    house and working from a cafe? BeanThere can help you
                    discover local cafe scenes specifically catered to students
                    or those who work from home and are looking for great
                    workspaces (and caffeine!) in their area. You can read other
                    people's reviews on the cafe, or write your own!
                  </p>
                  <p>
                    #Features: Yelp Fusion API, CRUD operations, mobile
                    responsive design.
                  </p>
                  <p>#Technologies: HTML, CSS, JS, Django, PostgreSQL.</p>
                </div>
                <div className="project-links-container">
                  <p className="project-links">
                    <a
                      href="https://beanthereapp.herokuapp.com/"
                      target="_blank"
                    >
                      Explore BeanThere
                    </a>{" "}
                    ||{" "}
                    <a
                      href="https://github.com/amandafroment/BeanThere"
                      target="_blank"
                    >
                      Github
                    </a>{" "}
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
                    Need some help keeping track of your workouts? YOUMOVE is a
                    health-focused app that allows you to plan and make changes
                    to your workouts. Once you have logged in through Google,
                    you can create workouts and add exercises to those specific
                    workouts. You can also edit or delete the exercises or
                    delete entire workouts altogether. Let's start planning!
                  </p>
                  <p>
                    #Features: Google Oauth, CRUD operations, mobile responsive
                    design.
                  </p>
                  <p>#Technologies: CSS, Node.js, Express.js, MongoDB.</p>
                </div>
                <div className="project-links-container">
                  <p className="project-links">
                    <a href="https://youmoveapp.herokuapp.com/" target="_blank">
                      Explore YOUMOVE
                    </a>{" "}
                    ||{" "}
                    <a
                      href="https://github.com/amandafroment/YouMove"
                      target="_blank"
                    >
                      Github
                    </a>{" "}
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
