import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import faq_bg from "../assets/faq_bg.png";
import guarantee from "../assets/guarantee.png";
import user from "../assets/user.png";
import Faq from "react-faq-component";
import axios from "axios";
import { URL } from "../component/baseUrl";
export default function FAQScreen() {
  const [ioss, setioss] = useState([]);
  const [fiscal, setfiscal] = useState([]);
  const [tax, settax] = useState([]);
  const [partner, setpartner] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/faq/title/IOSS`)
      .then((res) => setioss(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/faq/title/Fiscal Representation`)
      .then((res) => setfiscal(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/faq/title/Taxpay`)
      .then((res) => settax(res.data))
      .catch((e) => console.log(e));
    axios
      .get(`${URL}/faq/title/Partnerships`)
      .then((res) => setpartner(res.data))
      .catch((e) => console.log(e));
  }, []);
  // const IOSS = {
  //   title: "IOSS",
  //   rows: ioss?.map((values) => ({
  //     title: values?.question,
  //     content: values?.answer,
  //   })),
  // };
  const FiscalRepresentation = {
    title: "Fiscal Representation",
    rows: fiscal?.map((values) => ({
      title: values?.question,
      content: values?.answer,
    })),
  };
  const Taxpay = {
    title: "Taxpay",
    rows: tax?.map((values) => ({
      title: values?.question,
      content: values?.answer,
    })),
  };
  const Partnerships = {
    title: "Partnerships",
    rows: partner?.map((values) => ({
      title: values?.question,
      content: values?.answer,
    })),
  };
  const Support = {
    title: "Support",
    rows: ioss?.map((values) => ({
      title: values?.question,
      content: values?.answer,
    })),
  };
  return (
    <>
      <Header />
      <div className="faq__main__section">
        <img src={faq_bg} alt="faq_bg" className="faq__main__section__img" />
        <div className="faq__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="faq__main__section__overlay__content__heading">
              FAQs
            </div>
          </div>
        </div>
      </div>
      <div className="faq__section__content">
        <Faq data={FiscalRepresentation} />
        <Faq data={Taxpay} />
        <Faq data={Partnerships} />
        <Faq data={Support} />
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
