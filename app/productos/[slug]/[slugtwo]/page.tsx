"use client";
import CustomFooter from "../../../components/footer/custom-footer";
import CustomHeader from "../../../components/header/custom-header";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import parmaLogo from "../../../../public/images/black-logo.webp";
import trailingBlack from "../../../../public/images/trail_black.svg";
import WhereFindUs from "../../../components/home/where-find-us";
import FeaturedRecipeHorizontal from "../../../components/home/featured-recipe-horizontal";
import leftArrow from "../../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../../public/images/right-arrow-brown.svg";
import filledStar from "../../../../public/images/full-star.svg";
import emptyStar from "../../../../public/images/empty-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { fetchArrayInPost, fetchPageDetailInfo } from "@/app/utils/methods";
import { whereFindUs } from "@/app/utils/constants";
import HelpFloatingIcon from "@/app/components/HelpFloatingIcon";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.split("/")[3];
    const getProductsInfo = async () => {
      const response = await fetchPageDetailInfo(path);
      const items = await fetchArrayInPost(whereFindUs);
      setProductDetails(response);
      setWhereFindUs(items);
    };

    if (productDetails?.title === undefined) getProductsInfo();
  }, []);

  interface ProductDetailsInterface {
    title: string;
    image: string;
    description: string;
    details: {
      image: string;
      title: string;
      details: string;
    }[];
    history: string;
    relatedProducts: {
      image: string;
      title: string;
      link: string;
      presentation: string;
    }[];
    relatedRecipes: {
      link: string;
      image: string;
      dificulty: number;
      time: string;
      description: string;
      title: string;
    }[];
    reviews: {
      title: string;
      description: string;
      score: number;
      image: string;
    }[][];
  }

  const [productDetails, setProductDetails] = useState(
    {} as ProductDetailsInterface
  );
  const [whereFindUsItems, setWhereFindUs] = useState([]);
  return (
    <>
      <HelpFloatingIcon />
      <CustomHeader />
      {productDetails.description ? (
        <main className={styles.mainWrapper}>
          <div className={styles.headerWrapper}>
            <img
              className={styles.image}
              src={productDetails.image}
              alt={productDetails.title}
            />
            <div className={styles.rightContainer}>
              <div className={styles.titleWrapper}>
                <h1>{productDetails.title}</h1>
                <img
                  src={parmaLogo.src}
                  width={200}
                  height={60}
                  alt="Parma logo"
                />
              </div>

              {productDetails.description && (
                <p>
                  <span>Descripción del producto: </span>
                  {productDetails.description}
                </p>
              )}

              {productDetails.details && (
                <div className={styles.detailsWrapper}>
                  {productDetails.details.map((detail, index) => (
                    <div className={styles.detail} key={index}>
                      <img src={detail.image} alt="ícono del dealle" />
                      <p>
                        <span>{detail.title}: </span>
                        {detail.details}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {productDetails.history && (
                <p>
                  <span>Historia: </span>
                  {productDetails.history}
                </p>
              )}
            </div>
          </div>

          <div className={styles.focusWrapper}>
            <h3>PRODUCTOS DE INTERÉS</h3>
            <img src={trailingBlack.src} alt="Imagen decorativa" />
          </div>

          <div className={styles.productsWrapper}>
            {productDetails.relatedProducts.map((product, index) => (
              <div
                className={styles.product}
                key={index}
                onClick={() => {
                  //Remove the last link and add the new one
                  window.location.pathname =
                    window.location.pathname.split("/").slice(0, -1).join("/") +
                    "/" +
                    product.link.split("/")[2];
                }}
              >
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.presentation}</p>
              </div>
            ))}
          </div>

          <WhereFindUs stores={whereFindUsItems} />

          <FeaturedRecipeHorizontal recipes={productDetails.relatedRecipes} />

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
              {productDetails.reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.swiperSlide}>
                    {review.map((reviewItem, index) => (
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
                          src={reviewItem.image}
                          alt={reviewItem.title}
                        />
                        <div className={styles.text}>
                          <div className={styles.starWrapper}>
                            {[1, 2, 3, 4, 5].map((star, index) => (
                              <img
                                key={index}
                                src={
                                  star <= reviewItem.score
                                    ? filledStar.src
                                    : emptyStar.src
                                }
                                alt="Estrella"
                              />
                            ))}
                          </div>
                          <h6>{reviewItem.title}</h6>
                          <p>{reviewItem.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
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
        </main>
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
      <CustomFooter />
    </>
  );
}
