"use client";
import React from "react";
import styles from "./featured-reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../public/images/right-arrow-brown.svg";
import emptyStar from "../../../public/images/empty-star.svg";
import fullStar from "../../../public/images/full-star.svg";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Review } from "@/app/utils/constants";

export default function FeaturedReviews({ reviews }: { reviews: Review[] }) {
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
        style={{ width: "100%" }}
        modules={[Autoplay]}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
              maxWidth: "100%",
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
                <a href="/resenas">Ver más</a>
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
