import React from "react";
import styles from "../../page.module.css";

export default function HomeFooter({ homeInfo }: any) {
  return (
    <div className={styles.maridajeWrapper}>
      <img src={homeInfo.bgImage} alt="Cover de imagen de maridaje" />
      <h2>{homeInfo.title}</h2>
      <a href={homeInfo.btnLink}>{homeInfo.btnText}</a>
    </div>
  );
}
