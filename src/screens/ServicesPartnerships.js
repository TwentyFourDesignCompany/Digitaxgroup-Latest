import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import services_bg_partnerships from "../assets/services_bg_partnerships.png";
import user from "../assets/user.png";
import guarantee from "../assets/guarantee.png";
import thumb from "../assets/thumb.png";
import transparent from "../assets/transparent.png";
import trust from "../assets/trust.png";
import TrustCard from "../component/TrustCard";
import axios from "axios";
import { URL } from "../component/baseUrl";

function HowtoCard({ value, paragraph }) {
  return (
    <div className="how__work__section__content__card">
      <div className="how__work__section__content__card__cirle">{value}</div>
      <div className="how__work__section__content__card__para">{paragraph}</div>
    </div>
  );
}

export default function ServicesPartnerships() {
  const [iossTop, setIossTop] = useState([]);
  const [iossQuestion, setiossQuestion] = useState([]);
  const [work, setwork] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/ioss/text/Partnerships`)
      .then((res) => setIossTop(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/ioss/question/Partnerships`)
      .then((res) => setiossQuestion(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/work/role/Partnerships`)
      .then((res) => setwork(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={services_bg_partnerships}
          alt="services_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              {/* {iossTop[0]?.heading} */}
              PARTNERS & COMPLIANCE IN AFRICA
            </div>
            <div className="service__main__section__overlay__content__para">
              {/* {iossTop[0]?.paragraph} */}
              The non-resident merchant can use their existing compliance
              provider or the Digitax partner in Africa; Andersen Tax
            </div>
            {/* <button className="nav__header__link__btn__filled">
              Get a Quote
            </button> */}
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
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
      </div>
      {/* <div className="how__work__section">
        <div className="how__work__section__heading">How Does it work?</div>
        <div className="how__work__section__content">
          {work?.map((i, index) => {
            return <HowtoCard value={index + 1} paragraph={i.paragraph} />;
          })}
        </div>
      </div> */}
      <div className="trusted__main__container">
        <div className="trusted__main__container_heading">
          We are your transparent and trusted partner
        </div>
        <div className="trusted__main__container_para">
          Our mission is to help your business grow, especially financially. You
          can consult anytime
        </div>
        <div className="trusted__main__container__contant">
          <TrustCard
            img={trust}
            title="Trusted"
            para="Digitax is your trusted partner to provide necessary support for your tax operations."
          />
          <TrustCard
            img={transparent}
            title="Transparent"
            para=" As part of the pillars of our organisation, we make sure to be transparent at every step of our tax processes."
          />
          <TrustCard
            img={trust}
            title="Credibility"
            para="Digitax is a thought leader in fiscal representation in Africa. We have the credibility to lead the compliance ecosystem."
          />
          <TrustCard
            img={thumb}
            title="Convenient"
            para=" We make every process and steps easy by offering risk mitigated and automated service."
          />
        </div>
      </div>
      {/* <div className="our__client__says__main__section">
        <div className="our__client__says__main__section__content">
          <div className="our__client__says__main__section__heading">
            What our Client say...
          </div>
          <div className="our__client__says__main__section__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            earum consequatur quam temporibus odit sunt architecto corrupti
            error, blanditiis, repellat ullam vitae saepe ipsa facere eligendi
            facilis expedita accusantium modi.
          </div>
        </div>
      </div> */}
      {/* <div className="join us__says__main__section">
        <div className="join__us__says__main__section__heading">
          Join Us Today!
        </div>
        <div className="join us__says__main__section__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis
          nisl. Nulla facilisis orci lorem,
        </div>
        <button
          style={{ margin: 0, marginTop: "1em" }}
          className="nav__header__link__btn__filled"
        >
          Join Us
        </button>
      </div> */}
      {/* <NewsSection /> */}
      <SubscribeSection />
      <Footer />
    </>
  );
}
