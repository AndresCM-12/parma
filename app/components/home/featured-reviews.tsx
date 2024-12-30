"use client";
import React, { useEffect, useState } from "react";
import styles from "./featured-reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../public/images/right-arrow-brown.svg";
import emptyStar from "../../../public/images/empty-star.svg";
import fullStar from "../../../public/images/full-star.svg";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "@/app/firebase/config";
import { collection, getFirestore, query } from "firebase/firestore";

export default function FeaturedReviews({
  reviews,
  useReviews,
}: {
  reviews: any;
  useReviews: boolean;
}) {
  //Use effect to get all reviews
  const [reviewsToShow, setReviewsToShow] = useState() as any;
  const [reviewsScore, setReviewsScore] = useState() as any;

  const [snapshot, loading, error] = useCollection(
    query(collection(getFirestore(app), "reviews"))
  );

  useEffect(() => {
    if (reviewsToShow === undefined) {
      initData();
    }
  });

  function initData() {
    const reviewsToShow = reviews;
    const reviewsData = snapshot?.docs;
    if (!loading) {
      const reviewsArray: any = [];
      reviewsData?.forEach((doc) => {
        reviewsArray.push(doc.data());
      });

      reviewsArray.sort((a: any, b: any) => b.puntaje - a.puntaje);

      const reviewsToShowArray: any = [];
      reviewsToShow.forEach((reviewTitle: any) => {
        reviewsArray.forEach((doc: any) => {
          if (doc[reviewTitle]) {
            if (doc[reviewTitle].reviews.length > 0) {
              reviewsToShowArray.push(...doc[reviewTitle].reviews);
            }
          }
        });
      });

      const reviewsToShowArrayFiltered: any = [];
      reviewsToShowArray.forEach((review: any) => {
        if (review.visible) {
          reviewsToShowArrayFiltered.push(review);
        }
      });

      setReviewsToShow(reviewsToShowArrayFiltered);
    }
  }

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
        {useReviews
          ? reviews?.map((review: any, index: number) => (
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
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-person-icon-download-in-svg-png-gif-file-formats--user-male-young-profile-interface-vol-1-pack-icons-2202553.png?f=webp&w=256"
                      alt="Imagen de usuario"
                    />
                  </div>
                  <div className={styles.textWrapper}>
                    {getStars(review.puntaje)}
                    <h6>{review.nombre}</h6>
                    <p>{review.reseña}</p>
                    <a href="/resenas">Ver más</a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : reviewsToShow?.map((review: any, index: number) => (
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
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-person-icon-download-in-svg-png-gif-file-formats--user-male-young-profile-interface-vol-1-pack-icons-2202553.png?f=webp&w=256"
                      alt="Imagen de usuario"
                    />
                  </div>
                  <div className={styles.textWrapper}>
                    {getStars(review.puntaje)}
                    <h6>{review.nombre}</h6>
                    <p>{review.reseña}</p>
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
