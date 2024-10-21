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

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null as any);

  const [products, setProducts] = useState([
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
    {
      title: "Jamón",
      link: "/producto/jamon-serrano",
      image: "https://via.placeholder.com/200x200",
      videos: [
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
        "https://www.youtube.com/watch?v=3v1n6v1Jz1c",
      ],
      reviews: [
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
        [
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 4,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 5,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 3,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 2,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 1,
            image: "https://via.placeholder.com/150x150",
          },
          {
            title: "Anna Cristina Peña",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
            score: 0,
            image: "https://via.placeholder.com/150x150",
          },
        ],
      ],
    },
  ]);

  useEffect(() => {
    console.log(products[0]);
  }, []);

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
                maxWidth: "1064px",
                margin: "0 auto",
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                    opacity: selectedItem === index ? 1 : 0.5,
                  }}
                  onClick={() => {
                    setSelectedItem(index);
                  }}
                >
                  <img
                    src={product.image}
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
              products[selectedItem]?.videos.map((video, index) => (
                <div key={index} className={styles.videoItem}>
                  <iframe src={video}></iframe>
                </div>
              ))}
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
              {products[selectedItem].reviews.map((review, index) => (
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
        )}
      </main>
      <CustomFooter />
    </>
  );
}
