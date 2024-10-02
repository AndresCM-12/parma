import React, { useLayoutEffect, useState } from "react";
import closeMenuIcon from "../../../public/images/close-menu.svg";
import styles from "./header.module.css";
import blackLogo from "../../../public/images/black-logo.webp";
import linkTrailWhite from "../../../public/images/trail_white.svg";
import spotifyLogo from "../../../public/images/spotify-logo.svg";

export default function MobileMenu({
  menuIsOpen,
  setMenuIsOpen,
}: Readonly<{ menuIsOpen: boolean; setMenuIsOpen: (value: boolean) => void }>) {
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
      <div
        className={styles.dialogBackground}
        onClick={() => setMenuIsOpen(false)}
        style={{
          display: menuIsOpen ? "flex" : "none",
        }}
      ></div>

      <div
        className={styles.floatingMobileMenu}
        style={{
          right: menuIsOpen ? 0 : "-100%",
        }}
      >
        <div className={styles.menuHeader}>
          <img
            className={styles.logo}
            onClick={() => (window.location.href = "/")}
            src={blackLogo.src}
            width={120}
            height={50}
            alt="Logotipo de parma"
            style={{ cursor: "pointer" }}
          />
          <img
            onClick={() => setMenuIsOpen(false)}
            className={styles.closeMenuIcon}
            src={closeMenuIcon.src}
            width={48}
            height={48}
            alt="Cerrar menú"
          />
        </div>
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

        <div className={styles.rightContainerMobileMenu}>
          <a href="/maridajes">Maridajes</a>
          <a href="/https://spotify.com">
            <img src={spotifyLogo.src} alt="logo de spotify" /> Nuestra Playlist
          </a>
        </div>
      </div>
    </>
  );
}
