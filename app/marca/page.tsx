"use client";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import CustomFooter from "../components/footer/custom-footer";
import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import coverImage from "../../public/images/marca-cover.png";
import titleCoverImage from "../../public/images/marc-title-cover.png";
import parmaLogo from "../../public/images/black-logo.webp";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import leftArrow from "../../public/images/left-arrow-red.svg";
import rightArrow from "../../public/images/right-arrow-red.svg";

export default function Home() {
  const [timeLine, setTimeLine] = useState([
    {
      date: "1865",
      image: "https://via.placeholder.com/320x320",
      text: "",
    },
    {
      date: "1965",
      image: "",
      text: "Decidimos llegar a México para conquistar nuevos paladares con los sabores únicos que nos caracterizan. Nuestra experiencia nos llevó a ampliar la carta de productos y experiencias sensoriales que teníamos, ofreciendo Jamones y Salchichas. Además de los clásicos madurados que nos distinguen en el mercado internacional.",
    },
    {
      date: "2002",
      image: "https://via.placeholder.com/320x320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      date: "2008",
      image: "https://via.placeholder.com/320x320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      date: "Actual",
      image: "https://via.placeholder.com/320x320",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ]);

  const [information, setInformation] = useState([
    {
      logo: "https://via.placeholder.com/86x86",
      title: "Misión",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
    {
      logo: "https://via.placeholder.com/86x86",
      title: "Visión",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
  ]);

  const [values, setValues] = useState([
    {
      icon: "https://via.placeholder.com/86x86",
      title: "Valor 1",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
    {
      icon: "https://via.placeholder.com/86x86",
      title: "Valor 2",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
    {
      icon: "https://via.placeholder.com/86x86",
      title: "Valor 3",
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmodd minim veniam, quis.",
    },
  ]);

  const [process, setProcess] = useState([
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Serranos",
      link: "/productos/serranos",
      linkText: "Ver más",
      description:
        "Su preparación está a cargo de Maestros Jamoneros con un expertise inigualable que garantiza cada nota de sabor degustada. Es por ello que su creación es todo un proceso artesanal cuidado en cada paso.",
    },
  ]);

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
                    <div className={styles.horizontalDividerWrapperRight}></div>
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
                    <img src={item.image} alt="Imagen de la línea de tiempo" />
                  )}
                </div>
              </div>
            ) : (
              <div key={index} className={styles.timeLineItem}>
                <div className={styles.image}>
                  <div className={styles.text}>{item.text}</div>
                  {item.image != "" && (
                    <img src={item.image} alt="Imagen de la línea de tiempo" />
                  )}
                </div>
                <div className={styles.divider}>
                  <div className={styles.horizontalDivider}>
                    <div className={styles.horizontalDividerWrapperLeft}></div>
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

        <div className={styles.itemsWrapper}>
          <div className={styles.divider}></div>
          {information.map((item, index) => (
            <div key={index} className={styles.value}>
              <img src={item.logo} alt="Logo de la información" />
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.valuesWrapper}>
          <h5>NUESTROS VALORES</h5>
          <div className={styles.values}>
            {values.map((item, index) => (
              <div key={index} className={styles.value}>
                <img src={item.icon} alt="Icono del valor" />
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.processWrapper}>
          <h5>PROCESOS</h5>

          <div className={styles.swiperWrapper}>
            <Swiper
              id="us-process"
              slidesPerView={"auto"}
              spaceBetween={16}
              pagination={{
                clickable: true,
                el: ".swiper-pagination", // Use a valid DOM element here
                type: "bullets",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={600}
              modules={[Pagination, Autoplay]}
              className={styles.swiper}
            >
              {process.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    height: "auto",
                    maxWidth: "400px",
                    width: "90%",
                  }}
                >
                  <div className={styles.process}>
                    <div className={styles.descriptionWrapper}>
                      <img src={item?.image} alt="Imagen del proceso" />
                      <p>{item?.description}</p>
                    </div>
                    <div className={styles.link}>
                      <h6>{item?.title}</h6>
                      <a href={item?.link}>{item?.linkText}</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div id="process">
              <div className={styles.swiperControl}>
                <img
                  width={20}
                  src={leftArrow.src}
                  onClick={() => {
                    (
                      document.getElementById("us-process") as any
                    ).swiper.slidePrev();
                  }}
                ></img>
                <div
                  className="swiper-pagination"
                  style={{
                    bottom: "0px !important",
                    position: "relative",
                    width: "fit-content",
                  }}
                ></div>
                <img
                  width={20}
                  src={rightArrow.src}
                  onClick={() => {
                    (
                      document.getElementById("us-process") as any
                    ).swiper.slideNext();
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}
