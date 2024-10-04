import CustomFooter from "./components/footer/custom-footer";
import CustomHeader from "./components/header/custom-header";
import styles from "./page.module.css";
import homeBanner from "../public/images/home-cover.webp";
import parmaWhiteLogo from "../public/images/white-logo.webp";
import maridajeCover from "../public/images/maridaje-home-cover.webp";
import WhereFindUs from "./components/home/where-find-us";
import FeaturedBlog from "./components/home/featured-blog";
import FeaturedRecipe from "./components/home/featured-recipe";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.cover}>
          <img src={homeBanner.src} alt="Imagen cover de parma" />
          <div className={styles.titleWrapper}>
            <h1>Somos Premium somos</h1>
            <img src={parmaWhiteLogo.src} alt="Logo de parma" />
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <a href="/marca">QUIENES SOMOS</a>
        </div>
        <FeaturedRecipe />
        <FeaturedBlog />
        <WhereFindUs />
        <div className={styles.maridajeWrapper}>
          <img src={maridajeCover.src} alt="Cover de imagen de maridaje" />
          <h2>Descubre tu maridaje</h2>
          <a href="/maridaje">Conocer más</a>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}
