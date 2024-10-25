import { maridajePage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import MaridajeClientWrapper from "./client.wrapper";

export default async function MaridajeHome() {
  const items = await fetchPageInfo(maridajePage);

  return <MaridajeClientWrapper items={items}></MaridajeClientWrapper>;
}
