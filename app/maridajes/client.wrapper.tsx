"use client";
import CustomFooter from "../components/footer/custom-footer";
import CustomHeader from "../components/header/custom-header";
import maridajeCover from "../../public/images/maridaje-home-cover.webp";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import leftArrow from "../../public/images/left-arrow-brown.svg";
import rightArrow from "../../public/images/right-arrow-brown.svg";

import "swiper/css";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default function MaridajeClientWrapper({ items }: any) {
  const [selectedCategory, setSelectedCategory] = useState("productos");
  const [selectedProducts, setSelectedProducts] = useState([] as any);
  const [selectedItem, setSelectedItem] = useState(null as any);

  const [products, setProducts] = useState(items);

  useEffect(() => {
    if (window.location.hash == "") {
      window.location.hash = "productos";
    }

    setSelectedCategory(window.location.hash.replace("#", ""));
  }, []);

  return (
    <>
      <HelpFloatingIcon />
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.headerWrapper}>
          <h1>Descubre tu maridaje</h1>
          <p>
            Marida como un experto: Explora cómo complementar los sabores únicos
            de nuestros productos Parma con bebidas que realzan cada bocado.
            Desde cervezas artesanales que equilibran texturas intensas, vinos
            que armonizan con nuestros madurados y mocktails que añaden frescura
            a tus platillos. Cada maridaje está cuidadosamente pensado para
            resaltar los sabores y ofrecer una experiencia sensorial
            equilibrada. ¡Haz que cada comida sea inolvidable con el maridaje
            perfecto!
          </p>
          <img src={maridajeCover.src} alt="Maridaje imágen de cover" />
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.buttons}>
            <h6
              onClick={() => {
                setSelectedCategory("productos");
                window.location.hash = "productos";
                setSelectedProducts([]);
                setSelectedItem(null);
              }}
              style={{
                opacity: selectedCategory === "productos" ? 1 : 0.5,
              }}
            >
              ESCOGE TU PRODUCTO
            </h6>
            <h6
              onClick={() => {
                setSelectedCategory("bebidas");
                window.location.hash = "bebidas";
                setSelectedProducts([]);
                setSelectedItem(null);
              }}
              style={{
                opacity: selectedCategory === "bebidas" ? 1 : 0.5,
              }}
            >
              ESCOGE TU BEBIDA
            </h6>
          </div>

          <div className={styles.swiperWrapper}>
            <div
              className={styles.arrow}
              onClick={() => {
                const swiperElement = document.querySelector(
                  "#maridaje-products"
                ) as any;
                swiperElement.swiper.slidePrev();
              }}
            >
              <img src={leftArrow.src} alt="Flecha para avanzar" />
            </div>

            <Swiper
              id="maridaje-products"
              spaceBetween={16}
              slidesPerView={"auto"}
              className={styles.swiper}
              style={{
                maxWidth: "864px",
                margin: "0 auto",
              }}
            >
              {selectedCategory === "productos"
                ? products.productos?.map((product: any, index: number) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        width: "200px",
                      }}
                      onClick={() => {
                        setSelectedProducts(product.drinks);
                        setSelectedItem(index);
                      }}
                    >
                      <img
                        style={{
                          width: "200px",
                          height: "200px",
                          cursor: "pointer",
                          opacity: selectedItem === index ? 1 : 0.5,
                        }}
                        src={product.image}
                        width={200}
                        height={200}
                        alt="Imagen del producto"
                      />
                    </SwiperSlide>
                  ))
                : products.bebidas.map((product: any, index: number) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        width: "200px",
                        height: "200px",
                        cursor: "pointer",
                        opacity: selectedItem === index ? 1 : 0.5,
                      }}
                      onClick={() => {
                        setSelectedProducts(product.products);
                        setSelectedItem(index);
                      }}
                    >
                      <img
                        src={product.image}
                        width={200}
                        height={200}
                        alt="Imagen del producto"
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>

            <div
              className={styles.arrow}
              onClick={() => {
                const swiperElement = document.querySelector(
                  "#maridaje-products"
                ) as any;
                swiperElement.swiper.slideNext();
              }}
            >
              <img src={rightArrow.src} alt="Flecha para avanzar" />
            </div>
          </div>

          <div className={styles.matchesWrapper}>
            {selectedProducts.map((product: any, index: number) => (
              <div className={styles.product} key={index}>
                <img width={300} height={300} src={product.image} alt="Producto" />
                <a href={product.link} target="_blank">
                  {product.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}
