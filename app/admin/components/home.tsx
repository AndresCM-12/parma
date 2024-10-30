import React from "react";
import styles from "./dashboard.module.css";

export default function HomeAdmin() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>¿Qué puedes hacer aquí?</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Responder Preguntas</h3>
              <p className={styles.infoDescription}>
                Accede a todas las preguntas pendientes de los usuarios y
                proporciona respuestas detalladas y útiles.
              </p>
            </div>

            {/* <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Modificar Preguntas</h3>
              <p className={styles.infoDescription}>
                Edita y actualiza las preguntas existentes para mantener la
                información moderada.
              </p>
            </div> */}

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Gestionar Contenido</h3>
              <p className={styles.infoDescription}>
                Organiza y modera el contenido del foro para mantener una
                comunidad productiva y respetuosa.
              </p>
            </div>
          </div>

          <button
            className={styles.actionButton}
            onClick={() => (window.location.href = "#preguntas")}
          >
            Revisar preguntas
          </button>
        </section>
      </main>
    </div>
  );
}
