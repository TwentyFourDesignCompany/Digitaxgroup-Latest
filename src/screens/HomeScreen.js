import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import main__bg from "../assets/main__bg.png";
import thumb from "../assets/thumb.png";
import transparent from "../assets/transparent.png";
import trust from "../assets/trust.png";
import service_bg from "../assets/service_bg.png";
import contact_bg from "../assets/contact_bg.png";
import servicesPic4 from "../assets/servicesPic4.jpg";
import NewsSection from "../component/NewsSection";
import SubscribeSection from "../component/SubscribeSection";
import TrustCard from "../component/TrustCard";
import "animate.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../component/baseUrl";
import { services } from "../component/services";
import first from "../assets/first.jpg";
function ServicesCard({ title, para, btnText, noSvg, path, image }) {
  return (
    <div className="service__main__section__overay__contant__card">
      <img
        src={image}
        alt="servicesPic"
        className="service__main__section__overay__contant__card__img"
      />
      <div className="service__main__section__overay__contant__card__overlay">
        {noSvg ? null : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73.955"
            height="88.904"
            viewBox="0 0 73.955 88.904"
          >
            <g
              id="document-settings-svgrepo-com"
              transform="translate(-42.963)"
            >
              <path
                id="Path_34"
                data-name="Path 34"
                d="M74.889,77.944H49.835a4.267,4.267,0,0,1-4.263-4.263V6.872A4.267,4.267,0,0,1,49.835,2.61H87.5V9.656a6.88,6.88,0,0,0,6.872,6.872h7.046V43.06a1.3,1.3,0,1,0,2.61,0V15.223a1.3,1.3,0,0,0-.007-.13c0-.032-.009-.062-.014-.093,0-.011,0-.022-.005-.033-.007-.037-.017-.072-.027-.108,0-.005,0-.011,0-.016-.011-.036-.024-.071-.038-.106l-.005-.014c-.014-.033-.029-.065-.045-.1l-.009-.019c-.015-.029-.033-.057-.051-.085l-.015-.025c-.018-.026-.037-.051-.056-.076l-.02-.026c-.027-.033-.056-.065-.086-.095L89.73.382A1.267,1.267,0,0,0,89.635.3l-.026-.02c-.025-.019-.05-.039-.076-.056L89.508.205C89.48.188,89.452.17,89.423.155L89.4.145c-.031-.016-.063-.032-.1-.045L89.293.095c-.035-.014-.07-.027-.106-.038l-.016,0c-.035-.01-.071-.02-.108-.027L89.031.021C89,.015,88.969.01,88.937.007A1.3,1.3,0,0,0,88.807,0H49.835a6.88,6.88,0,0,0-6.872,6.872V73.681a6.88,6.88,0,0,0,6.872,6.872H74.889a1.3,1.3,0,0,0,0-2.61ZM90.112,9.656v-5.2l9.464,9.464h-5.2A4.267,4.267,0,0,1,90.112,9.656Z"
                fill="#fff"
              />
              <path
                id="Path_35"
                data-name="Path 35"
                d="M302.011,328a11.048,11.048,0,1,0,11.048,11.048A11.06,11.06,0,0,0,302.011,328Zm0,19.486a8.438,8.438,0,1,1,8.438-8.438A8.448,8.448,0,0,1,302.011,347.486Z"
                transform="translate(-204.853 -270.934)"
                fill="#fff"
              />
              <path
                id="Path_36"
                data-name="Path 36"
                d="M279.058,297.092l-.826-.477a17.482,17.482,0,0,0,0-7.648l.826-.477a2.7,2.7,0,0,0,.987-3.684l-2.784-4.821a2.7,2.7,0,0,0-3.684-.987l-.821.474a17.981,17.981,0,0,0-6.628-3.817V274.7a2.7,2.7,0,0,0-2.7-2.7h-5.567a2.7,2.7,0,0,0-2.7,2.7v.958a17.983,17.983,0,0,0-6.628,3.817l-.821-.474a2.7,2.7,0,0,0-3.684.987l-2.784,4.821a2.7,2.7,0,0,0,.987,3.684l.826.477a17.482,17.482,0,0,0,0,7.648l-.826.477a2.7,2.7,0,0,0-.987,3.684l2.784,4.822a2.7,2.7,0,0,0,3.684.987l.821-.474a17.98,17.98,0,0,0,6.628,3.817v.958a2.7,2.7,0,0,0,2.7,2.7h5.567a2.7,2.7,0,0,0,2.7-2.7v-.958a17.983,17.983,0,0,0,6.628-3.817l.821.474a2.7,2.7,0,0,0,3.684-.987l2.784-4.822a2.7,2.7,0,0,0-.987-3.684Zm-3.587-8.415a15.034,15.034,0,0,1,0,8.229,1.3,1.3,0,0,0,.605,1.478l1.677.968h0a.087.087,0,0,1,.032.119L275,304.292a.087.087,0,0,1-.119.032l-1.671-.964a1.3,1.3,0,0,0-1.583.216,15.372,15.372,0,0,1-7.131,4.107,1.3,1.3,0,0,0-.979,1.263v1.94a.087.087,0,0,1-.087.087h-5.567a.087.087,0,0,1-.087-.087v-1.939a1.3,1.3,0,0,0-.979-1.263,15.373,15.373,0,0,1-7.131-4.107,1.3,1.3,0,0,0-1.583-.216l-1.67.964a.087.087,0,0,1-.119-.032l-2.784-4.822a.082.082,0,0,1-.009-.066.083.083,0,0,1,.041-.053l1.677-.968a1.3,1.3,0,0,0,.605-1.478,15.033,15.033,0,0,1,0-8.229,1.3,1.3,0,0,0-.605-1.478l-1.677-.968a.087.087,0,0,1-.032-.119l2.784-4.822a.087.087,0,0,1,.119-.032l1.671.964a1.305,1.305,0,0,0,1.583-.216A15.372,15.372,0,0,1,256.8,277.9a1.3,1.3,0,0,0,.979-1.263V274.7a.087.087,0,0,1,.087-.087h5.567a.087.087,0,0,1,.087.087v1.939a1.3,1.3,0,0,0,.979,1.263,15.373,15.373,0,0,1,7.131,4.107,1.305,1.305,0,0,0,1.583.216l1.67-.964a.087.087,0,0,1,.119.032l2.784,4.822a.087.087,0,0,1-.032.119l-1.677.968A1.305,1.305,0,0,0,275.471,288.676Z"
                transform="translate(-163.49 -224.677)"
                fill="#fff"
              />
              <path
                id="Path_37"
                data-name="Path 37"
                d="M92.268,130.61h2.784a1.3,1.3,0,1,0,0-2.61H92.268a1.3,1.3,0,0,0,0,2.61Z"
                transform="translate(-39.649 -105.73)"
                fill="#fff"
              />
              <path
                id="Path_38"
                data-name="Path 38"
                d="M140.268,130.61h2.784a1.3,1.3,0,1,0,0-2.61h-2.784a1.3,1.3,0,0,0,0,2.61Z"
                transform="translate(-79.298 -105.73)"
                fill="#fff"
              />
              <path
                id="Path_39"
                data-name="Path 39"
                d="M202.186,128H188.268a1.3,1.3,0,1,0,0,2.61h13.919a1.3,1.3,0,0,0,0-2.61Z"
                transform="translate(-118.947 -105.73)"
                fill="#fff"
              />
              <path
                id="Path_40"
                data-name="Path 40"
                d="M152.708,169.3a1.3,1.3,0,0,0-1.3-1.3H140.268a1.3,1.3,0,0,0,0,2.61H151.4A1.3,1.3,0,0,0,152.708,169.3Z"
                transform="translate(-79.298 -138.771)"
                fill="#fff"
              />
              <path
                id="Path_41"
                data-name="Path 41"
                d="M234.963,169.3a1.3,1.3,0,0,0,1.3,1.3h9.743a1.3,1.3,0,0,0,0-2.61h-9.743A1.3,1.3,0,0,0,234.963,169.3Z"
                transform="translate(-158.596 -138.771)"
                fill="#fff"
              />
              <path
                id="Path_42"
                data-name="Path 42"
                d="M92.268,170.61h2.784a1.3,1.3,0,1,0,0-2.61H92.268a1.3,1.3,0,0,0,0,2.61Z"
                transform="translate(-39.649 -138.771)"
                fill="#fff"
              />
              <path
                id="Path_43"
                data-name="Path 43"
                d="M92.268,210.61h2.784a1.3,1.3,0,1,0,0-2.61H92.268a1.3,1.3,0,1,0,0,2.61Z"
                transform="translate(-39.649 -171.812)"
                fill="#fff"
              />
              <path
                id="Path_44"
                data-name="Path 44"
                d="M196.268,210.61h23.661a1.3,1.3,0,1,0,0-2.61H196.268a1.3,1.3,0,1,0,0,2.61Z"
                transform="translate(-125.555 -171.812)"
                fill="#fff"
              />
              <path
                id="Path_45"
                data-name="Path 45"
                d="M140.268,208a1.3,1.3,0,1,0,0,2.61h4.176a1.3,1.3,0,1,0,0-2.61Z"
                transform="translate(-79.298 -171.812)"
                fill="#fff"
              />
              <path
                id="Path_46"
                data-name="Path 46"
                d="M155.578,248h-15.31a1.3,1.3,0,1,0,0,2.61h15.31a1.3,1.3,0,1,0,0-2.61Z"
                transform="translate(-79.298 -204.853)"
                fill="#fff"
              />
              <path
                id="Path_47"
                data-name="Path 47"
                d="M132.268,314.61h5.567a1.3,1.3,0,1,0,0-2.61h-5.567a1.3,1.3,0,0,0,0,2.61Z"
                transform="translate(-72.69 -257.718)"
                fill="#fff"
              />
              <path
                id="Path_48"
                data-name="Path 48"
                d="M92.268,250.61h2.784a1.3,1.3,0,1,0,0-2.61H92.268a1.3,1.3,0,1,0,0,2.61Z"
                transform="translate(-39.649 -204.853)"
                fill="#fff"
              />
              <path
                id="Path_49"
                data-name="Path 49"
                d="M91.345,287.8a1.3,1.3,0,0,0,1.845,0l2.784-2.784a1.3,1.3,0,0,0,0-1.845l-2.784-2.784a1.3,1.3,0,1,0-1.845,1.845l1.861,1.861-1.861,1.861A1.3,1.3,0,0,0,91.345,287.8Z"
                transform="translate(-39.649 -231.285)"
                fill="#fff"
              />
            </g>
          </svg>
        )}

        <div className="service__main__section__overay__contant__card__heading">
          {title}
        </div>
        <div className="service__main__section__overay__contant__card__para">
          {para}
        </div>
        <Link
          to={path ? path : "/"}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="service__main__section__overay__contant__card__btn"
        >
          {btnText ? btnText : "Read More"}{" "}
        </Link>
      </div>
    </div>
  );
}

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [testi, setTesti] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/home`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/service`)
      .then((res) => setTesti(res?.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Header />
      <div className="home__main__container">
        <img
          src={main__bg}
          alt="main_bg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay  animate__animated animate__fadeInLeft ">
          <div className="home__main__container__overlay__content">
            <div className="home__main__container__left ">
              <div className="home__main__container__heading ">
                {/* {data[0]?.title1} */}
                DIGITAX IS AN AUTHORIZED TAX REPRESENTATIVE IN NIGERIA
                SPECIALISING IN THE REPRESENTATION OF NON-RESIDENT BUSINESSES
                WHICH HAVE CUSTOMERS IN NIGERIA.
                {/* <span>{data[0]?.vate}</span> */}
              </div>
              <Link
                to="/about"
                style={{ width: 160, justifyContent: "center" }}
                className="nav__header__link__btn__filled"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="intro__main__container  animate__animated animate__fadeInRight animate__delay-1s">
        <div className="intro__main__container__contant">
          <div className="intro__main__container__contant__sub__heading">
            {/* {data[0]?.affilate} */}
            Introduction To Non Resident Tax Collection
          </div>
          {/* <div className="intro__main__container__contant__heading">
            {data[0]?.title2}
          </div> */}
          <div className="intro__main__container__contant__para">
            {/* {data[0]?.paragraph2} */}
            The world’s taxation system over the last decade has been moving
            increasingly to a regime based on customers' locations rather than
            legal entities' locations. In Nigeria legislation was enacted in
            2022 which began this process of bringing non-resident merchants
            into the scope of Nigerian VAT and DST. Digitax is the first agent
            authorised by the Nigerian tax authority (FIRS) to focus on the
            needs of non-resident businesses with customers in Nigeria and may
            therefore become liable to pay Nigerian tax. Digitax therefore
            provides both the necessary support to non-resident merchants and
            the confidence to the tax authorities that merchants are operating
            within an ecosystem compliant with Nigerian law. This enables
            merchants to more easily comply with tax regulations whilst reducing
            the administrative burden and cost of compliance. Tax authorities in
            turn need a trusted intermediary such as Digitax through which these
            taxes can be collected and through which they can request
            information from merchants in respect of queries they may have or to
            host and manage local tax audits.
          </div>

          <div className="intro__main__container__contant__sub__heading seconMain">
            {/* {data[0]?.affilate} */}
            Operating in Nigeria <br /> <br /> Digitax Relationship With FIRS
          </div>
          {/* <div className="intro__main__container__contant__heading">
            {data[0]?.title2}
          </div> */}
          <div className="intro__main__container__contant__para">
            {/* {data[0]?.paragraph2} */}
            As the FIRS authorised non-resident tax revenue collector, our
            mission is to ensure your business can be compliant in Nigeria
            through an efficient and constructive interaction with the Nigerian
            tax authority, the Federal Inland Revenue Service (FIRS).
          </div>
        </div>
      </div>
      <div className="trusted__main__container">
        <div className="trusted__main__container_heading">
          Digitax Is Your Friendly, Transparent And Trusted Partner
        </div>
        <div className="trusted__main__container_para">
          Our mission is to ensure your business remains compliant. You can
          confidentially discuss your VAT obligations with us anytime
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
            para=" In following the constitution of our organisation, transparency is at the heart of every step in the compliance of our tax collection processes."
          />
          <TrustCard
            img={trust}
            title="Credibility"
            para="Digitax is a thought leader in fiscal representation in Africa. We have the credibility to lead the compliance ecosystem."
          />
          <TrustCard
            img={thumb}
            title="Convenient"
            para="We make every process and steps easy by offering risk mitigated and automated service."
          />
        </div>
      </div>

      <div className="services__main__section">
        <div className="services__main__section__heading">Our Services</div>

        <img
          src={service_bg}
          alt="service_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overay">
          <div className="service__main__section__overay__contant">
            {services.map((i, index) => {
              return (
                <ServicesCard
                  key={index}
                  path={i?.path}
                  title={i?.heading}
                  para={i?.paragraph}
                  // image={i?.image}
                  image={first}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <p style={{ textAlign: "center" }}>
          <h1>Registration</h1>
          To sign up go to{" "}
          <a href="https://www.desucla.com/">www.desucla.com</a> and choose
          Nigeria from the drop down country list.
        </p>
      </div>
      {/* <NewsSection /> */}
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
                Get in touch with us!
              </div>
              {/* <div className="contact__main__section__left__para">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div> */}
              <div className="contact__main__section__left__social">
                {/* <svg
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
                </svg> */}
                {/* <div className="contact__main__section__left__social__heading__wrapper">
                  <div className="contact__main__section__left__social__heading">
                    Call
                  </div>
                  <div className="contact__main__section__left__social__para">
                    084524145547
                  </div>
                </div> */}
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
                    <span>London Office:</span> 1 Cochrane House Admirals
                    Way,Canary Wharf, London, E14 9UD, UK
                  </div>
                  <div className="contact__main__section__left__social__para">
                    <span>Lagos Office:</span> Andersen Place, 5 Osborne Road,
                    Ikoyi Lagos, Nigeria
                  </div>
                  <div className="contact__main__section__left__social__para">
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

      <SubscribeSection />
      <Footer />
    </>
  );
}
