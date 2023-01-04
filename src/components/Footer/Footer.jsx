import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <p className="contact-info">
          <span>
            <a
              href="https://github.com/amandafroment"
              target="_blank"
              className="github-link"
            >
              Github
            </a>
          </span>{" "}
          ||{" "}
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
        <span>
          <p className="contact-info">afroment.dev@gmail.com || 905-932-0054</p>
        </span>
        <span className="contact-info">
          @2022 - Amanda Froment. Created with React.
        </span>
      </div>
    </>
  );
}
