"use client";
import CustomFooter from "../components/footer/custom-footer";
import CustomHeader from "../components/header/custom-header";
import reviewCover from "../../public/images/review-cover.png";
import filledStar from "../../public/images/full-star.svg";
import emptyStar from "../../public/images/empty-star.svg";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import leftArrow from "../../public/images/left-arrow-brown.svg";
import rightArrow from "../../public/images/right-arrow-brown.svg";

import "swiper/css";
import { Pagination } from "swiper/modules";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore, query } from "firebase/firestore";
import { app } from "../firebase/config";

export default function ClientReviewsWrapper({ items }: any) {
  const [selectedItem, setSelectedItem] = useState(null as any);

  const [products, setProducts] = useState(items);

  const [reviewsToShow, setReviewsToShow] = useState() as any;

  const [snapshot, loading, error] = useCollection(
    query(collection(getFirestore(app), "reviews"))
  );

  useEffect(() => {
    if (reviewsToShow === undefined) {
      initData();
    }
  });

  function initData() {
    const reviewsData = snapshot?.docs;

    if (!loading) {
      const reviewsObject: Record<string, any> = {};

      reviewsData?.forEach((doc) => {
        const review = doc.data();
        Object.keys(review).forEach((key) => {
          if (!reviewsObject[key]) {
            reviewsObject[key] = { reviews: [] };
          }

          const existingReviews = reviewsObject[key].reviews.flat();
          const newReviews = (review[key]?.reviews || []).filter(
            (r: any) => r.visible === true
          );
          const allReviews = [...existingReviews, ...newReviews];

          reviewsObject[key].reviews = chunkArray(allReviews, 6);
        });
      });

      setReviewsToShow(reviewsObject);
    }
  }

  function chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.coverWrapper}>
          <h1>REVIEWS</h1>
          <img src={reviewCover.src} alt="Reseñas" />
        </div>

        <div className={styles.productsWrapper}>
          <div className={styles.swiperWrapper}>
            <div
              className={styles.arrow}
              onClick={() => {
                const swiperElement = document.querySelector(
                  "#maridaje-products"
                ) as any;
                swiperElement.swiper.slidePrev();
              }}
            >
              <img src={leftArrow.src} alt="Flecha para avanzar" />
            </div>

            <Swiper
              id="maridaje-products"
              spaceBetween={16}
              slidesPerView={"auto"}
              className={styles.swiper}
              style={{
                maxWidth: "864px",
                margin: "0 auto",
              }}
            >
              {products.map((product: any, index: number) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "200px",
                  }}
                  onClick={() => {
                    setSelectedItem(index);
                  }}
                >
                  <img
                    src={product.image}
                    style={{
                      width: "200px",
                      height: "200px",
                      cursor: "pointer",
                      opacity: selectedItem === index ? 1 : 0.5,
                    }}
                    width={200}
                    height={200}
                    alt="Imagen del producto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className={styles.arrow}
              onClick={() => {
                const swiperElement = document.querySelector(
                  "#maridaje-products"
                ) as any;
                swiperElement.swiper.slideNext();
              }}
            >
              <img src={rightArrow.src} alt="Flecha para avanzar" />
            </div>
          </div>

          <div className={styles.videoWrapper}>
            {selectedItem != null &&
              products[selectedItem]?.videos.map(
                (video: any, index: number) => (
                  <div key={index} className={styles.videoItem}>
                    <iframe src={video}></iframe>
                  </div>
                )
              )}
          </div>
        </div>

        {selectedItem != null && (
          <div className={styles.reviewWrapper}>
            <h5>Las reseñas de nuestros productos</h5>
            <Swiper
              id="products-reviews"
              pagination={{
                clickable: true,
                el: ".swiper-pagination", // Use a valid DOM element here
                type: "bullets",
              }}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={0}
              modules={[Pagination]}
              grabCursor={true}
            >
              {reviewsToShow[items[selectedItem].firebaseID].reviews.map(
                (review: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className={styles.swiperSlide}>
                      {review.map((reviewItem: any, index: number) => (
                        <div
                          className={styles.review}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#E8E5E5" : "#DCD7D7",
                          }}
                          key={index}
                        >
                          <img
                            className={styles.image}
                            src="https://cdn.iconscout.com/icon/free/png-256/free-person-icon-download-in-svg-png-gif-file-formats--user-male-young-profile-interface-vol-1-pack-icons-2202553.png?f=webp&w=256"
                            alt={reviewItem.title}
                          />
                          <div className={styles.text}>
                            <div className={styles.starWrapper}>
                              {[1, 2, 3, 4, 5].map((star, index) => (
                                <img
                                  key={index}
                                  src={
                                    star <= reviewItem.puntaje
                                      ? filledStar.src
                                      : emptyStar.src
                                  }
                                  alt="Estrella"
                                />
                              ))}
                            </div>
                            <h6>{reviewItem.nombre}</h6>
                            <p>{reviewItem.reseña}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            <div>
              <div className={styles.swiperControl}>
                <img
                  width={20}
                  src={leftArrow.src}
                  onClick={() => {
                    (
                      document.getElementById("products-reviews") as any
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
                      document.getElementById("products-reviews") as any
                    ).swiper.slideNext();
                  }}
                ></img>
              </div>
            </div>
          </div>
        )}
      </main>
      <CustomFooter />
    </>
  );
}
