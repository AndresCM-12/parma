"use client";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import productsCover from "../../public/images/products-cover.png";
import trailing from "../../public/images/trail_white.svg";
import longRightArrow from "../../public/images/long-right-arrow.svg";
import { useState } from "react";
import CustomFooter from "../components/footer/custom-footer";

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
            <h1>Descubre la excelencia detrás de cada producto Parma</h1>
            <img src={trailing.src} alt="Logo de parma" />
          </div>
          <p>
            Una selección única de madurados y delicatessen que elevan cualquier
            experiencia culinaria. Desde jamones, hasta chorizos y quesos de
            calidad superior, nuestros productos son creados para inspirar a los
            amantes de la gastronomía a explorar sabores auténticos y texturas
            inigualables. Perfectos para deleitar tus sentidos, transformar tus
            recetas y compartir momentos inolvidables.
            <br />
            ¡Explora nuestra gama y lleva lo mejor de Parma a tu mesa!
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
      <CustomFooter />
    </>
  );
}
