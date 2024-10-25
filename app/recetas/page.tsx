import { recipesPage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import RecipesClientWrapper from "./client.wrapper";

export default async function Home() {
  const recipes = await fetchPageInfo(recipesPage);
  return <RecipesClientWrapper recipes={recipes}></RecipesClientWrapper>;
}
