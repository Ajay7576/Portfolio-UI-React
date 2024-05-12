import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/ajay-mandyal-908596265/"
        className="home__social-icon"
        target="_blank"
        title="Visit my LinkedIn profile"

      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://www.instagram.com/ig_mandyal/"
        className="home__social-icon"
        target="_blank"
        title="Visit my Instagram profile"

      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://missing-someone.onrender.com"
        className="home__social-icon"
        target="_blank"
        title="Visit my Personal website"

      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/Ajay7576"
        className="home__social-icon"
        target="_blank"
        title="Visit my Github profile"

      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
