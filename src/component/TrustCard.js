import React from "react";
import guarantee from "../assets/guarantee.png";
import thumb from "../assets/thumb.png";
import transparent from "../assets/transparent.png";
import trust from "../assets/trust.png";

export default function TrustCard({ img, title, para }) {
  return (
    <div className="trusted__main__container__contant__card">
      <img
        src={img}
        alt="img"
        className="trusted__main__container__contant__card__img"
      />
      <div className="trusted__main__container__contant__card__heading">
        {title}
      </div>
      <div className="trusted__main__container__contant__card__para">
        {para}
      </div>
    </div>
  );
}
