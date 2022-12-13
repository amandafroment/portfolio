import "./App.css";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

export default function App() {
  const [learnMore, setLearnMore] = useState("");

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
            <h2>About Me</h2>
            <div className="about-me-content">
              <div className="about-me-picture"></div>
              <div className="about-me-description"></div>
            </div>
          </div>
          <div className="projects-container">project div</div>
          <Footer />
        </div>
      </main>
    </>
  );
}
