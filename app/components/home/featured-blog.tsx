"use client";

import { useState } from "react";
import styles from "./featured-blog.module.css";
import featuredBlogBg from "../../../public/images/featured-blog-bg.webp";

export default function FeaturedBlog() {
  const [blogItems, setBlogItems] = useState([
    {
      title: "Estilo de vida",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      ctaLink: "blog/estilo-de-vida",
      ctaText: "Leer más",
      img: featuredBlogBg.src,
    },
    {
      title: "Maridajes y catas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      ctaLink: "blog/maridajes-y-catas",
      ctaText: "Leer más",
      img: featuredBlogBg.src,
    },
    {
      title: "Datos curiosos",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      ctaLink: "blog/datos-curiosos",
      ctaText: "Leer más",
      img: featuredBlogBg.src,
    },
  ]);

  return (
    <div className={styles.featuredBlogWrapper}>
      <h2>blog</h2>
      <div className={styles.blogItemWrapper}>
        <div className={styles.blogs}>
          {blogItems.map((blog, index) => (
            <div
              className={styles.blogItem}
              key={index}
              style={{
                backgroundImage: `url(${blog.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <a href={blog.ctaLink}>{blog.ctaText}</a>
            </div>
          ))}
        </div>
        <a className={styles.link} href="/blog">Ver más</a>
      </div>
    </div>
  );
}
