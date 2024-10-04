"use client";
import React, { useState } from "react";
import styles from "./where-find-us.module.css";
import mercadoLibreIcon from "../../../public/images/mercadolibre-icon.svg";

export default function WhereFindUs() {
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
    <div className={styles.whereFindUs}>
      <h2>Dónde encontrarnos</h2>
      <div className={styles.brands}>
        {stores.map((store, index) => (
          <a key={index} href={store.link}>
            <img
              src={store.icon}
              width={66}
              height={66}
              alt="Icono de tienda"
            />
          </a>
        ))}
      </div>
      <a className={styles.link} href="/encuentra-tu-tienda">Encuentra tu tienda</a>
    </div>
  );
}
