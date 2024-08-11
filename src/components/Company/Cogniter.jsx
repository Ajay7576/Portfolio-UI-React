import React from "react";
import "./cogniters.css";
import { Data } from "./Review.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Cogniter = () => {
  return (
    <section className="cogniter container section">
      <h2 className="section__title">Cogniter Technologies</h2>
      <span className="section__subtitle">
        My journey in software development began with{" "}
        <b>Cogniter Technologies</b> , my first company. It was here that I
        gained invaluable experience and a strong foundation in innovative IT
        solutions. The company’s supportive environment and commitment to
        excellence played a crucial role in shaping my career, providing me with
        the skills and confidence to thrive in the industry. I am grateful for
        the opportunities and growth I experienced at Cogniter Technologies,
        which laid the groundwork for my professional development.
      </span>

      <p className="first_Project">
        My first project was the Talygen (Asset Management) Module, which was
        pivotal in shaping my career. Through this project, I developed and
        refined a range of essential skills, including:
        <ul>
          <br />
          <li className="list-item-spacing">
            <b>Logical Thinking:</b> Developing a structured approach to
            problem-solving.
          </li>
          <li className="list-item-spacing">
            <b>Patience:</b> Maintaining composure and persistence in the face
            of challenges.
          </li>
          <li className="list-item-spacing">
            <b>Research and Development:</b> Conducting thorough investigations
            to implement innovative solutions.
          </li>
          <li className="list-item-spacing">
            <b>Architecture:</b> Designing scalable and efficient system
            architectures.
          </li>
          <li className="list-item-spacing">
            <b>API Integration:</b> Seamlessly connecting frontend and backend
            systems through APIs.
          </li>
          <li className="list-item-spacing">
            <b>Frontend to Backend Integration:</b> Ensuring smooth interaction
            between user interfaces and server-side logic.
          </li>
          <li className="list-item-spacing">
            <b>Custom Fields:</b> Implementing customizable data fields to meet
            specific client requirements.
          </li>
          <li className="list-item-spacing">
            <b>Advanced Search Filters:</b> Creating robust search
            functionalities for improved data retrieval.
          </li>
          <li className="list-item-spacing">
            <b>View Management:</b> Efficiently organizing and displaying data
            to enhance user experience.
          </li>
        </ul>
        These skills have been crucial in my development as a professional,
        enabling me to deliver high-quality projects and exceed client
        expectations.
      </p>

      <h5 className="section__highlighted-title">
        This is what company employees and management say about me{" "}
      </h5>

      <Swiper
        className="cogniter__container"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, role }) => {
          return (
            <SwiperSlide className="cogniter__card" key={id}>
              <img src={image} alt={title} className="cogniter__img" />
              <h3 className="cogniter__name">
                <strong>{title}</strong> ({role})
              </h3>
              <p className="cogniter__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Cogniter;
