"use client";
import React from "react";
import styles from "./featured-products.module.css";
import blackTrail from "../../../public/images/trail_black.svg";

export default function FeaturedProducts() {
  const [products, setProducts] = React.useState([
    {
      image: "https://via.placeholder.com/300",
      link: "/productos/salchichas",
    },
    {
      image: "https://via.placeholder.com/300",
      link: "/productos/salchichas",
    },
    {
      image: "https://via.placeholder.com/300",
      link: "/productos/salchichas",
    },
  ]);
  return (
    <div className={styles.featuredProductWrapper}>
      <div className={styles.titleWrapper}>
        <h2>Nuestros productos</h2>
        <img
          style={{
            right: "0px !important",
            bottom: "0px !important",
          }}
          src={blackTrail.src}
          alt="Decoración con el logotipo de parma para el título de la sección"
        />
      </div>
      <div className={styles.products}>
        {products.map((product, index) => (
          <a href={product.link} key={index}>
            <img src={product.image} alt="Imagen de producto" />
          </a>
        ))}
      </div>
      <a href="/productos" className={styles.link}>
        Ver todo
      </a>
    </div>
  );
}
