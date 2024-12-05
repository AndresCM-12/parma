import React from "react";
import styles from "./footer.module.css";
import colorLogo from "../../../public/images/color-logo.webp";

import facebookIcon from "../../../public/social-icons/facebook-icon.svg";
import instagramIcon from "../../../public/social-icons/instagram-icon.svg";
import youtubeIcon from "../../../public/social-icons/youtube-icon.svg";
import spotifyIcon from "../../../public/social-icons/spotify-icon.svg";

export default function CustomFooter() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.leftWrapper}>
        <a href="/">
          <img
            src={colorLogo.src}
            width={128}
            height={44}
            alt="Parma Logotipo"
          />
        </a>
        <div className={styles.textWrapper}>
          <a href="blog">Nuestro Blog</a>
          <a href="/donde-comprar">¿Dónde comprar?</a>
          <a href="/contacto">Contacto</a>
          <div className={styles.terms}>
            <a href="terminos-y-condiciones">Términos y condiciones</a> |{" "}
            <a href="aviso-de-privacidad">Aviso de privacidad</a>
          </div>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.iconWrappers}>
          <a href="https://www.facebook.com/PARMAMexico" target="_blank">
            <img
              src={facebookIcon.src}
              alt="Ícono de facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.instagram.com/parmamexico" target="_blank">
            <img
              src={instagramIcon.src}
              alt="Ícono de instagram"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5eZukx47tz-1QJg_HrZ_KQ"
            target="_blank"
          >
            <img
              src={youtubeIcon.src}
              alt="Ícono de youtube"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://open.spotify.com/user/31io5d5xvnxvnbbdvkjvnt67y4ea?si=zjDaTErcTr2VKRSzouDZpw"
            target="_blank"
          >
            <img
              src={spotifyIcon.src}
              alt="Ícono de spotify"
              width={20}
              height={20}
            />
          </a>
        </div>
        <p className={styles.title}>ÚNETE A NUESTRO NEWSLETTER</p>
        <form action="POST">
          <input type="email" placeholder="Correo electrónico" />
          <button type="submit">Suscríbete</button>
        </form>
        <div className={styles.clientService}>
          <p
            style={{
              fontWeight: "600",
            }}
          >
            Atención al cliente:
          </p>
          <a href="mailto:info@parma.mx">info@parma.mx</a>
        </div>
      </div>
    </footer>
  );
}
