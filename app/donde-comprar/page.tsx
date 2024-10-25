import CustomHeader from "../components/header/custom-header";
import styles from "./page.module.css";
import CustomFooter from "../components/footer/custom-footer";
import trailing from "../../public/images/trail_black.svg";

import ItemsWhereToBuy from "./components/items";
import { fetchArrayInPost } from "../utils/methods";
import { whereFindUs } from "../utils/constants";

export default async function Home() {
  const stores = await fetchArrayInPost(whereFindUs);
  
  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <div className={styles.titleWrapper}>
          <h1>¿Donde comprar?</h1>
          <img src={trailing.src} alt="trailing" className={styles.trailing} />
        </div>
        <ItemsWhereToBuy stores={stores} />
      </main>
      <CustomFooter />
    </>
  );
}
