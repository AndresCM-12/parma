"use client";
import React from "react";
import styles from "./featured-reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../public/images/right-arrow-brown.svg";
import emptyStar from "../../../public/images/empty-star.svg";
import fullStar from "../../../public/images/full-star.svg";

export default function FeaturedReviews() {
  const [reviews, setReviews] = React.useState([
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Anna Cristina Peña",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      score: 0,
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className={styles.swiperWrapper}>
      <div
        id="featured-reviews-left-arrow"
        className={styles.arrow}
        onClick={() => {
          const document: any = window.document;
          const swiper = document.querySelector("#featured-reviews")?.swiper;
          swiper.slidePrev();
        }}
      >
        <img
          src={leftArrow.src}
          alt="Flecha para la izquierda"
          width={48}
          height={48}
        />
      </div>
      <Swiper
        id="featured-reviews"
        slidesPerView={1}
        spaceBetween={30}
        className={styles.swiperContainer}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div className={styles.swiperSlide}>
              <div className={styles.images}>
                <img src={review.image} alt="Imagen de usuario" />
              </div>
              <div className={styles.textWrapper}>
                {getStars(review.score)}
                <h6>{review.title}</h6>
                <p>{review.description}</p>
                <a href="/comentarios">Ver más</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="featured-reviews-right-arrow"
        className={styles.arrow}
        onClick={() => {
          const document: any = window.document;
          const swiper = document.querySelector("#featured-reviews")?.swiper;
          swiper.slideNext();
        }}
      >
        <img
          src={rightArrow.src}
          alt="Flecha para la derecha"
          width={48}
          height={48}
        />
      </div>
      <div className={styles.mobileArrows}>
        <div
          className={styles.arrow}
          onClick={() => {
            const document: any = window.document;
            const swiper = document.querySelector("#featured-reviews")?.swiper;
            swiper.slidePrev();
          }}
        >
          <img
            src={leftArrow.src}
            alt="Flecha para la izquierda"
            width={48}
            height={48}
          />
        </div>
        <div
          className={styles.arrow}
          onClick={() => {
            const document: any = window.document;
            const swiper = document.querySelector("#featured-reviews")?.swiper;
            swiper.slideNext();
          }}
        >
          <img
            src={rightArrow.src}
            alt="Flecha para la derecha"
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}

function getStars(score: number) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0px",
        marginBottom: "16px",
      }}
    >
      {[...Array(5)].map((_, index) => {
        if (index < score) {
          return <img key={index} src={fullStar.src} alt="Estrella llena" />;
        } else {
          return <img key={index} src={emptyStar.src} alt="Estrella vacía" />;
        }
      })}
    </div>
  );
}
