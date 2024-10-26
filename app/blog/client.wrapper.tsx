"use client";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import blogCover from "../../public/images/blog-cover.webp";
import { useLayoutEffect, useState } from "react";

export default function ClientWrapperBlogs({ details }: any) {
  const [selectedStore, setSelectedStore] = useState("gourmand");
  const [stores, setStores] = useState(details);

  useLayoutEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash.length == 0) {
      window.location.hash = selectedStore;
    }
  }, []);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <section className={styles.blogCover}>
          <h1>BLOG</h1>
          <img src={blogCover.src} alt="Imagen de fondo" />
          <div className={styles.floatingMenu}>
            {stores?.map((store: any, index: number) => (
              <p
                key={index}
                style={{
                  opacity: store.title === selectedStore ? 1 : 0.4,
                  fontWeight: store.title === selectedStore ? "500" : "normal",
                }}
                onClick={() => {
                  window.location.hash = store.title;
                  setSelectedStore(store.title);
                }}
              >
                {store.name}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.storesWrapper}>
          {stores
            ?.find((store: any) => store.title === selectedStore)
            ?.blogs.map((store: any, index: number) => (
              <div key={index} className={styles.blogItem}>
                <img
                  src={store.backgroundImage}
                  alt="store-icon"
                  className={styles.storeIcon}
                />
                <h6>{store.title}</h6>
                <p>{store.description}</p>
                <a href={store.link}>{store.ctaText}</a>
              </div>
            ))}
        </section>
      </main>
      <CustomFooter />
    </>
  );
}
