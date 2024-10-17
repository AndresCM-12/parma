"use client";
import CustomFooter from "../../components/footer/custom-footer";
import CustomHeader from "../../components/header/custom-header";
import styles from "./page.module.css";
import { useState } from "react";
import parmaLogo from "../../../public/images/black-logo.webp";
import trailingBlack from "../../../public/images/trail_black.svg";
import WhereFindUs from "../../components/home/where-find-us";
import FeaturedRecipeHorizontal from "../../components/home/featured-recipe-horizontal";
import leftArrow from "../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../public/images/right-arrow-brown.svg";
import filledStar from "../../../public/images/full-star.svg";
import emptyStar from "../../../public/images/empty-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [productDetails, setProductDetails] = useState({
    title: "PECHUGA DE PAVO",
    image: "https://via.placeholder.com/300x300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    details: [
      {
        image: "https://via.placeholder.com/100x100",
        title: "Tiempo de maduración",
        details: "10 meses",
      },
      {
        image: "https://via.placeholder.com/100x100",
        title: "Porciones por empaque",
        details: "por kilo",
      },
    ],
    history:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    relatedProducts: [
      {
        image: "https://via.placeholder.com/300x300",
        title: "PIERNA DE CERDO",
        link: "/producto/pierna-de-cerdo",
        presentation: "Por kilo",
      },
      {
        image: "https://via.placeholder.com/300x300",
        title: "JAMÓN DE PIERNA YORK",
        link: "/producto/jamon-pierna-york",
        presentation: "200g",
      },
      {
        image: "https://via.placeholder.com/300x300",
        title: "pechuga de pavo",
        link: "/producto/jamon-pierna-york",
        presentation: "180g",
      },
    ],
    relatedRecipes: [
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 1,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 2,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 3,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 1,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 2,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 3,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
      {
        link: "/recetas/platillo-de-frutas",
        image: "https://via.placeholder.com/400x300",
        dificulty: 1,
        time: "30 min",
        description:
          "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        title: "Platiillos",
      },
    ],
    reviews: [
      [
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 4,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 5,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 3,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 2,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 1,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 0,
          image: "https://via.placeholder.com/150x150",
        },
      ],
      [
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 4,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 5,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 3,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 2,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 1,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 0,
          image: "https://via.placeholder.com/150x150",
        },
      ],
      [
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 4,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 5,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 3,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 2,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 1,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 0,
          image: "https://via.placeholder.com/150x150",
        },
      ],
      [
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 4,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 5,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 3,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 2,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 1,
          image: "https://via.placeholder.com/150x150",
        },
        {
          title: "Anna Cristina Peña",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          score: 0,
          image: "https://via.placeholder.com/150x150",
        },
      ],
    ],
  });

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.headerWrapper}>
          <img
            className={styles.image}
            src={productDetails.image}
            alt={productDetails.title}
          />
          <div className={styles.rightContainer}>
            <div className={styles.titleWrapper}>
              <h1>{productDetails.title}</h1>
              <img
                src={parmaLogo.src}
                width={200}
                height={60}
                alt="Parma logo"
              />
            </div>

            <p>
              <span>Descripción del producto: </span>
              {productDetails.description}
            </p>

            <div className={styles.detailsWrapper}>
              {productDetails.details.map((detail, index) => (
                <div className={styles.detail} key={index}>
                  <img src={detail.image} alt="ícono del dealle" />
                  <p>
                    <span>{detail.title}: </span>
                    {detail.details}
                  </p>
                </div>
              ))}
            </div>

            <p>
              <span>Historia: </span>
              {productDetails.history}
            </p>
          </div>
        </div>

        <div className={styles.focusWrapper}>
          <h3>PRODUCTOS DE INTERÉS</h3>
          <img src={trailingBlack.src} alt="Imagen decorativa" />
        </div>

        <div className={styles.productsWrapper}>
          {productDetails.relatedProducts.map((product, index) => (
            <div
              className={styles.product}
              key={index}
              onClick={() => (window.location.href = product.link)}
            >
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.presentation}</p>
            </div>
          ))}
        </div>

        <WhereFindUs />

        <FeaturedRecipeHorizontal recipes={productDetails.relatedRecipes} />

        <div className={styles.reviewWrapper}>
          <h5>Las reseñas de nuestros productos</h5>
          <Swiper
            id="products-reviews"
            pagination={{
              clickable: true,
              el: ".swiper-pagination", // Use a valid DOM element here
              type: "bullets",
            }}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={0}
            modules={[Pagination]}
            grabCursor={true}
          >
            {productDetails.reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className={styles.swiperSlide}>
                  {review.map((reviewItem, index) => (
                    <div
                      className={styles.review}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#E8E5E5" : "#DCD7D7",
                      }}
                      key={index}
                    >
                      <img
                        className={styles.image}
                        src={reviewItem.image}
                        alt={reviewItem.title}
                      />
                      <div className={styles.text}>
                        <div className={styles.starWrapper}>
                          {[1, 2, 3, 4, 5].map((star, index) => (
                            <img
                              key={index}
                              src={
                                star <= reviewItem.score
                                  ? filledStar.src
                                  : emptyStar.src
                              }
                              alt="Estrella"
                            />
                          ))}
                        </div>
                        <h6>{reviewItem.title}</h6>
                        <p>{reviewItem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                    document.getElementById("products-reviews") as any
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
                    document.getElementById("products-reviews") as any
                  ).swiper.slideNext();
                }}
              ></img>
            </div>
          </div>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}
