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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("productos");
  const [selectedProducts, setSelectedProducts] = useState([] as any);
  const [selectedItem, setSelectedItem] = useState(null as any);

  const [products, setProducts] = useState({
    productos: [
      {
        title: "Jamón",
        link: "/producto/jamon-serrano",
        image: "https://via.placeholder.com/200x200",
        drinks: [
          {
            title: "Vino Blanco",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Rosado",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Verde",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Naranja",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Jamón",
        link: "/producto/jamon-serrano",
        image: "https://via.placeholder.com/200x200",
        drinks: [
          {
            title: "Vino Blanco",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Rosado",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Verde",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Naranja",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Jamón",
        link: "/producto/jamon-serrano",
        image: "https://via.placeholder.com/200x200",
        drinks: [
          {
            title: "Vino Blanco",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Rosado",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Verde",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Vino Naranja",
            link: "https://www.google.com",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
    ],
    bebidas: [
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
      {
        title: "Vino Blanco",
        link: "https://www.google.com",
        image: "https://via.placeholder.com/200x200",
        products: [
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
          {
            title: "Jamón",
            link: "/producto/jamon-serrano",
            image: "https://via.placeholder.com/200x200",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    if (window.location.hash == "") {
      window.location.hash = "productos";
    }

    setSelectedCategory(window.location.hash.replace("#", ""));
  }, []);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.headerWrapper}>
          <h1>Descubre tu maridaje</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
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
                maxWidth: "1064px",
                margin: "0 auto",
              }}
            >
              {selectedCategory === "productos"
                ? products.productos.map((product, index) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        width: "200px",
                        height: "200px",
                        cursor: "pointer",
                        opacity: selectedItem === index ? 1 : 0.5,
                      }}
                      onClick={() => {
                        setSelectedProducts(product.drinks);
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
                  ))
                : products.bebidas.map((product, index) => (
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
                <img src={product.image} alt="Producto" />
                <a href={product.link} target="_blank" >{product.title}</a>
              </div>
            ))}
          </div>

        </div>
      </main>
      <CustomFooter />
    </>
  );
}
