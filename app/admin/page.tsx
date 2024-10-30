"use client";

import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Mosaic } from "react-loading-indicators";
import AdminDashboard from "./components/dashboard";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const router = useRouter();
  const [userIsValid, setUserIsValid] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        setUserIsValid(false);
        router.replace("/admin/sign-in");
        return;
      }

      setUserIsValid(true);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {!userIsValid ? (
        <div className={styles.loading}>
          <Mosaic color="#0f0f0f" size="medium" text="" textColor="" />
        </div>
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}
