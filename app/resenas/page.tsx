import { reviewsPage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import ClientReviewsWrapper from "./client.wrapper";

export default async function Home() {
  const items = await fetchPageInfo(reviewsPage);

  return <ClientReviewsWrapper items={items}></ClientReviewsWrapper>;
}
