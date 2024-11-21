import CustomFooter from "./components/footer/custom-footer";
import CustomHeader from "./components/header/custom-header";
import styles from "./page.module.css";
import homeBanner from "../public/images/home-cover.webp";
import parmaWhiteLogo from "../public/images/white-logo.webp";
import maridajeCover from "../public/images/maridaje-home-cover.webp";
import WhereFindUs from "./components/home/where-find-us";
import FeaturedBlog from "./components/home/featured-blog";
import FeaturedRecipe from "./components/home/featured-recipe";
import FeaturedProducts from "./components/home/featured-products";
import FeaturedReviews from "./components/home/featured-reviews";
import { fetchArrayInPost } from "@/app/utils/methods";
import {
  BlogItem,
  FeaturedProductsInterface,
  RecipeInterface,
  Review,
  Store,
  blogsPage,
  featuredProducts,
  featuredReviews,
  recipesPage,
  whereFindUs,
} from "./utils/constants";

export default async function Home() {
  const products = (await fetchArrayInPost(
    featuredProducts
  )) as FeaturedProductsInterface[];

  const recipes = (await fetchArrayInPost(recipesPage))
    .flatMap((items: any) => items.blogs)
    .filter((item: any) => item.showInHome == true) as RecipeInterface[];
  const blogs = (await fetchArrayInPost(blogsPage))
    .flatMap((items: any) => items.blogs)
    .filter((item: any) => item.showInHome == true) as BlogItem[];
  const stores = (await fetchArrayInPost(whereFindUs)) as Store[];
  const reviews = (await fetchArrayInPost(featuredReviews)) as Review[];

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
        <FeaturedProducts products={products} />
        <FeaturedRecipe recipes={recipes} />
        <FeaturedBlog blogItems={blogs} />
        <WhereFindUs stores={stores} />
        <div className={styles.maridajeWrapper}>
          <img src={maridajeCover.src} alt="Cover de imagen de maridaje" />
          <h2>Descubre tu maridaje</h2>
          <a href="/maridajes">Conocer más</a>
        </div>
        <FeaturedReviews reviews={reviews} />
      </main>
      <CustomFooter />
    </>
  );
}
