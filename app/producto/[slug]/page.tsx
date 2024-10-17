"use client";

import styles from "./page.module.css";
import CustomFooter from "../../components/footer/custom-footer";
import CustomHeader from "../../components/header/custom-header";
import parmaLogo from "../../../public/images/white-logo.webp";
import filledStar from "../../../public/images/full-star-white.svg";
import emptyStar from "../../../public/images/empty-star-white.svg";
import FeaturedRecipe from "../../components/home/featured-recipe";
import FeaturedReviews from "../../components/home/featured-reviews";
import redBullet from "../../../public/images/red-bullet.svg";

import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [productDetails, setProductDetails] = useState({
    title: "JAMÓN SERRANO",
    image: "https://via.placeholder.com/300x300",
    rate: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    physicalStores: [
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
    ],
    onlineStores: [
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
      {
        icon: "https://via.placeholder.com/100x100",
        link: "https://www.google.com",
      },
    ],
    creation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    bulletPoints: [
      {
        title: "1. Salazón y lavado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        title: "2. Post-salado y secado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        title: "3. Maduración",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
    ],
    presentations: [
      {
        image: "https://via.placeholder.com/200x200",
        title: "PIERNA DE CERDO",
        link: "/producto/pierna-de-cerdo",
        presentation: "Por kilo",
      },
      {
        image: "https://via.placeholder.com/200x200",
        title: "JAMÓN DE PIERNA YORK",
        link: "/producto/jamon-pierna-york",
        presentation: "200g",
      },
      {
        image: "https://via.placeholder.com/200x200",
        title: "pechuga de pavo",
        link: "/producto/jamon-pierna-york",
        presentation: "180g",
      },
    ],
    recipes: [
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
  });

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.bannerWrapper}>
          <div className={styles.starsWrapper}>
            <div className={styles.stars}>
              <p>{productDetails.rate}</p>
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={
                    index + 1 < Math.ceil(productDetails.rate)
                      ? filledStar.src
                      : emptyStar.src
                  }
                  alt="star"
                />
              ))}
            </div>
          </div>
          <img
            className={styles.backgroundImage}
            src={productDetails.image}
            alt="product"
          />
          <div className={styles.divSpacer}></div>
          <div className={styles.rightWrapper}>
            <p className={styles.separatorText}>TE PRESENTAMOS: </p>
            <div className={styles.titleWrapper}>
              <h1>{productDetails.title}</h1>
              <img src={parmaLogo.src} alt="Logo parma" />
            </div>
            <p>{productDetails.description}</p>
            <p className={styles.separatorText}>TIENDAS FÍSICAS: </p>
            <div className={styles.logoWrapper}>
              {productDetails.physicalStores.map((store, index) => (
                <a key={index} href={store.link}>
                  <img src={store.icon} alt="store" />
                </a>
              ))}
            </div>
            <div
              style={{
                height: "12px",
              }}
            ></div>
            <p className={styles.separatorText}>EN LÍNEA: </p>
            <div className={styles.logoWrapper}>
              {productDetails.onlineStores.map((store, index) => (
                <a key={index} href={store.link}>
                  <img src={store.icon} alt="store" />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.creationWrapper}>
            <h2>CREACIÓN</h2>
            <p>{productDetails.creation}</p>
          </div>
        </div>

        <div className={styles.productDetailWrapper}>
          <img
            src={productDetails.image}
            className={styles.image}
            alt={productDetails.title}
          />
          <div className={styles.bulletPoints}>
            {productDetails.bulletPoints.map((bulletPoint, index) => (
              <div className={styles.item} key={index}>
                <img src={redBullet.src} alt="Bulletpoint" />
                <h6>{bulletPoint.title}</h6>
                <p>{bulletPoint.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.presentationWrapper}>
          <h3>PRESENTACIONES</h3>
          <div className={styles.presentationItems}>
            {productDetails.presentations.map((presentation, index) => (
              <a key={index} href={presentation.link}>
                <img
                  src={presentation.image}
                  height={200}
                  width={200}
                  alt="presentation"
                />
                <h4>{presentation.title}</h4>
                <p>{presentation.presentation}</p>
              </a>
            ))}
          </div>
        </div>

        <FeaturedRecipe relatedRecipes={productDetails.recipes} />

        <FeaturedReviews relatedReviews={productDetails.reviews} />
      </main>
      <CustomFooter />
    </>
  );
}
