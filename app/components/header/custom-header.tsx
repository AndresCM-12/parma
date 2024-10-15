"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./header.module.css";
import blackLogo from "../../../public/images/black-logo.webp";
import linkTrailWhite from "../../../public/images/trail_white.svg";
import spotifyLogo from "../../../public/images/spotify-logo.svg";
import openMenuIcon from "../../../public/images/open-menu.svg";
import MobileMenu from "./mobile-menu";

export default function CustomHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("");
  const linkInfo = [
    { href: "/marca", text: "Marca" },
    { href: "/recetas", text: "Recetas" },
    { href: "/productos", text: "Productos" },
    { href: "/foro-provoker", text: "Foro Provoker" },
    { href: "/contacto", text: "Contacto" },
  ];

  useLayoutEffect(() => {
    if (selectedPage === "") {
      const currentPage = window.location.pathname;
      console.log(currentPage);
      setSelectedPage(currentPage);
    }
  }, []);

  return (
    <>
      <header className={styles.customHeader}>
        <div className={styles.leftContainer}>
          <img
            className={styles.logo}
            onClick={() => (window.location.href = "/")}
            src={blackLogo.src}
            width={164}
            height={60}
            alt="Logotipo de parma"
            style={{ cursor: "pointer" }}
          />
          <nav>
            {linkInfo.map((link, index) => (
              <div className={styles.linkWrapper} key={index}>
                <a href={link.href}>{link.text}</a>
                <img
                  src={linkTrailWhite.src}
                  alt="trailing"
                  style={{
                    opacity: selectedPage === link.href ? 1 : 0,
                  }}
                />
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.rightContainer}>
          <a href="/maridajes">Maridajes</a>
          <a href="/https://spotify.com">
            <img src={spotifyLogo.src} alt="logo de spotify" /> Nuestra Playlist
          </a>
          <div className={styles.menuIcon} onClick={() => setMenuIsOpen(true)}>
            <img
              src={openMenuIcon.src}
              width={48}
              height={48}
              alt="Menú hamburguesa"
            />
          </div>
        </div>
      </header>
      <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  );
}
