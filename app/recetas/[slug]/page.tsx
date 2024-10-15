"use client";
import CustomHeader from "../../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../../components/footer/custom-footer";
import { useState } from "react";
import FeaturedRecipeHorizontal from "@/app/components/home/featured-recipe-horizontal";

export default function Home() {
  const [productDetail, setProductDetail] = useState({
    name: "Wrap de pechuga de pavo",
    image: "https://via.placeholder.com/500",
    difficulty: 2,
    time: "30 min",
    title: "Lorem impsum",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
    video: "https://www.youtube.com/embed/QH7lu3-9h7o?si=Kyd8OKO4N5e4xxWa",
  });

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <section className={styles.headerWrapper}>
          <div className={styles.leftContainer}>
            <img src={productDetail.image} alt="Imagen de la receta" />
            <h1>
              {productDetail.name}
              {getDifficulty(productDetail.difficulty)}
              <p>{productDetail.time}</p>
            </h1>
          </div>
          <div className={styles.rightContainer}>
            <h2>{productDetail.title}</h2>
            {productDetail.descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </section>

        <section className={styles.videoWrapper}>
          <iframe
            src={productDetail.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </section>
        <FeaturedRecipeHorizontal />
      </main>
      <CustomFooter />
    </>
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
