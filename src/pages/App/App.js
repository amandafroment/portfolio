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
          <button
            className="learn-more"
            onClick={() => setLearnMore("clicked")}
          >
            Learn More
          </button>
        </div>

        {/* <Footer /> */}
      </main>
    </>
  );
}
