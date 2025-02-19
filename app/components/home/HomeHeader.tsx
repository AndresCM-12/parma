import React from "react";
import styles from "../../page.module.css";
import parmaWhiteLogo from "../../../public/images/white-logo.webp";

export default function HomeHeader({ homeInfo }: any) {
  return (
    <div className={styles.cover}>
      <img src={homeInfo.bgImage} alt="Imagen cover de parma" />
      <div className={styles.titleWrapper}>
        <h1>{homeInfo.title}</h1>
        <img src={parmaWhiteLogo.src} alt="Logo de parma" />
      </div>
      <p
        style={{
          fontWeight: "200",
        }}
      >
        {homeInfo.description}
      </p>
      <a href={homeInfo.btnLink}>{homeInfo.btnText}</a>
    </div>
  );
}
