import React from "react";
import subscribe_bg from "../assets/subscribe_bg.png";

export default function SubscribeSection() {
  return (
    <div className="subscribe__main__section">
      <div className="subscribe__main__section_content">
        <img
          src={subscribe_bg}
          alt="subscribe_bg"
          className="subscribe__main__section__img"
        />
        <input
          type="email"
          placeholder="Email"
          className="contact__main__section__right__input__subscribe"
        />
        <button className="contact__main__section__right__input__subscribe__btn">
          Send message
        </button>
      </div>
    </div>
  );
}
