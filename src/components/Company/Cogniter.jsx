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

      <h5 className="section__manager-quote">
        My Manager Said: 😄 "M toh tere ko aise he smjhta tha" 👍
        <br />
        My Reply: 😂 "M bhi man he man hasu! Ab main kya bolu?" 😆
      </h5>

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
