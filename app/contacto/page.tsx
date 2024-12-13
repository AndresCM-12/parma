import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import contactCover from "../../public/images/contact-cover.png";
import CustomFooter from "../components/footer/custom-footer";
import kraftBg from "../../public/images/kraft.webp";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.redWrapper}>
          <img src={contactCover.src} alt="Contacto" />
        </div>
        <div className={styles.bottomWrapper}>
          <form
            action="https://formsubmit.co/atencionclientes@bafar.com.mx"
            method="POST"
            className={styles.formWrapper}
            style={{
              backgroundImage: `url(${kraftBg.src})`,
              backgroundSize: "cover",
            }}
          >
            <h6>Contacto</h6>
            <label htmlFor="name">Nombre:</label>
            <input id="name" type="text" name="name" placeholder="" />
            <label htmlFor="email">Correo electrónico:</label>
            <input id="email" type="email" name="email" placeholder="" />
            <label htmlFor="message">Escribe tu mensaje:</label>
            <textarea id="message" name="message" placeholder=""></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}
