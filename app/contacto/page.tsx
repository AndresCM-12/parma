import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import contactCover from "../../public/images/contact-cover.png";
import CustomFooter from "../components/footer/custom-footer";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.redWrapper}>
          <img src={contactCover.src} alt="Contacto" />
        </div>
        <div className={styles.bottomWrapper}>
          <form className={styles.formWrapper}>
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
