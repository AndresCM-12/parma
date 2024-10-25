"use client";
import styles from "./featured-blog.module.css";
import { BlogItem } from "@/app/utils/constants";

export default function FeaturedBlog({ blogItems }: { blogItems: BlogItem[] }) {
  return (
    <div className={styles.featuredBlogWrapper}>
      <h2>blog</h2>
      <div className={styles.blogItemWrapper}>
        <div className={styles.blogs}>
          {blogItems.map((blog, index) => (
            <div className={styles.blogItem} key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <a href={blog.ctaLink}>{blog.ctaText}</a>
              <img src={blog.img} alt={blog.title} />
            </div>
          ))}
        </div>
        <a className={styles.link} href="/blog">
          Ver más
        </a>
      </div>
    </div>
  );
}
