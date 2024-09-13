import React from "react";
import news_img from "../assets/news_img.png";
import news_img2 from "../assets/news_img2.jpg";

function NewsCard({ src }) {
  return (
    <div className="news__main__section__left__card">
      <img
        src={src ? src : news_img}
        alt="news_img"
        className="news__main__section__left__img"
      />
      <div className="news__main__section__left__card__content">
        <div className="news__main__section__left__card__date">17-12-2020</div>
        <div className="news__main__section__left__card__heading">
          Grow your small business to super big business with this step
        </div>
        <div className="news__main__section__left__card__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <a className="news__main__section__left__card__link">
          Continue reading{" "}
          <svg
            style={{ marginLeft: 10 }}
            xmlns="http://www.w3.org/2000/svg"
            width="8.867"
            height="14.827"
            viewBox="0 0 8.867 14.827"
          >
            <path
              id="Vector_6"
              data-name="Vector 6"
              d="M0,0,6.454,6,0,12"
              transform="translate(1.413 1.413)"
              fill="none"
              stroke="#fe2118"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <>
      <div className="news__main__section">
        <div className="news__main__section__left">
          <NewsCard />
        </div>
        <div className="news__main__section__right">
          <NewsCard src={news_img2} />
        </div>
      </div>
    </>
  );
}
