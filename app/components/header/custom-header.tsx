"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./header.module.css";
import blackLogo from "../../../public/images/header-logo.svg";
import linkTrailWhite from "../../../public/images/trail_white.svg";
import spotifyLogo from "../../../public/images/spotify-logo.svg";
import openMenuIcon from "../../../public/images/open-menu.svg";
import MobileMenu from "./mobile-menu";

import facebookIcon from "../../../public/social-icons/facebook-icon.svg";
import instagramIcon from "../../../public/social-icons/instagram-icon.svg";
import youtubeIcon from "../../../public/social-icons/youtube-icon.svg";
import spotifyIcon from "../../../public/social-icons/spotify-icon.svg";

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
            width={100}
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
          <div className={styles.iconWrappers}>
            <a href="https://www.facebook.com/PARMAMexico" target="_blank">
              <img
                src={facebookIcon.src}
                alt="Ícono de facebook"
                width={20}
                height={20}
                style={{
                  filter: "invert(1)",
                }}
              />
            </a>
            <a href="https://www.instagram.com/parmamexico" target="_blank">
              <img
                src={instagramIcon.src}
                alt="Ícono de instagram"
                width={20}
                height={20}
                style={{
                  filter: "invert(1)",
                }}
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
                style={{
                  filter: "invert(1)",
                }}
              />
            </a>
          </div>
          <a href="/maridajes">Maridajes</a>
          <a
            href="https://open.spotify.com/user/31io5d5xvnxvnbbdvkjvnt67y4ea?si=zjDaTErcTr2VKRSzouDZpw"
            target="_blank"
          >
            <img src={spotifyLogo.src} alt="logo de spotify" /> Nuestra Playlist
          </a>
          <div
            className={styles.menuIcon}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
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
