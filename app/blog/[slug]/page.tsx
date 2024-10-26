"use client";
import CustomHeader from "../../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../../components/footer/custom-footer";
import blogCover from "../../../public/images/blog-cover.webp";
import { useEffect, useState } from "react";
import { fetchPageDetailInfo } from "@/app/utils/methods";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.split("/")[2];
    const getblogInfo = async () => {
      const response = await fetchPageDetailInfo(path);
      setBlogInfo(response);
    };

    if (blogInfo?.title === undefined) getblogInfo();
  }, []);

  interface BlogInfoInterface {
    title: string;
    type: string;
    date: string;
    info: string[];
  }

  const [blogInfo, setBlogInfo] = useState({} as BlogInfoInterface);

  return (
    <>
      <CustomHeader />
      {blogInfo.title ? (
        <main className={styles.mainWrapper}>
          <section className={styles.blogCover}>
            <h1>{blogInfo.title}</h1>
            <img src={blogCover.src} alt="Imagen de fondo" />
          </section>

          <section className={styles.infoWrapper}>
            <div className={styles.headerWrapper}>
              <h2>{blogInfo.title}</h2>
              <h6>
                {blogInfo.type} | {blogInfo.date}
              </h6>
            </div>
            <div className={styles.textWrapper}>
              {blogInfo.info.map((info, index) => (
                <p key={index}>{info}</p>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div
          style={{
            height: "100vh",
          }}
        ></div>
      )}
      <CustomFooter />
    </>
  );
}
