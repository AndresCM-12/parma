// app/signup/page.tsx
"use client";

import { useState } from "react";
import styles from "./page.module.css";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  // Expresiones regulares para validaciones
  const NAME_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateField = (name: keyof FormData, value: string) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          errorMessage = "El nombre es requerido";
        } else if (!NAME_REGEX.test(value.trim())) {
          errorMessage =
            "El nombre solo debe contener letras y espacios (2-50 caracteres)";
        }
        break;

      case "email":
        if (!value.trim()) {
          errorMessage = "El correo electrónico es requerido";
        } else if (!EMAIL_REGEX.test(value.trim())) {
          errorMessage = "Ingresa un correo electrónico válido";
        }
        break;

      case "password":
        if (!value) {
          errorMessage = "La contraseña es requerida";
        } else if (!PASSWORD_REGEX.test(value)) {
          errorMessage =
            "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
        }
        break;

      case "confirmPassword":
        if (formData.password && !value) {
          errorMessage = "Confirma tu contraseña";
        } else if (value && value !== formData.password) {
          errorMessage = "Las contraseñas no coinciden";
        }
        break;
    }

    return errorMessage;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    // Actualizar el valor del campo
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Si el campo ha sido tocado, validar y actualizar errores
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));

      // Si es el campo password, también validar confirmPassword
      if (fieldName === "password" && touched.confirmPassword) {
        const confirmError = validateField(
          "confirmPassword",
          formData.confirmPassword
        );
        setErrors((prev) => ({
          ...prev,
          confirmPassword: confirmError,
        }));
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    // Marcar el campo como tocado
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    // Validar el campo
    const error = validateField(fieldName, value);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    // Validar todos los campos
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword
      ),
    };

    setErrors(newErrors);

    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      console.log("Formulario válido:", formData);

      try {
        const res = await createUserWithEmailAndPassword(
          formData.email,
          formData.password
        );
        console.log("Usuario creado:", res);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTouched({
          name: false,
          email: false,
          password: false,
          confirmPassword: false,
        });
        setErrors({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error al crear el usuario:", error);
      }
      // Aquí iría la lógica de envío del formulario
    } else {
      console.log("El formulario contiene errores");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h1 className={styles.title}>Crear Cuenta</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${
                touched.name && errors.name ? styles.inputError : ""
              }`}
              placeholder="Tu nombre completo"
              autoComplete="name"
            />
            {touched.name && errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>

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
              onBlur={handleBlur}
              className={`${styles.input} ${
                touched.email && errors.email ? styles.inputError : ""
              }`}
              placeholder="ejemplo@correo.com"
              autoComplete="email"
            />
            {touched.email && errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
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
              onBlur={handleBlur}
              className={`${styles.input} ${
                touched.password && errors.password ? styles.inputError : ""
              }`}
              placeholder="Tu contraseña"
              autoComplete="new-password"
            />
            {touched.password && errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${
                touched.confirmPassword && errors.confirmPassword
                  ? styles.inputError
                  : ""
              }`}
              placeholder="Confirma tu contraseña"
              autoComplete="new-password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <span className={styles.error}>{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className={styles.button}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
