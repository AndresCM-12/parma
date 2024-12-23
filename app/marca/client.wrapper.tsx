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
import { Autoplay, Pagination } from "swiper/modules";
import leftArrow from "../../public/images/left-arrow-red.svg";
import rightArrow from "../../public/images/right-arrow-red.svg";
import kraftBg from "../../public/images/kraft.webp";
import HelpFloatingIcon from "../components/HelpFloatingIcon";

export default function MarcaClientWrapper({
  timeLine,
  information,
  process,
}: any) {
  return (
    <>
      <HelpFloatingIcon />
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.coverImage}>
          <img
            className={styles.image}
            src={coverImage.src}
            alt="Imagen de fondo"
          />

          <div
            className={styles.titleWrapper}
            style={{
              backgroundImage: `url(${kraftBg.src})`,
              backgroundSize: "cover",
            }}
          >
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
          {timeLine?.map((item: any, index: number) =>
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
          {information?.map((item: any, index: number) => (
            <div key={index} className={styles.value}>
              <img src={item.logo} alt="Logo de la información" />
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* <div className={styles.valuesWrapper}>
          <h5>NUESTROS VALORES</h5>
          <div className={styles.values}>
            {values?.map((item: any, index: number) => (
              <div key={index} className={styles.value}>
                <img src={item.icon} alt="Icono del valor" />
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className={styles.processWrapper}>
          <h5
            style={{
              marginTop: "80px",
            }}
          >
            PROCESOS
          </h5>

          <div
            className={styles.swiperWrapper}
            style={{
              backgroundImage: `url(${kraftBg.src})`,
              backgroundSize: "cover",
            }}
          >
            <Swiper
              id="us-process"
              slidesPerView={"auto"}
              spaceBetween={16}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
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
              {process?.map((item: any, index: number) => (
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
