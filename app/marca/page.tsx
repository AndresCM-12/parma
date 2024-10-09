"use client";
import CustomFooter from "../components/footer/custom-footer";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import coverImage from "../../public/images/marca-cover.png";
import titleCoverImage from "../../public/images/marc-title-cover.png";
import parmaLogo from "../../public/images/black-logo.webp";

import { useState } from "react";
export default function Home() {
  const [timeLine, setTimeLine] = useState([
    {
      date: "1865",
      image: "https://via.placeholder.com/320",
      text: "",
    },
    {
      date: "1965",
      image: "",
      text: "Decidimos llegar a México para conquistar nuevos paladares con los sabores únicos que nos caracterizan. Nuestra experiencia nos llevó a ampliar la carta de productos y experiencias sensoriales que teníamos, ofreciendo Jamones y Salchichas. Además de los clásicos madurados que nos distinguen en el mercado internacional.",
    },
    {
      date: "2002",
      image: "https://via.placeholder.com/320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      date: "2008",
      image: "https://via.placeholder.com/320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      date: "Actual",
      image: "https://via.placeholder.com/320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ]);

  const [information, setInformation] = useState([
    {
      logo: "https://via.placeholder.com/86",
      title: "Misión",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
    {
      logo: "https://via.placeholder.com/86",
      title: "Visión",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
  ]);

  const [values, setValues] = useState([
    {
      icon: "https://via.placeholder.com/86",
      title: "Valor 1",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
    {
      icon: "https://via.placeholder.com/86",
      title: "Valor 2",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
    {
      icon: "https://via.placeholder.com/86",
      title: "Valor 3",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
  ]);

  const [process, setProcess] = useState([]);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.coverImage}>
          <img
            className={styles.image}
            src={coverImage.src}
            alt="Imagen de fondo"
          />

          <div className={styles.titleWrapper}>
            <div className={styles.text}>
              <h1>QUIENES SOMOS</h1>
              <p>
                Somos la marca de Grupo Bafar especializada en Madurados y
                Delicatessen con más de 65 años de tradición.
              </p>
              <p>
                Nuestros productos son ideales para quienes desean descubrir
                nuevos sabores y texturas dentro de su cocina. Inspírate y
                conviértete en todo un Food Provoker con todas las posibilidades
                que Parma tiene para ti.
              </p>
            </div>
            <img
              src={titleCoverImage.src}
              alt="Imagen de fondo para el título"
            />
          </div>
        </div>

        {/* <div className={styles.scrollableMarcaWrapper}> */}
          <div className={styles.marcaWrapper}>
            <img
              src={parmaLogo.src}
              width={178}
              alt="Parma logotipo"
              style={{
                margin: "20px auto",
              }}
            />
            {timeLine.map((item, index) =>
              index % 2 === 0 ? (
                <div key={index} className={styles.timeLineItem}>
                  <h6>{item.date}</h6>
                  <div className={styles.divider}>
                    <div className={styles.horizontalDivider}>
                      <div
                        className={styles.horizontalDividerWrapperRight}
                      ></div>
                    </div>
                    <div
                      className={
                        index + 1 == timeLine.length
                          ? styles.verticalDividerLast
                          : styles.verticalDivider
                      }
                    ></div>
                  </div>
                  <div className={styles.image}>
                    <div className={styles.text}>{item.text}</div>
                    {item.image != "" && (
                      <img
                        src={item.image}
                        alt="Imagen de la línea de tiempo"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div key={index} className={styles.timeLineItem}>
                  <div className={styles.image}>
                    <div className={styles.text}>{item.text}</div>
                    {item.image != "" && (
                      <img
                        src={item.image}
                        alt="Imagen de la línea de tiempo"
                      />
                    )}
                  </div>
                  <div className={styles.divider}>
                    <div className={styles.horizontalDivider}>
                      <div
                        className={styles.horizontalDividerWrapperLeft}
                      ></div>
                    </div>
                    <div
                      className={
                        index + 1 == timeLine.length
                          ? styles.verticalDividerLast
                          : styles.verticalDivider
                      }
                    ></div>
                  </div>
                  <h6 className={styles.titleInverted}>{item.date}</h6>
                </div>
              )
            )}
          </div>
        {/* </div> */}
      </main>
      <CustomFooter />
    </>
  );
}
