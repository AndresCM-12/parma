"use client";
import CustomHeader from "../../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../../components/footer/custom-footer";
import { useEffect, useState } from "react";
import FeaturedRecipeHorizontal from "@/app/components/home/featured-recipe-horizontal";
import { fetchArrayInPost, fetchPageDetailInfo } from "@/app/utils/methods";
import { RecipeInterface, featuredRecipes, recipesPage } from "@/app/utils/constants";

export default function ClientWrapperRecipe() {
  useEffect(() => {
    const path = window.location.pathname.split("/")[2];
    const getProductDetail = async () => {
      const response = await fetchPageDetailInfo(path);
      const recipes = (await fetchArrayInPost(recipesPage))
      .flatMap((items: any) => items.blogs) as RecipeInterface[];

      //Order in random way the recipes 10 recipes
      const randomRecipes = recipes.sort(() => Math.random() - 0.5).slice(0, 10);

      setItems(randomRecipes);
      setProductDetail(response);
    };

    if (productDetail?.name === undefined) getProductDetail();
  }, []);

  interface ProductDetailInterface {
    name: string;
    image: string;
    difficulty: number;
    time: string;
    title: string;
    instructions: string[];
    ingredients: string[];
    video: string;
  }

  const [productDetail, setProductDetail] = useState(
    {} as ProductDetailInterface
  );

  const [items, setItems] = useState([] as RecipeInterface[]);

  return (
    <>
      <CustomHeader />
      {productDetail.image ? (
        <main className={styles.mainWrapper}>
          <section className={styles.headerWrapper}>
            <div className={styles.leftContainer}>
              <img src={productDetail?.image} alt="Imagen de la receta" />
              <h1>
                {productDetail?.name}
                {getDifficulty(productDetail?.difficulty)}
                <p>{productDetail?.time}</p>
              </h1>
            </div>
            <div className={styles.rightContainer}>
              <h2>INGREDIENTES:</h2>
              <ul>
                {productDetail?.ingredients?.map((description, index) => (
                  <li>
                    <p key={index}>{description}</p>
                  </li>
                ))}
              </ul>
              <h2
                style={{
                  marginTop: "28px",
                }}
              >
                PROCEDIMIENTOS:
              </h2>
              <ol>
                {productDetail?.instructions?.map((description, index) => (
                  <li>
                    <p key={index}>{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {productDetail?.video && (
            <section className={styles.videoWrapper}>
              <iframe
                src={productDetail?.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </section>
          )}
          <FeaturedRecipeHorizontal recipes={items} />
        </main>
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
      <CustomFooter />
    </>
  );
}

function getDifficulty(difficulty: number) {
  return (
    <div className={styles.difficultyWrapper}>
      <h3>
        Dificultad:{" "}
        {difficulty === 1 ? "Fácil " : difficulty === 2 ? "Media " : "Difícil "}
      </h3>
      {difficulty === 1 ? (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div></div>
          <div></div>
        </div>
      ) : difficulty === 2 ? (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.difficyltyIndicator}>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
          <div className={styles.active}></div>
        </div>
      )}
    </div>
  );
}
