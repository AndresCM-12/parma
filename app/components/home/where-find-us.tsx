"use client";
import React from "react";
import styles from "./where-find-us.module.css";
import { Store } from "@/app/utils/constants";

export default function WhereFindUs({ stores }: { stores: Store[] }) {
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
      <a className={styles.link} href="/donde-comprar">
        Encuentra tu tienda
      </a>
    </div>
  );
}
