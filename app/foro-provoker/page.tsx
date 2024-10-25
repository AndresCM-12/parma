import ForoProvokerClientWrapper from "./client.wrapper";
import { fetchPageInfo } from "../utils/methods";
import { foroProvokerFAQ, foroProvokerUsers } from "../utils/constants";

export default async function ForoHome() {
  const faqQuestions = await fetchPageInfo(foroProvokerFAQ);
  const userQuestions = await fetchPageInfo(foroProvokerUsers);

  return (
    <ForoProvokerClientWrapper
      faqQuestions={faqQuestions}
      userQuestions={faqQuestions}
    ></ForoProvokerClientWrapper>
  );
}
