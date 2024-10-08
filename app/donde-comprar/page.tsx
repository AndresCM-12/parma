"use client";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import mercadoLibreIcon from "../../public/images/mercadolibre-icon.svg";
import trailing from "../../public/images/trail_black.svg";

import { useState } from "react";

export default function Home() {
  const [stores, setStores] = useState([
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
    {
      link: "https://www.google.com/maps",
      icon: mercadoLibreIcon.src,
    },
  ]);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.titleWrapper}>
          <h1>¿Donde comprar?</h1>
          <img src={trailing.src} alt="trailing" className={styles.trailing} />
        </div>
        <section className={styles.storesWrapper}>
          {stores.map((store, index) => (
            <a
              key={index}
              href={store.link}
              target="_blank"
              rel="noreferrer"
              className={styles.storeLink}
            >
              <img
                src={store.icon}
                alt="store-icon"
                className={styles.storeIcon}
              />
            </a>
          ))}
        </section>
      </main>
      <CustomFooter />
    </>
  );
}
