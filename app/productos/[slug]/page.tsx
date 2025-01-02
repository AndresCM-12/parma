"use client";

import styles from "./page.module.css";
import CustomFooter from "../../components/footer/custom-footer";
import CustomHeader from "../../components/header/custom-header";
import parmaLogo from "../../../public/images/white-logo.webp";
import filledStar from "../../../public/images/full-star-white.svg";
import emptyStar from "../../../public/images/empty-star-white.svg";
import FeaturedRecipe from "../../components/home/featured-recipe";
import FeaturedReviews from "../../components/home/featured-reviews";
import redBullet from "../../../public/images/red-bullet.svg";
import kraftBg from "../../../public/images/kraft.webp";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { RecipeInterface, Review } from "@/app/utils/constants";
import { fetchPageDetailInfo } from "@/app/utils/methods";
import HelpFloatingIcon from "@/app/components/HelpFloatingIcon";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore, query } from "firebase/firestore";
import { app } from "@/app/firebase/config";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.split("/")[2];
    const getProductsInfo = async () => {
      const response = await fetchPageDetailInfo(path);
      setProductDetails(response);
    };

    if (productDetails?.title === undefined) getProductsInfo();
  }, []);

  //Use effect to get all reviews
  const [reviewDetails, setReviewDetails] = useState() as any;
  const [url, setUrl] = useState("");
  const [reviewsToShow, setReviewsToShow] = useState() as any;
  const [reviewsScore, setReviewsScore] = useState() as any;

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlLength = currentUrl.split("/").length;
    setUrl(currentUrl.split("/")[urlLength - 1]);

    if (reviewDetails === undefined) {
      initData();
    }
  });

  const [snapshot, loading, error] = useCollection(
    query(collection(getFirestore(app), "reviews"))
  );

  function initData() {
    const reviewsData = snapshot?.docs;
    const selectedDoc = reviewsData?.find((doc) => doc.id === url);
    const data = selectedDoc?.data();
    setReviewDetails(data);
    if (!loading) {
      let reviewsToShow: any[] = [];
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          reviewsToShow = [...reviewsToShow, ...element.reviews];
        }
      }

      reviewsToShow = reviewsToShow.filter((review: any) => review.visible);

      setReviewsToShow(reviewsToShow);

      try {
        let totalScore = 0;
        let totalReviews = 0;
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            element.reviews.forEach((review: any) => {
              if (!review.visible) return;
              totalScore += Number(review.puntaje);
              totalReviews++;
            });
          }
        }
        setReviewsScore((totalScore / totalReviews).toFixed(2));
      } catch (error) {
        setReviewsScore(0);
      }
    }
  }

  interface ProductDetailsInterface {
    title: string;
    image: string;
    secondImage: string;
    rate: number;
    description: string;
    physicalStores: {
      icon: string;
      link: string;
    }[];
    onlineStores: {
      icon: string;
      link: string;
    }[];
    creation: string;
    bulletPoints: {
      title: string;
      description: string;
    }[];
    presentations: {
      image: string;
      title: string;
      link: string;
      presentation: string;
    }[];
    recipes: RecipeInterface[];
    reviews: Review[];
  }

  const [productDetails, setProductDetails] = useState(
    {} as ProductDetailsInterface
  );

  return (
    <>
      <HelpFloatingIcon />
      <CustomHeader />
      {productDetails.title ? (
        <main className={styles.mainWrapper}>
          <div className={styles.bannerWrapper}>
            {reviewsToShow?.length > 0 && !loading && (
              <div className={styles.starsWrapper}>
                <div className={styles.stars}>
                  <p>{reviewsScore}</p>
                  {Array.from({ length: 5 }, (_, index) => (
                    <img
                      key={index}
                      src={
                        index < Math.ceil(reviewsScore)
                          ? filledStar.src
                          : emptyStar.src
                      }
                      alt="star"
                    />
                  ))}
                </div>
              </div>
            )}
            <img
              className={styles.backgroundImage}
              src={productDetails.image}
              alt="product"
            />
            <div className={styles.divSpacer}></div>
            <div className={styles.rightWrapper}>
              <p className={styles.separatorText}>TE PRESENTAMOS: </p>
              <div className={styles.titleWrapper}>
                <h1>{productDetails.title}</h1>
                <img src={parmaLogo.src} alt="Logo parma" />
              </div>
              <p>{productDetails.description}</p>
              <p className={styles.separatorText}>TIENDAS FÍSICAS: </p>
              <div className={styles.logoWrapper}>
                {productDetails.physicalStores?.map((store, index) => (
                  <a key={index} href={store.link}>
                    <img src={store.icon} alt="store" />
                  </a>
                ))}
              </div>
              <div
                style={{
                  height: "12px",
                }}
              ></div>
              <p className={styles.separatorText}>EN LÍNEA: </p>
              <div
                className={styles.logoWrapper}
                style={{
                  marginBottom: "20px",
                }}
              >
                {productDetails.onlineStores?.map((store, index) => (
                  <a key={index} href={store.link}>
                    <img src={store.icon} alt="store" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className={styles.creationWrapper}
              style={{
                backgroundImage: `url(${kraftBg.src})`,
                backgroundSize: "cover",
              }}
            >
              <h2>CREACIÓN</h2>
              <p>{productDetails.creation}</p>
            </div>
          </div>

          <div className={styles.productDetailWrapper}>
            <img
              src={productDetails.secondImage}
              className={styles.image}
              alt={productDetails.title}
            />
            <div className={styles.bulletPoints}>
              {productDetails.bulletPoints?.map((bulletPoint, index) => (
                <div className={styles.item} key={index}>
                  <img src={redBullet.src} alt="Bulletpoint" />
                  <h6>{bulletPoint.title}</h6>
                  <p>{bulletPoint.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.presentationWrapper}>
            <h3
              style={{
                backgroundImage: `url(${kraftBg.src})`,
                backgroundSize: "cover",
              }}
            >
              PRESENTACIONES
            </h3>
            <div className={styles.presentationItems}>
              {productDetails.presentations?.map((presentation, index) => (
                <a
                  key={index}
                  href={
                    window.location.pathname +
                    "/" +
                    presentation.link.split("/")[2]
                  }
                >
                  <img
                    src={presentation.image}
                    height={200}
                    width={200}
                    alt="presentation"
                  />
                  <h4>{presentation.title}</h4>
                  <p>{presentation.presentation}</p>
                </a>
              ))}
            </div>
          </div>

          <FeaturedRecipe recipes={productDetails.recipes} />

          {reviewsToShow?.length > 0 && (
            <FeaturedReviews reviews={reviewsToShow} useReviews={true} />
          )}
        </main>
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
      <CustomFooter />
    </>
  );
}
