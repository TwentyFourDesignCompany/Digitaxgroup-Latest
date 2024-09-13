import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import services_bg from "../assets/services_bg.png";
import guarantee from "../assets/guarantee.png";
import user from "../assets/user.png";
import axios from "axios";
import { URL } from "../component/baseUrl";
import { work } from "../component/work";
function TestimonialCard(image, message, name) {
  return (
    <div className="testnomials__main__section__content__card">
      <div className="testnomials__main__section__content__card__img__wrapper">
        <img
          src={image?.image}
          alt="user"
          className="testnomials__main__section__content__card__img"
        />
      </div>
      <div className="testnomials__main__section__content__card__para">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.2"
          height="27.3"
          viewBox="0 0 31.2 27.3"
        >
          <path
            id="Icon_awesome-quote-left"
            data-name="Icon awesome-quote-left"
            d="M28.275,15.9H23.4V12a3.9,3.9,0,0,1,3.9-3.9h.487A1.459,1.459,0,0,0,29.25,6.638V3.713A1.459,1.459,0,0,0,27.787,2.25H27.3A9.747,9.747,0,0,0,17.55,12V26.625a2.926,2.926,0,0,0,2.925,2.925h7.8A2.926,2.926,0,0,0,31.2,26.625v-7.8A2.926,2.926,0,0,0,28.275,15.9Zm-17.55,0H5.85V12a3.9,3.9,0,0,1,3.9-3.9h.487A1.459,1.459,0,0,0,11.7,6.638V3.713A1.459,1.459,0,0,0,10.237,2.25H9.75A9.747,9.747,0,0,0,0,12V26.625A2.926,2.926,0,0,0,2.925,29.55h7.8a2.926,2.926,0,0,0,2.925-2.925v-7.8A2.926,2.926,0,0,0,10.725,15.9Z"
            transform="translate(0 -2.25)"
            fill="#fe2118"
          />
        </svg>
        {image.message}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.201"
          height="27.301"
          viewBox="0 0 31.201 27.301"
        >
          <g
            id="Group_162"
            data-name="Group 162"
            transform="translate(-871.821 -3824.5)"
          >
            <path
              id="Icon_awesome-quote-left"
              data-name="Icon awesome-quote-left"
              d="M28.276,15.9H23.4V12a3.9,3.9,0,0,1,3.9-3.9h.488a1.459,1.459,0,0,0,1.463-1.463V3.713A1.459,1.459,0,0,0,27.789,2.25H27.3A9.748,9.748,0,0,0,17.551,12V26.626a2.926,2.926,0,0,0,2.925,2.925h7.8A2.926,2.926,0,0,0,31.2,26.626v-7.8A2.926,2.926,0,0,0,28.276,15.9Zm-17.551,0H5.85V12a3.9,3.9,0,0,1,3.9-3.9h.488A1.459,1.459,0,0,0,11.7,6.638V3.713A1.459,1.459,0,0,0,10.238,2.25H9.75A9.748,9.748,0,0,0,0,12V26.626a2.926,2.926,0,0,0,2.925,2.925h7.8a2.926,2.926,0,0,0,2.925-2.925v-7.8A2.926,2.926,0,0,0,10.725,15.9Z"
              transform="translate(903.022 3854.051) rotate(180)"
              fill="#fe2118"
            />
          </g>
        </svg>
      </div>
      <div className="testnomials__main__section__content__card__title">
        {image?.name}
      </div>
    </div>
  );
}

function HowtoCard({ value, paragraph }) {
  return (
    <div className="how__work__section__content__card">
      <div className="how__work__section__content__card__cirle">{value}</div>
      <div className="how__work__section__content__card__para">{paragraph}</div>
    </div>
  );
}

function HasselCard() {
  return (
    <div className="service__main__section__more__about__card__wrapper__card">
      <div className="service__main__section__more__about__card__wrapper__card__header">
        <img
          src={guarantee}
          alt="guarantee"
          className="service__main__section__more__about__card__wrapper__card__img"
        />
        <div className="service__main__section__more__about__card__wrapper__card__heading">
          Hassle free process
        </div>
      </div>
      <div className="service__main__section__more__about__card__wrapper__card__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
        sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis nisl.
        Nulla facilisis orci lorem, sit amet tempus neque aliquam quis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </div>
    </div>
  );
}

export default function ServicesIOSS() {
  const [iossTop, setIossTop] = useState([]);
  const [iossQuestion, setiossQuestion] = useState([]);
  const [work, setwork] = useState([]);
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/ioss/text/IOSS`)
      .then((res) => setIossTop(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/ioss/question/IOSS`)
      .then((res) => setiossQuestion(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/work/role/IOSS`)
      .then((res) => setwork(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/testimonial`)
      .then((res) => setTesti(res?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={services_bg}
          alt="services_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              {/* {iossTop[0]?.heading} */}
              Support
            </div>
            <div className="service__main__section__overlay__content__para">
              {/* {iossTop[0]?.paragraph} */}
            </div>
            {/* <button className="nav__header__link__btn__filled">
              Get a Quote
            </button> */}
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
        <div className="service__main__section__more__about__para">
          <p>
            In Nigeria, Digitax is advised by Andersen Nigeria a leading local
            tax firm and part of the Andersen Global network giving us access to
            world class tax experts on a global basis.
          </p>
        </div>
        {/* {iossQuestion.map((i, index) => {
          return (
            <div key={index}>
              <div className="service__main__section__more__about__heading">
                {i?.question}
              </div>
              <div className="service__main__section__more__about__para">
                {i?.answer}
              </div>
            </div>
          );
        })} */}
        {/* <div className="service__main__section__more__about__heading">
          How can our IOSS service help you?
        </div> */}
        {/* <div className="service__main__section__more__about__card__wrapper">
          <HasselCard />
          <HasselCard />
          <HasselCard />
        </div> */}
        {/* <div className="service__main__section__more__about__card__wrapper">
          <HasselCard />
          <HasselCard />
          <HasselCard />
        </div> */}
      </div>
      {/* <div className="how__work__section">
        <div className="how__work__section__heading">How Does it work?</div>
        <div className="how__work__section__content">
          {work?.map((i, index) => {
            return <HowtoCard value={index + 1} paragraph={i.paragraph} />;
          })}
        </div>
      </div> */}
      /{/* <NewsSection /> */}
      <SubscribeSection />
      <Footer />
    </>
  );
}
