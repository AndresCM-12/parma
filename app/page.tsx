import CustomFooter from "./components/footer/custom-footer";
import CustomHeader from "./components/header/custom-header";
import styles from "./page.module.css";
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
  homePage,
  recipesPage,
  whereFindUs,
} from "./utils/constants";
import HomeHero from "./components/home/HomeFooter";
import HomeFooter from "./components/home/HomeFooter";
import HomeHeader from "./components/home/HomeHeader";

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
  const homeInfo = await fetchArrayInPost(homePage);

  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <HomeHeader homeInfo={homeInfo.header} />
        <FeaturedProducts products={products} />
        <FeaturedRecipe recipes={recipes} />
        <FeaturedBlog blogItems={blogs} />
        <WhereFindUs stores={stores} />
        <HomeFooter homeInfo={homeInfo.footer} />
        <FeaturedReviews reviews={reviews} />
      </main>
      <CustomFooter />
    </>
  );
}
