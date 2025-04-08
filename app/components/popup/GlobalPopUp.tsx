"use client";
import { fetchArrayInPost } from "@/app/utils/methods";
import ClientWrapperFooter from "../footer/client-wrapper-footer";
import styles from "./popup.module.css";
import React, { useEffect, useState } from "react";
import { globalPopUp } from "@/app/utils/constants";

export default function GlobalPopUp() {
  const [popUpShowed, setPopUpShowed] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState<any>(null);

  useEffect(() => {
    fetchArrayInPost(globalPopUp).then((res) => {
      if (!res) return;
      console.log("res", res);
      setPopUpData(res);
      const popUpShowedStored = sessionStorage.getItem("popUpShowed");
      if (popUpShowedStored === "true") {
        setPopUpShowed(true);
      } else {
        sessionStorage.setItem("popUpShowed", "false");
        setPopUpShowed(false);
      }

      const timer = setTimeout(() => {
        setShowPopUp(true);
      }, 7000);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    !popUpShowed &&
    showPopUp && (
      <>
        <div
          onClick={() => {
            setPopUpShowed(true);
            sessionStorage.setItem("popUpShowed", "true");
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
          }}
        ></div>

        <div className={styles.rightWrapper}>
          <p className={styles.title}>{popUpData?.title}</p>
          <span
            style={{
              fontSize: "12px",
              marginBottom: "20px",
              display: "block",
            }}
          >
            {popUpData?.description}
          </span>
          <ClientWrapperFooter />
        </div>
      </>
    )
  );
}
