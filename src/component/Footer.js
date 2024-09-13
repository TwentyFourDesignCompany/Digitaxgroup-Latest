import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.scss";

export default function Footer() {
  return (
    <div className="footer__conatiner">
      <div className="footer__conatiner__content">
        <div className="footer__overlay__content__col">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="footer__overlay__content__col__img__wrapper"
          >
            {/* <img
              src={logo}
              alt="logo"
              className="footer__overlay__content__col__img"
            /> */}
          </Link>
          <div className="footer__overlay__content__col__text">
            Digitax is the trusted partner providing the necessary support to
            merchants and the confidence to the tax authority that SMEs/MNCs are
            operating within a system that is systematically compliant in
            nature.
          </div>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">
            Quicklinks
          </div>
          <Link
            to="/"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </Link>
          <Link
            to="/services-facial-representation"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Services
          </Link>
          <Link
            to="/faq"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            FAQ's
          </Link>
          <Link
            to="/about"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            About US
          </Link>
          <Link
            to="/contact"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </Link>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">
            Socail Media
          </div>
          <a
            href="https://www.facebook.com/Digitax-105406545337206"
            className="footer__overlay__content__col__entry"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/Digitax6"
            className="footer__overlay__content__col__entry"
          >
            Twitter
          </a>
          <a href="#" className="footer__overlay__content__col__entry">
            Instagram
          </a>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">Services</div>

          <Link
            to="/services-facial-representation"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Fiscal Representation
          </Link>
          <Link
            to="/services-taxpay"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Taxpay
          </Link>
          <Link
            to="/services-partnerships"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Partnerships
          </Link>
          <Link
            to="/services"
            className="footer__overlay__content__col__entry"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Support
          </Link>
        </div>
      </div>
      <div className="footer__copywright">2022 Digitax. Allright reserved</div>
    </div>
  );
}
