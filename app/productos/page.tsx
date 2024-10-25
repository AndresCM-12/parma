import { productsPage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import ClientProductsWrapper from "./client.wrapper";

export default async function ProductsHome() {
  const products = await fetchPageInfo(productsPage);
  return <ClientProductsWrapper items={products}></ClientProductsWrapper>;
}
