import ForoProvokerClientWrapper from "./client.wrapper";
import { fetchPageInfo } from "../utils/methods";
import { foroProvokerFAQ, foroProvokerUsers } from "../utils/constants";

export default async function ForoHome() {
  const faqQuestions = await fetchPageInfo(foroProvokerFAQ);

  return (
    <ForoProvokerClientWrapper
      faqQuestions={faqQuestions}
    ></ForoProvokerClientWrapper>
  );
}
