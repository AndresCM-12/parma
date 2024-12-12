"use client";
import { useState } from "react";
import styles from "./featured-recipe-horizontal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import leftArrow from "../../../public/images/left-arrow.svg";
import rightArrow from "../../../public/images/right-arrow.svg";
import timeIcon from "../../../public/images/time-icon.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function FeaturedRecipeHorizontal({ recipes }: any) {
  return (
    <div className={styles.recipeWrapper}>
      <h2>Recetas</h2>

      <div className={styles.swiperWrapper}>
        <Swiper
          id="us-recipes"
          slidesPerView={"auto"}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          modules={[Pagination]}
          grabCursor={true}
        >
          {recipes?.map((item: any, index: number) => (
            <SwiperSlide
              className={styles.slideWrapper}
              style={{
                width: "90%",
                maxWidth: "400px",
                height: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "20px",
                color: "white",
              }}
              key={index}
            >
              <div className={styles.titleWrapper}>
                <div className={styles.infoWrapper}>
                  {getDifficulty(item.dificulty)}
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {item.time}
                    {"  "}
                    <img
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "18px",
                        height: "18px",
                        filter: "brightness(1)",
                      }}
                      src={timeIcon.src}
                      width={18}
                      height={18}
                      alt="Ícono de tiempo"
                    />
                  </h3>
                </div>
              </div>
              <div className={styles.descriptionWrapper}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <img src={item.image ?? item.backgroundImage} alt="Imagen de producto" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className={styles.swiperControl}>
            <img
              width={20}
              src={leftArrow.src}
              onClick={() => {
                (
                  document.getElementById("us-recipes") as any
                ).swiper.slidePrev();
              }}
            ></img>
            <div
              className="swiper-pagination"
              style={{
                bottom: "0px !important",
                position: "relative",
                width: "fit-content",
              }}
            ></div>
            <img
              width={20}
              src={rightArrow.src}
              onClick={() => {
                (
                  document.getElementById("us-recipes") as any
                ).swiper.slideNext();
              }}
            ></img>
          </div>
        </div>

        <a className={styles.link} href="/recetas">
          Ver todo
        </a>
      </div>
    </div>
  );
}

function getDifficulty(difficulty: number) {
  return (
    <div className={styles.difficultyWrapper}>
      <h3>
        Dificultad:{" "}
        {difficulty === 1 ? "Fácil " : difficulty === 2 ? "Media " : "Difícil "}
      </h3>
      {difficulty === 1 ? (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div></div>
          <div></div>
        </div>
      ) : difficulty === 2 ? (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
        </div>
      )}
    </div>
  );
}
