import { brandPage } from "../utils/constants";
import { fetchPageInfo } from "../utils/methods";
import MarcaClientWrapper from "./client.wrapper";

export default async function Marca() {
  const info = await fetchPageInfo(brandPage);
  console.log("info:", info);

  return (
    <MarcaClientWrapper
      timeLine={info.timeLine}
      information={info.information}
      values={info.values}
      process={info.process}
    ></MarcaClientWrapper>
  );
}
