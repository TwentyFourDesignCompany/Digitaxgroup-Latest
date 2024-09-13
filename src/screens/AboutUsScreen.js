import React, { useEffect, useState, useRef } from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import about_bg from "../assets/about_bg.png";
import founder_pic from "../assets/founder_pic.png";
import user from "../assets/user.png";
import axios from "axios";
import { URL } from "../component/baseUrl";
import about from "../assets/about.png";
import andersen from "../assets/andersen.png";
import firs from "../assets/firs.png";

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

export default function AboutUsScreen() {
  const [data, setData] = useState([]);
  const [testi, setTesti] = useState([]);
  const partnersRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${URL}/about`)
      .then((res) => setData(res?.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/testimonial`)
      .then((res) => setTesti(res?.data))
      .catch((e) => console.log(e));

    // Add this new effect to handle scrolling
  }, []);
  useEffect(() => {
    if (window.location.hash === "#partners") {
      setTimeout(() => {
        partnersRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={about}
          alt="about_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              About Us
            </div>
            <div className="service__main__section__overlay__content__para">
              SELLING ACROSS BORDERS{" "}
            </div>
            {/* <button className="nav__header__link__btn__filled">
              Get a Quote
            </button> */}
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
        <div className="service__main__section__more__about__para">
          {/* {data[0]?.paragraph} */}
          <h1 style={{color:"#fe2118"}}>About Digitax Group</h1>
          <p>
            Digitax provides an interface with the Nigerian tax authority to
            assist with the tax compliance process and timely settlement of
            taxes due.
          </p>
          <p>
            Digitax works primarily but not exclusively with non-resident
            businesses.
          </p>
          <p>
            Digitax represents merchants of all sizes which need to file returns
            and pay tax in Nigeria.
          </p>
          <p>
            If you have customers outside of Nigeria but in the rest of Africa
            then Digitax has a network of advisers and contacts that can support
            you.
          </p>
          <h1 style={{color:"#fe2118"}}>Our Management Team</h1>
          <h3>Mr Shakiel Malik: CEO</h3>
          <p>
            Adeyinka spent 30 years operating as a banking and payments
            executive. Served as the Assistant General Manager (Electronic
            Banking) of Société Générale Bank Nigeria. Founded the Smartcard
            Society of Nigeria in 2002 and served as the Executive Secretary/CEO
            of the association. Adeyinka served on the Central Bank committee on
            payment systems. Founder & CEO of PrepayGo (a payments company).
          </p>
          <p>
            Mr Adeyemi has a BSc & MSc from University of Ibadan and a MBA from
            IESE Business School, University of Navara, Barcelona, Spain.
          </p>
          <h3>Mr Adeyinka Adeyemi: Chairman</h3>
          <p>
            Shakiel spent 20 years working as an executive in the sales and
            marketing of financial technologies. Notable former roles have
            included Chief Revenue Officer, Corporate Development Officer at
            Desucla Limited, a fiscal-tech organisation based in London. VP
            Sales EMEA Oracle Corporation (London) for Enterprise Software into
            the financial sector. He was part of the European (EMEA) component
            of the global management team that took a global Oracle startup
            business unit from conception to maturity. VP Sales EMEA Thompson
            Reuters (London) for Enterprise Governance, Risk and Compliance
            (GRC) software targeted at stock market listed corporations in
            Europe. Founder & CEO Artificial Intelligence Company (sold IP).
          </p>
          <p>
            Shakiel has an Electronics Engineering Degree from University of
            London.
          </p>
          <h3>Mr Kazeem Tewogbade: Chief Technology Officer</h3>
          <p>
            Kazeem also co-founded and led Bluechip Technologies Ltd from
            conception to establishing it is a market leader in the Nigerian IT
            marketplace. He has been an expert data architect with over 23 years
            of experience in the IT industry, helping clients align IT
            strategies with corporate strategic objectives.
          </p>
          <p>
            Kazeem has a Degree in Computer Science from University of Ibadan,
            Nigeria.
          </p>
          <h3>Mr Olaleye Adebiyi: Tax Advisor - Africa</h3>
          <p>
            Olaleye Adebiyi is the Co-Regional Managing Partner for Africa and
            the Office Managing Partner of Andersen in Nigeria.
          </p>
          <p>
            He is a renowned tax expert with about 34 years of experience in tax
            planning, mergers and acquisitions, advisory, and compliance
            transactions involving oil and gas, telecommunications, foreign
            investment and privatization in Nigeria.
          </p>
          <p>
            As a leading tax expert, Olaleye has handled various portfolios and
            advised numerous client on tax issues, laws and regulations and has
            won landmark cases involving novel and complex tax issues. Olaleye
            has also acted as a Tax Expert Witness in various arbitration
            proceedings.
          </p>
          <p>
            Olaleye’s practice started from Arthur Andersen in 1991, where he
            rose to the position of Group Head in 2002. After that, he joined
            the firm of Aluko & Oyebode as the Partner and Head of the Tax and
            Business Regulatory Services Unit. He left Aluko & Oyebode in 2005
            to set up WTS Adebiyi & Associates before joining Andersen in
            Nigeria in 2017.
          </p>
          <p>
            Olaleye is the current Chairman of the Taxation Committee of the
            Section of Business Law of the Nigerian Bar Association.
          </p>
          <p>
            He has also written many articles in law journals and regularly
            speaks at various tax seminars and conferences. He often features as
            a tax commentator in National newspapers.
          </p>
          <p>
            He recently translated and published the Personal Income Tax Act of
            Nigeria in four native languages in a bid to create more awareness
            about the law to individuals who may not understand or read English,
            but are more comfortable speaking and reading in their native
            languages.
          </p>
          <h3>Mr Richard Baxter: Strategy Advisor</h3>
          <p>
            Richard Baxter is a founder and director of Desucla. Richard was
            formerly head of indirect tax at Arthur Andersen UK and head of
            indirect tax technology at Deloitte. Richard has served in interim
            roles as head of VAT of Lehman Bros in Ch11 and at P&G Pharma. In
            2014 Richard led a project for the European Commission examining the
            performance of the Task Force for Greece. The recommendations of
            this report led to the creation of the Structural Support Reform
            Service within the EU to ensure all member states have appropriate
            infrastructure to support the complexity of modern tax management.
            Richard created Desucla after an approach asking him to try to
            create a solution to address the challenge of applying an antiquated
            fiscal representation model to large volumes of non-resident
            merchants trading on Europe’s online markets.
          </p>
          <p>
            Richard is a Chartered Tax Adviser and has a Degree in PPE from
            Oxford University.
          </p>
        </div>
      </div>
      {/* <div className="testnomials__main__section">
        <div className="testnomials__main__section__heading">Testimonials</div>
        <div className="testnomials__main__section__content">
          {testi?.map((i, index) => {
            return (
              <TestimonialCard
                name={i?.name}
                image={i?.image}
                message={i?.message}
              />
            );
          })}
        </div>
      </div> */}
      {/* <NewsSection /> */}
      <SubscribeSection />
      <Footer />
    </>
  );
}
