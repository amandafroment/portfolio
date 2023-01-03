import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <p>
          <span>
            <a
              href="https://github.com/amandafroment"
              target="_blank"
              className="github-link"
            >
              Github
            </a>
          </span>{" "}
          |{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/amanda-froment/"
              target="_blank"
              className="indeed-link"
            >
              Indeed
            </a>
          </span>
        </p>
        <span>@2022 - Amanda Froment. Created with React.</span>
      </div>
    </>
  );
}
