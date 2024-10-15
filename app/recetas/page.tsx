"use client";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import blogCover from "../../public/images/recetas-cover.png";
import { useLayoutEffect, useState } from "react";
import timerIcon from "../../public/images/time-icon.svg";

export default function Home() {
  const [selectedStore, setSelectedStore] = useState("appetizers");
  const [stores, setStores] = useState([
    {
      title: "appetizers",
      name: "APPETIZERS",
      blogs: [
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
      ],
    },
    {
      title: "grill",
      name: "GRILL",
      blogs: [
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
      ],
    },
    {
      title: "preparaciones-gourmet",
      name: "PREPARACIONES GOURMET",
      blogs: [
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
      ],
    },
    {
      title: "maridaje-con-vino",
      name: "MARIDAJE CON VINO",
      blogs: [
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
        {
          title: "TORTA DE JAMÓN SERRANO PARMA® CON BERENJENA",
          description:
            "Lorem  labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
          link: "/recetas/torta-jamon-serrano-berenjena",
          time: "30 Min",
          difficulty: 1,
          backgroundImage: "https://via.placeholder.com/500",
        },
        ,
      ],
    },
  ]);

  useLayoutEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash.length == 0) {
      window.location.hash = selectedStore;
    }

    if (locationHash.length > 0) {
      setSelectedStore(locationHash.replace("#", ""));
    }

    console.log(locationHash);
  }, []);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <section className={styles.blogCover}>
          <h1>RECETAS</h1>
          <img src={blogCover.src} alt="Imagen de fondo" />
          <div className={styles.floatingMenu}>
            {stores.map((store, index) => (
              <p
                key={index}
                style={{
                  opacity: store.title === selectedStore ? 1 : 0.4,
                  fontWeight: store.title === selectedStore ? "500" : "normal",
                }}
                onClick={() => {
                  window.location.hash = store.title;
                  setSelectedStore(store.title);
                }}
              >
                {store.name}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.storesWrapper}>
          {stores
            .find((store) => store.title === selectedStore)
            ?.blogs.map((store, index) => (
              <div
                key={index}
                className={styles.blogItem}
                onClick={() => (window.location.href = store?.link || "")}
              >
                <img
                  src={store?.backgroundImage}
                  alt="Imagen descriptiva de la receta"
                  className={styles.storeIcon}
                />
                <div className={styles.detailsWrapper}>
                  {getDifficulty(store?.difficulty || 1)}
                  <p>
                    {store?.time}
                    <img
                      src={timerIcon.src}
                      width={48}
                      height={48}
                      alt="Ícono de tiempo"
                    />
                  </p>
                </div>
                <div>
                  <h6>{store?.title}</h6>
                  <p>{store?.description}</p>
                </div>
              </div>
            ))}
        </section>
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
