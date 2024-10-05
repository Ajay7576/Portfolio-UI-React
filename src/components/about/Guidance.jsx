import React from "react";
import "./about.css";
import AboutImg from "../../assets/jayoti.jpeg";

const Guidance = () => {
  return (
    <section className="about section" id="guidance">
      <h2 className="section__title">Guidance</h2>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Profile" className="about__img" />

        <div className="about__data">

          <p className="about__description">
          <h2 className="section__title">Jayoti Jasrotia</h2>

            I completed a Full Stack course at CS Infotech in 2022, with Jayoti
            as a constant source of guidance throughout my journey. She
            encouraged me to focus on software development rather than testing,
            offering step-by-step support to help me grow as a developer. She is
            incredibly smart and intelligent, and I often refer to her as my
            "Google" because she knows everything about the private sector and
            how to work effectively with a team. Along with her technical
            advice, she always reminds me not to stress too much and to focus on
            my own growth, emphasizing the importance of working independently
            and not relying on others for answers.
            ...................................................................
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
