import ForoProvokerClientWrapper from "./client.wrapper";
import { fetchArrayInPost, fetchPageInfo } from "../utils/methods";
import { foroInfo, foroProvokerFAQ } from "../utils/constants";

export default async function ForoHome() {
  const faqQuestions = await fetchPageInfo(foroProvokerFAQ);
  const faqInfoData = await fetchArrayInPost(foroInfo);

  return (
    <ForoProvokerClientWrapper
      faqQuestions={faqQuestions}
      faqInfoData={faqInfoData}
    ></ForoProvokerClientWrapper>
  );
}
