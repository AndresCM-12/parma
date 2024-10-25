"use client";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import productsCover from "../../public/images/products-cover.png";
import trailing from "../../public/images/trail_white.svg";
import longRightArrow from "../../public/images/long-right-arrow.svg";
import { useState } from "react";

export default function ClientProductsWrapper({ items }: any) {
  const [products, setProducts] = useState(items);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.imageCover}>
          <img
            src={productsCover.src}
            className={styles.backgroundImage}
            alt="Imagen de fondo"
          />
          <div className={styles.titleWrapper}>
            <h1>Productos</h1>
            <img src={trailing.src} alt="Logo de parma" />
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>

        <div className={styles.productWrapper}>
          {products?.map((product: any, index: number) => (
            <div className={styles.blogItem} key={index}>
              <img
                src={product.image}
                width={220}
                style={{
                  filter: "brightness(0.8)",
                  objectFit: "cover",
                }}
                alt="Imagen de producto"
              />
              <div className={styles.blogItemContent}>
                <div>
                  <h3>Productos</h3>
                  <h2>{product.title}</h2>
                </div>
                <div className={styles.text}>
                  <img src={longRightArrow.src} alt="Flecha derecha" />
                  <a href={product.link}>Ver más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
