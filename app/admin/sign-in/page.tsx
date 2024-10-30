// app/login/page.tsx
"use client";

import { useState } from "react";
import styles from "./page.module.css";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (!res) {
        setError("User not found");
        throw new Error("User not found");
      }

      setFormData({
        email: "",
        password: "",
      });

      // Redirigir al usuario a la página de inicio
      router.replace("/admin");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="ejemplo@correo.com"
              required
              style={{
                border: error ? "1px solid red" : "1px solid #ccc",
              }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Tu contraseña"
              required
              style={{
                border: error ? "1px solid red" : "1px solid #ccc",
              }}
            />
          </div>

          <button type="submit" className={styles.button}>
            Ingresar
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
