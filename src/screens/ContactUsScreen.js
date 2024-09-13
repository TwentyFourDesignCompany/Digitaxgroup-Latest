import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import contact_main_bg from "../assets/contact_main_bg.png";
// import call from "../assets/call.png";
// import email from "../assets/email.png";
// import location from "../assets/location.png";
import contact_bg from "../assets/contact_bg.png";
import user from "../assets/user.png";
import axios from "axios";
import { URL } from "../component/baseUrl";
import digitax_logo from "../assets/logo.png";
import andersen_logo from "../assets/andersen.png";
import firs from "../assets/firs.png";
function TestimonialCard() {
  return (
    <div className="testnomials__main__section__content__card">
      <div className="testnomials__main__section__content__card__img__wrapper">
        <img
          src={user}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
        sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis nisl.
        Nulla facilisis orci lorem, sit amet tempus neque aliquam quis.
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
        Johny laze
      </div>
    </div>
  );
}

export default function ContactUsScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/contact`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);
  return (
    <>
      <Header />

      <div className="service__main__section">
        <img
          src={contact_main_bg}
          alt="contact_main_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              CONTACT US
            </div>
            <div className="service__main__section__overlay__content__para">
              {data[0]?.paragraph1}
            </div>
            <a href="#contact" className="nav__header__link__btn__filled">
              Contact US
            </a>
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
        <div className="service__main__section__more__about__para">
          <h1>For further information please contact </h1>
          <img
            src={digitax_logo}
            alt="digitax_logo"
            style={{ width: "200px", height: "auto" }}
          />
          <h3>
            Digitax Group Limited:
            <a href="mailto:info@digitaxgroup.com">
              info@digitaxgroup.com
            </a>{" "}
          </h3>

          <p>
            <span>London Office:</span> Andersen Place, 5 Osborne Road, Ikoyi
            Lagos, Nigeria
          </p>
          <p>
            <span>Lagos Office:</span> 3rd Floor, 47 Glover Road, Ikoyi 106104,
            Lagos, Nigeria
          </p>
          <p>
            <span>Abuja Office:</span> Yobe Investment House, Plot 1332 Ralph
            Shodeinde Street, CBD, Abuja.
          </p>
          <img
            src={andersen_logo}
            alt="andersen_logo"
            style={{ width: "200px", height: "auto" }}
          />
          <h3>
            Andersen Tax:{" "}
            <a href="mailto:info@ng.Andersen.com">info@ng.Andersen.com</a>
          </h3>

          <p>
            <span>Lagos Office:</span> Andersen Place, 5 Osborne Road, Ikoyi
            Lagos, Nigeria
          </p>
          <p>
            <span>Abuja Office:</span> Suite 302, Yobe Investment House, Plot
            1332 Ralph Shodeinde Street, CBD, Abuja, Nigeria
          </p>

          <h3>
            Desucla Limited:{" "}
            <a href="mailto:Support@desucla.com">Support@desucla.com</a>{" "}
          </h3>

          <p>
            {" "}
            <span>London Office:</span> 29 Euston Road, London, NW1 2SD, England
          </p>
          <img
            src={firs}
            alt="firs"
            style={{ width: "200px", height: "auto" }}
          />
          <h3>Federal Inland Revenue Service (FIRS): </h3>

          <p>
            <span>Head Office:</span> Revenue House, 20 Sokode Crescent, Wuse
            Zone 5, Abuja, Nigeria
          </p>
          <a href="https://www.firs.gov.ng/">https://www.firs.gov.ng/</a>
        </div>
      </div>
      <div id="contact" className="contact__main__section">
        <img
          src={contact_bg}
          alt="contact_bg"
          className="contact__main__section__img"
        />
        <div className="contact__main__section__overlay">
          <div className="contact__main__section__overlay__content">
            <div className="contact__main__section__left">
              <div className="contact__main__section__left__heading">
                {data[0]?.heading}
              </div>
              <div className="contact__main__section__left__para">
                {data[0]?.paragraph2}
              </div>
              {/* <div className="contact__main__section__left__social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="contact__main__section__left__social__heading__wrapper">
                  <div className="contact__main__section__left__social__heading">
                    Call
                  </div>
                  <div className="contact__main__section__left__social__para">
                  {data[0]?.phone}
                  </div>
                </div>
              </div> */}

              <div className="contact__main__section__left__social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <div className="contact__main__section__left__social__heading__wrapper">
                  <div className="contact__main__section__left__social__heading">
                    Email
                  </div>
                  <div className="contact__main__section__left__social__para">
                    {/* {data[0]?.email} */}
                    info@digitaxgroup.tax
                  </div>
                </div>
              </div>
              <div className="contact__main__section__left__social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="contact__main__section__left__social__heading__wrapper">
                  {/* <div className="contact__main__section__left__social__heading">
                    Location
                  </div> */}
                  <div className="contact__main__section__left__social__para">
                    {/* {data[0]?.address} */}
                    <span>London Office:</span> 1 Cochrane House Admirals
                    Way,Canary Wharf, London, E14 9UD, UK
                  </div>
                  <div className="contact__main__section__left__social__para">
                    {/* {data[0]?.address} */}
                    <span>Lagos Office:</span> Andersen Place, 5 Osborne Road, Ikoyi Lagos, Nigeria
                  </div>
                  <div className="contact__main__section__left__social__para">
                    {/* {data[0]?.address} */}
                    <span>Abuja Office:</span> Yobe Investment House, Plot 1332
                    Ralph Shodeinde Street, CBD, Abuja, Nigeria
                  </div>
                </div>
              </div>
              <div className="footer__main__container__content__entry__wrapper__social__wrapper">
                <a
                  href="https://www.facebook.com/Digitax-105406545337206"
                  className="footer__main__container__content__entry__wrapper__social"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.252"
                    height="21.999"
                    viewBox="0 0 10.252 21.999"
                  >
                    <g
                      id="facebook-logo_1_"
                      data-name="facebook-logo (1)"
                      transform="translate(-125.619)"
                    >
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M132.441,7.208v-1.9a4.176,4.176,0,0,1,.04-.661,1.283,1.283,0,0,1,.18-.461.736.736,0,0,1,.454-.314,3.231,3.231,0,0,1,.835-.087h1.9V0h-3.03a4.932,4.932,0,0,0-3.778,1.248,5.257,5.257,0,0,0-1.148,3.678V7.208h-2.27V11h2.269V22h4.552V11h3.03l.4-3.791Z"
                        transform="translate(0)"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/Digitax6"
                  className="footer__main__container__content__entry__wrapper__social"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.169"
                    height="17.199"
                    viewBox="0 0 21.169 17.199"
                  >
                    <path
                      id="twitter_1_"
                      data-name="twitter (1)"
                      d="M21.169,50.036a9.048,9.048,0,0,1-2.5.685,4.315,4.315,0,0,0,1.909-2.4,8.673,8.673,0,0,1-2.752,1.05,4.339,4.339,0,0,0-7.507,2.968,4.468,4.468,0,0,0,.1.99,12.284,12.284,0,0,1-8.945-4.539,4.341,4.341,0,0,0,1.334,5.8,4.286,4.286,0,0,1-1.961-.535V54.1a4.36,4.36,0,0,0,3.477,4.264,4.331,4.331,0,0,1-1.138.143,3.837,3.837,0,0,1-.822-.074,4.381,4.381,0,0,0,4.055,3.023,8.72,8.72,0,0,1-5.381,1.851A8.128,8.128,0,0,1,0,63.252,12.218,12.218,0,0,0,6.657,65.2,12.267,12.267,0,0,0,19.009,52.85c0-.192-.007-.377-.016-.561A8.658,8.658,0,0,0,21.169,50.036Z"
                      transform="translate(0 -48)"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="footer__main__container__content__entry__wrapper__social"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.968"
                    height="17.199"
                    viewBox="0 0 16.968 17.199"
                  >
                    <g
                      id="linkedin-logo_1_"
                      data-name="linkedin-logo (1)"
                      transform="translate(0 -9.558)"
                    >
                      <path
                        id="LinkedIn"
                        d="M16.968,20.1v6.654H13.331V20.548c0-1.56-.526-2.624-1.842-2.624a2.006,2.006,0,0,0-1.866,1.411,2.789,2.789,0,0,0-.121.941v6.481H5.864s.049-10.515,0-11.6H9.5V16.8c-.007.012-.017.026-.024.037H9.5V16.8a3.586,3.586,0,0,1,3.278-1.918C15.173,14.879,16.968,16.538,16.968,20.1ZM2.059,9.558a1.949,1.949,0,0,0-2.059,2,1.938,1.938,0,0,0,2.01,2.006h.024a1.95,1.95,0,0,0,2.058-2.006A1.942,1.942,0,0,0,2.059,9.558ZM.216,26.757H3.853v-11.6H.216Z"
                        transform="translate(0)"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href=""
                  className="footer__main__container__content__entry__wrapper__social"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.186"
                    height="17.199"
                    viewBox="0 0 14.186 17.199"
                  >
                    <g id="XMLID_798_" transform="translate(-33.181)">
                      <path
                        id="XMLID_799_"
                        d="M45.527,1.762A7.116,7.116,0,0,0,40.686,0a7.805,7.805,0,0,0-5.613,2.062,5.956,5.956,0,0,0-1.892,4.224,3.933,3.933,0,0,0,2.248,3.931.776.776,0,0,0,.283.055.622.622,0,0,0,.614-.482c.048-.17.158-.591.205-.773a.7.7,0,0,0-.2-.784,2.426,2.426,0,0,1-.6-1.708A4.409,4.409,0,0,1,40.408,2.2c2.411,0,3.908,1.306,3.908,3.407a6.811,6.811,0,0,1-.844,3.459,2.494,2.494,0,0,1-2.065,1.377,1.4,1.4,0,0,1-1.089-.474A1.15,1.15,0,0,1,40.1,8.929c.107-.433.254-.886.4-1.323A7.858,7.858,0,0,0,41,5.452a1.6,1.6,0,0,0-1.652-1.72A2.517,2.517,0,0,0,37.106,6.5a3.948,3.948,0,0,0,.308,1.548c-.158.639-1.1,4.435-1.277,5.151-.1.418-.724,3.719.3,3.982,1.155.3,2.187-2.919,2.293-3.282.085-.3.383-1.413.566-2.1a3.589,3.589,0,0,0,2.329.858,5.285,5.285,0,0,0,4.17-1.988,7.725,7.725,0,0,0,1.568-4.88A5.507,5.507,0,0,0,45.527,1.762Z"
                        transform="translate(0 0)"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="contact__main__section__right">
              <form action="" className="contact__main__section__right__form">
                <label
                  className="contact__main__section__right__form__label"
                  htmlFor=""
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__main__section__right__input"
                />
                <label
                  className="contact__main__section__right__form__label"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="contact__main__section__right__input"
                />
                <label
                  className="contact__main__section__right__form__label"
                  htmlFor=""
                >
                  Description
                </label>

                <textarea
                  className="contact__main__section__right__input"
                  name="Description"
                  id=""
                  placeholder="Description"
                  cols="30"
                  rows="6"
                ></textarea>
                <button
                  onClick={(e) => {
                    window.location = "mailto:info@digitaxgroup.com";
                    e.preventDefault();
                  }}
                  className="nav__header__link__btn__filled"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <NewsSection /> */}
      <SubscribeSection />
      <Footer />
    </>
  );
}
