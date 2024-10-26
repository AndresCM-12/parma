import { blogsPage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import ClientWrapperBlogs from "./client.wrapper";

export default async function Home() {
  const items = await fetchPageInfo(blogsPage);
  return <ClientWrapperBlogs details={items}></ClientWrapperBlogs>;
}
