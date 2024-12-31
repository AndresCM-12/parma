"use client";
import React from "react";
import styles from "./CreateReview.module.css";
import swiperStyles from "../../productos/[slug]/[slugtwo]/page.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Timestamp,
  collection,
  doc,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../firebase/config";
import leftArrow from "../../../public/images/left-arrow-brown.svg";
import rightArrow from "../../../public/images/right-arrow-brown.svg";
import filledStar from "../../../public/images/full-star.svg";
import emptyStar from "../../../public/images/empty-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function CreateReview() {
  const [reviewDetails, setReviewDetails] = React.useState() as any;
  const [reviewsToShow, setReviewsToShow] = React.useState() as any;
  const [sendingloading, setSendingLoading] = React.useState(true);
  const [url, setUrl] = React.useState("");
  const [mainUrl, setMainUrl] = React.useState("");

  React.useEffect(() => {
    const currentUrl = window.location.href;
    const urlLength = currentUrl.split("/").length;
    setMainUrl(currentUrl.split("/")[urlLength - 2]);
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
    const selectedDoc = reviewsData?.find((doc) => doc.id === mainUrl);
    const data = selectedDoc?.data();
    setReviewDetails(data);
    if (!loading) {
      validateIfEntryExists(data);
      prepareDataForShowReviews(data);
    }
  }

  function validateIfEntryExists(data: any) {
    try {
      const selectedProduct = data[url];

      if (selectedProduct.reviews === undefined) {
        const ref = doc(getFirestore(app), "reviews", mainUrl);
        updateDoc(ref, {
          [url]: {
            reviews: [],
          },
        });

        //We need to update the object with the new data
        setReviewDetails({
          ...reviewDetails,
          [url]: {
            reviews: [],
          },
        });
      }
    } catch (error) {
      const ref = doc(getFirestore(app), "reviews", mainUrl);
      updateDoc(ref, {
        [url]: {
          reviews: [],
        },
      });

      //We need to update the object with the new data
      setReviewDetails({
        ...reviewDetails,
        [url]: {
          reviews: [],
        },
      });
    }
  }

  function prepareDataForShowReviews(data: any) {
    const reviewsData = data[url];

    let reviewsToShow = [];
    let tempArray = [] as any;

    const visibleReviews = reviewsData?.reviews.filter(
      (review: any) => review.visible === true
    );

    visibleReviews.forEach((review: any, index: number) => {
      tempArray.push(review);
      if (index % 6 === 5) {
        reviewsToShow.push(tempArray);
        tempArray = [];
      }
    });

    if (tempArray.length > 0) {
      reviewsToShow.push(tempArray);
    }

    setReviewsToShow(reviewsToShow);
  }

  async function createReview() {
    setSendingLoading(true);
    const email = document.getElementById("email") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const rate = document.getElementById("rate") as HTMLInputElement;
    const review = document.getElementById("review") as HTMLInputElement;
    const visible = false;
    const fecha = Timestamp.now();

    const newReview = {
      correo: email.value,
      nombre: name.value,
      puntaje: rate.value,
      reseña: review.value,
      visible: visible,
      fecha: fecha,
    };

    const selectedProduct = reviewDetails[url];

    const newReviews = [
      ...selectedProduct.reviews,
      {
        correo: email.value,
        nombre: name.value,
        puntaje: rate.value,
        reseña: review.value,
        visible: visible,
        fecha: fecha,
      },
    ];

    const ref = doc(getFirestore(app), "reviews", mainUrl);
    await updateDoc(ref, {
      [getUrl()]: {
        reviews: newReviews,
      },
    });

    email.value = "";
    name.value = "";
    rate.value = "";
    review.value = "";

    initData();
    setSendingLoading(false);

    alert(
      "Reseña enviada correctamente, espera a que sea aprobada por algún administrador"
    );
  }

  function getUrl(): string {
    return url;
  }

  return (
    <>
      <div className={swiperStyles.reviewWrapper}>
        <h5>Las reseñas de nuestro producto</h5>
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
          {reviewsToShow?.map((review: any, index: number) => (
            <SwiperSlide key={index}>
              <div className={swiperStyles.swiperSlide}>
                {review.map((reviewItem: any, index: number) => (
                  <div
                    className={swiperStyles.review}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#E8E5E5" : "#DCD7D7",
                    }}
                    key={index}
                  >
                    <img
                      style={{
                        objectFit: "contain",
                      }}
                      className={swiperStyles.image}
                      src="https://cdn.iconscout.com/icon/free/png-256/free-person-icon-download-in-svg-png-gif-file-formats--user-male-young-profile-interface-vol-1-pack-icons-2202553.png?f=webp&w=256"
                      alt={reviewItem.title}
                    />
                    <div className={swiperStyles.text}>
                      <div className={swiperStyles.starWrapper}>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <img
                            key={index}
                            src={
                              star <= Number(reviewItem.puntaje)
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
          ))}
        </Swiper>

        {reviewsToShow?.length > 6 && (
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
        )}
      </div>

      <div className={styles.wrapper}>
        <h3>CREAR RESEÑA</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createReview();
          }}
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            type="number"
            id="rate"
            name="rate"
            placeholder="Puntaje"
            required
          />
          <textarea
            id="review"
            name="review"
            placeholder="Reseña"
            required
            maxLength={200}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
