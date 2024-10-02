import CustomHeader from "../components/header/custom-header";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.mainWrapper}>
        <p>Página de Maridajes</p>
      </main>
    </>
  );
}
