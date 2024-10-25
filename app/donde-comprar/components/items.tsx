"use client";
import React from "react";
import styles from "../page.module.css";

export default function ItemsWhereToBuy({ stores }: any) {
  return (
    <section className={styles.storesWrapper}>
      {stores.map((store: any, index: number) => (
        <a
          key={index}
          href={store.link}
          target="_blank"
          rel="noreferrer"
          className={styles.storeLink}
        >
          <img src={store.icon} alt="store-icon" className={styles.storeIcon} />
        </a>
      ))}
    </section>
  );
}
